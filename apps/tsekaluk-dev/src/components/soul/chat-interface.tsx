"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useSession, signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "@nebutra/ui/components";
import { Send, Loader2 } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function SoulOrb({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLg = size === "lg";
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => (f + 1) % 4), 250);
    return () => clearInterval(interval);
  }, []);

  const spinnerFrames = ["|", "/", "-", "\\"];

  return (
    <div className={`relative shrink-0 flex items-center justify-center font-mono text-[var(--color-accent-fg)] ${isLg ? "w-20 h-20 text-4xl" : "w-10 h-10 text-base"}`}>
      {isLg ? (
        <div className="flex flex-col items-center justify-center leading-none z-10">
          <span>{spinnerFrames[frame]}</span>
        </div>
      ) : (
        <span className="z-10 animate-[pulse_2s_ease-in-out_infinite]">{">_"}</span>
      )}
    </div>
  );
}

function TypingDots() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => (f + 1) % 4), 250);
    return () => clearInterval(interval);
  }, []);
  const frames = ["[=   ]", "[==  ]", "[=== ]", "[ ===]"];
  return (
    <div className="flex items-center gap-1 font-mono text-sm px-4 py-3 text-[#a3e635]">
      {frames[frame]}
    </div>
  );
}

export function ChatInterface({ isWidget = false }: { isWidget?: boolean }) {
  const t = useTranslations("soul");
  const { data: session, status } = useSession();
  const { track } = useAnalytics();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMsg: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    track("soul_chat_message_sent", { message_count: nextMessages.length });
    setIsTyping(true);
    setIsStreaming(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const raw = line.slice(6).trim();
          if (!raw || raw === "[DONE]") continue;

          try {
            const parsed = JSON.parse(raw) as {
              type: string;
              delta?: { type: string; text: string };
            };
            if (
              parsed.type === "content_block_delta" &&
              parsed.delta?.type === "text_delta" &&
              parsed.delta.text
            ) {
              const chunk = parsed.delta.text;
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last?.role === "assistant") {
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + chunk,
                  };
                }
                return updated;
              });
            }
          } catch {
            // skip malformed SSE chunks
          }
        }
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t("error") },
      ]);
    } finally {
      setIsStreaming(false);
      setIsTyping(false);
    }
  }, [input, isStreaming, messages, t]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleStarter = (text: string) => {
    setInput(text);
    textareaRef.current?.focus();
  };

  const starters = [t("starter1"), t("starter2"), t("starter3")];

  if (status === "loading") {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className={`flex h-full flex-col items-center justify-center gap-6 text-center ${isWidget ? "px-4 py-6" : "px-6 py-8"}`}>
        <AnimateIn preset="fade">
          <SoulOrb size="lg" />
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1}>
          <div className="space-y-1.5">
            <p className="text-base font-semibold text-foreground">
              {t("greeting_title")}
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              {t("greeting_desc")}
            </p>
          </div>
        </AnimateIn>

        {/* Starter chips — tease what users can ask */}
        <AnimateIn preset="fadeUp" delay={0.18}>
          <div className="flex flex-wrap justify-center gap-2 max-w-sm pointer-events-none opacity-50 select-none">
            {starters.map((s) => (
              <span
                key={s}
                className="font-mono rounded-lg border border-border bg-muted/50 px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.26}>
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground">{t("auth_required")}</p>
            <button
              type="button"
              onClick={() => signIn("github")}
              className="flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              {t("auth_button")}
            </button>
          </div>
        </AnimateIn>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}
      <div aria-live="polite" role="log" className={`flex-1 overflow-y-auto ${isWidget ? "px-3 py-4" : "px-5 py-6"}`}>
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex h-full flex-col items-center justify-center gap-5 text-center"
          >
            <SoulOrb size="lg" />
            <div>
              <p className="text-base font-semibold text-foreground">
                {t("greeting_title")}
              </p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                {t("greeting_desc")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-sm mt-4">
              {starters.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleStarter(s)}
                  className="font-mono rounded-lg border border-border bg-muted/50 px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-[#a3e635]/50 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="space-y-5">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && <SoulOrb />}
                <div
                  className={`max-w-[85%] px-5 py-3.5 text-sm leading-relaxed whitespace-pre-wrap font-sans ${msg.role === "user"
                    ? "rounded-2xl rounded-br-sm bg-foreground text-background"
                    : "rounded-lg border border-border bg-background text-foreground shadow-sm"
                    }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <SoulOrb />
              <div className="rounded-lg border border-border bg-background shadow-sm flex items-center justify-center">
                <TypingDots />
              </div>
            </motion.div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border px-5 py-4">
        <div className="flex items-end gap-3 rounded-lg border border-border bg-background px-4 py-3 shadow-sm transition-colors focus-within:border-[#a3e635]/60">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("placeholder")}
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm text-foreground focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 placeholder:text-muted-foreground font-mono"
            style={{ maxHeight: "120px" }}
            onInput={(e) => {
              const el = e.currentTarget;
              el.style.height = "auto";
              el.style.height = `${el.scrollHeight}px`;
            }}
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={!input.trim() || isStreaming}
            aria-label="Send message"
            className="shrink-0 rounded-md bg-foreground p-2 text-background transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isStreaming ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
