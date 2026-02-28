import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import {
  registerChannel,
  clearChannels,
  getRegisteredChannelNames,
  unregisterChannel,
  sendAlert,
  sendAlertTo,
  trackError,
  resetErrorCounts,
  setAlertErrorHandler,
  type AlertChannel,
  type AlertPayload,
} from "../index.js";

// ─── helpers ────────────────────────────────────────────────────────────────

function makeMockChannel(
  name: string,
): AlertChannel & { calls: AlertPayload[] } {
  const calls: AlertPayload[] = [];
  return {
    name,
    calls,
    send: vi.fn(async (payload: AlertPayload) => {
      calls.push(payload);
      return true;
    }),
  };
}

const basePayload = {
  title: "Test Alert",
  message: "Something happened",
  severity: "info" as const,
};

// ─── Channel Registry ────────────────────────────────────────────────────────

describe("Channel Registry", () => {
  beforeEach(() => clearChannels());

  it("registers a channel", () => {
    registerChannel(makeMockChannel("slack"));
    expect(getRegisteredChannelNames()).toEqual(["slack"]);
  });

  it("unregisters a channel", () => {
    registerChannel(makeMockChannel("slack"));
    unregisterChannel("slack");
    expect(getRegisteredChannelNames()).toEqual([]);
  });

  it("clearChannels removes all channels", () => {
    registerChannel(makeMockChannel("slack"));
    registerChannel(makeMockChannel("discord"));
    clearChannels();
    expect(getRegisteredChannelNames()).toEqual([]);
  });

  it("replaces existing channel with same name on re-register", () => {
    registerChannel(makeMockChannel("slack"));
    registerChannel(makeMockChannel("slack"));
    expect(getRegisteredChannelNames()).toHaveLength(1);
  });
});

// ─── sendAlert ───────────────────────────────────────────────────────────────

describe("sendAlert", () => {
  beforeEach(() => clearChannels());

  it("calls all registered channels", async () => {
    const ch1 = makeMockChannel("slack");
    const ch2 = makeMockChannel("discord");
    registerChannel(ch1);
    registerChannel(ch2);

    await sendAlert(basePayload);

    expect(ch1.send).toHaveBeenCalledOnce();
    expect(ch2.send).toHaveBeenCalledOnce();
  });

  it("returns per-channel success results", async () => {
    registerChannel(makeMockChannel("slack"));
    const results = await sendAlert(basePayload);
    expect(results.get("slack")).toBe(true);
  });

  it("records false for a channel that throws", async () => {
    registerChannel({
      name: "broken",
      send: vi.fn().mockRejectedValue(new Error("network error")),
    });
    const results = await sendAlert(basePayload);
    expect(results.get("broken")).toBe(false);
  });

  it("auto-enriches payload with timestamp and environment", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);
    await sendAlert(basePayload);

    const received = ch.calls[0];
    expect(received.timestamp).toBeDefined();
    expect(new Date(received.timestamp!).toISOString()).toBe(
      received.timestamp,
    );
  });
});

// ─── sendAlertTo ─────────────────────────────────────────────────────────────

describe("sendAlertTo", () => {
  beforeEach(() => clearChannels());

  it("only calls the specified channels", async () => {
    const slack = makeMockChannel("slack");
    const discord = makeMockChannel("discord");
    registerChannel(slack);
    registerChannel(discord);

    await sendAlertTo(["slack"], basePayload);

    expect(slack.send).toHaveBeenCalledOnce();
    expect(discord.send).not.toHaveBeenCalled();
  });

  it("returns false for unknown channel name", async () => {
    const results = await sendAlertTo(["nonexistent"], basePayload);
    expect(results.get("nonexistent")).toBe(false);
  });
});

// ─── setAlertErrorHandler ────────────────────────────────────────────────────

describe("setAlertErrorHandler", () => {
  beforeEach(() => clearChannels());

  it("calls error handler when channel.send throws", async () => {
    const handler = vi.fn();
    setAlertErrorHandler(handler);

    registerChannel({
      name: "broken",
      send: vi.fn().mockRejectedValue(new Error("boom")),
    });

    await sendAlert(basePayload);
    expect(handler).toHaveBeenCalledWith(
      "Alert channel broken failed",
      expect.any(Error),
    );

    // Reset to no-op after test
    setAlertErrorHandler(() => {});
  });

  it("default no-op handler does not throw", async () => {
    setAlertErrorHandler(() => {});
    registerChannel({
      name: "broken",
      send: vi.fn().mockRejectedValue(new Error("silent")),
    });
    await expect(sendAlert(basePayload)).resolves.not.toThrow();
  });
});

// ─── trackError ──────────────────────────────────────────────────────────────

describe("trackError", () => {
  beforeEach(() => {
    clearChannels();
    resetErrorCounts();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const config = { windowMs: 60_000, threshold: 3, cooldownMs: 300_000 };

  it("does not alert below threshold", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);

    trackError("svc", config); // 1
    trackError("svc", config); // 2
    await vi.runAllTimersAsync();

    expect(ch.send).not.toHaveBeenCalled();
  });

  it("fires alert when threshold is reached", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);

    trackError("svc", config); // 1
    trackError("svc", config); // 2
    trackError("svc", config); // 3 → threshold
    await vi.runAllTimersAsync();

    expect(ch.send).toHaveBeenCalledOnce();
  });

  it("respects cooldown — does not re-alert within cooldown window", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);

    // Trigger first alert
    for (let i = 0; i < 3; i++) trackError("svc", config);
    await vi.runAllTimersAsync();
    expect(ch.send).toHaveBeenCalledTimes(1);

    // More errors within cooldown
    for (let i = 0; i < 3; i++) trackError("svc", config);
    await vi.runAllTimersAsync();
    expect(ch.send).toHaveBeenCalledTimes(1); // still 1
  });

  it("resets window after windowMs elapses", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);

    for (let i = 0; i < 2; i++) trackError("svc", config);
    vi.advanceTimersByTime(config.windowMs + 1);
    // Window resets → these 2 errors are below threshold
    for (let i = 0; i < 2; i++) trackError("svc", config);
    await vi.runAllTimersAsync();

    expect(ch.send).not.toHaveBeenCalled();
  });

  it("tracks separate services independently", async () => {
    const ch = makeMockChannel("slack");
    registerChannel(ch);

    for (let i = 0; i < 3; i++) trackError("svc-a", config);
    for (let i = 0; i < 3; i++) trackError("svc-b", config);
    await vi.runAllTimersAsync();

    // Two separate alerts (one per service)
    expect(ch.send).toHaveBeenCalledTimes(2);
  });
});
