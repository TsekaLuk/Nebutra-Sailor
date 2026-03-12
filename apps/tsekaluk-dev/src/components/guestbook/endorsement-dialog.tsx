"use client";

import { useState, useId } from "react";
import { useSession, signIn } from "next-auth/react";
import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useImageUpload } from "@/hooks/use-image-upload";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImagePlus, MessageSquarePlus, Loader2 } from "lucide-react";

const RELATIONSHIPS = [
  { value: "friend", label: "Friend", labelZh: "朋友" },
  { value: "colleague", label: "Colleague", labelZh: "同事" },
  { value: "client", label: "Client", labelZh: "客户" },
  { value: "partner", label: "Partner", labelZh: "合作伙伴" },
  { value: "classmate", label: "Classmate", labelZh: "同学" },
  { value: "mentor", label: "Mentor", labelZh: "导师" },
  { value: "fan", label: "Fan", labelZh: "粉丝" },
  { value: "other", label: "Other", labelZh: "其他" },
] as const;

interface EndorsementDialogProps {
  onSubmitted?: () => void;
}

export function EndorsementDialog({ onSubmitted }: EndorsementDialogProps) {
  const id = useId();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nickname, setNickname] = useState("");
  const [relationship, setRelationship] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const { value, characterCount, handleChange, maxLength } = useCharacterLimit({
    maxLength: 280,
  });

  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange: rawHandleFileChange,
  } = useImageUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    rawHandleFileChange(e);
    const file = e.target.files?.[0];
    if (file) setAvatarFile(file);
  };

  const profileImage = previewUrl ?? session?.user?.image ?? null;
  const displayName = nickname || session?.user?.name || "";

  async function handleSubmit() {
    if (!value.trim() || !nickname.trim() || !relationship) return;

    setSubmitting(true);
    try {
      let avatarUrl = session?.user?.image ?? null;

      // Upload custom avatar if provided
      if (avatarFile) {
        const formData = new FormData();
        formData.append("file", avatarFile);
        const uploadRes = await fetch("/api/guestbook/avatar", {
          method: "POST",
          body: formData,
        });
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          avatarUrl = uploadData.url;
        }
      }

      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: value.trim(),
          nickname: nickname.trim(),
          relationship,
          avatar_url: avatarUrl,
        }),
      });

      if (res.ok) {
        setOpen(false);
        onSubmitted?.();
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (!session?.user) {
    return (
      <button
        type="button"
        onClick={() => signIn()}
        className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        <MessageSquarePlus className="h-4 w-4" />
        Sign in to endorse
      </button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <MessageSquarePlus className="h-4 w-4" />
          Leave an endorsement
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl p-0 overflow-hidden">
        {/* Gradient banner */}
        <div
          className="px-6 py-4 h-28"
          style={{
            background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdf4 50%, #fef3c7 100%)",
          }}
        />

        {/* Avatar upload */}
        <div className="-mt-12 flex justify-center">
          <div className="relative">
            <Avatar className="h-20 w-20 border-4 border-white dark:border-gray-900 shadow-lg">
              <AvatarImage src={profileImage ?? undefined} alt="Profile" />
              <AvatarFallback className="text-lg font-serif italic">
                {displayName.charAt(0).toUpperCase() || "?"}
              </AvatarFallback>
            </Avatar>
            <button
              type="button"
              onClick={handleThumbnailClick}
              className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Change avatar"
            >
              <ImagePlus size={14} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>

        <DialogTitle className="sr-only">Leave an endorsement</DialogTitle>
        <DialogDescription className="sr-only">
          Share your experience working with Tseka Luk
        </DialogDescription>

        {/* Form */}
        <div className="px-6 pb-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 space-y-1.5">
              <Label htmlFor={`${id}-nickname`}>Nickname</Label>
              <Input
                id={`${id}-nickname`}
                placeholder="Your name"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <Label htmlFor={`${id}-relationship`}>Relationship</Label>
              <select
                id={`${id}-relationship`}
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="flex h-9 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1.5 text-sm text-gray-900 dark:text-white shadow-sm focus-visible:border-gray-400 dark:focus-visible:border-gray-500 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gray-200/50 dark:focus-visible:ring-gray-700/50"
              >
                <option value="">Select...</option>
                {RELATIONSHIPS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label} / {r.labelZh}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${id}-message`}>Message</Label>
            <Textarea
              id={`${id}-message`}
              placeholder="Share your experience..."
              value={value}
              onChange={handleChange}
              maxLength={maxLength}
              rows={3}
            />
            <p className="text-xs text-gray-400 text-right">
              {maxLength - characterCount} characters left
            </p>
          </div>
        </div>

        <DialogFooter className="border-t border-gray-100 dark:border-gray-800 px-6 py-4">
          <DialogClose asChild>
            <button
              type="button"
              className="rounded-full border border-gray-200 dark:border-gray-700 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
          </DialogClose>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting || !value.trim() || !nickname.trim() || !relationship}
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            {submitting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            Submit for review
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
