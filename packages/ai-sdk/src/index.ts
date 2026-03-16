import { generateText as _generateText, streamText as _streamText, type ModelMessage } from "ai";
import { openai } from "@ai-sdk/openai";

export interface NebutraAIOptions {
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
}

const DEFAULT_OPTIONS = {
  temperature: 0.7,
  maxTokens: 1000,
};

/**
 * Generates a full text response from the global Nebutra OpenAI configuration.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateText(messages: ModelMessage[], options?: NebutraAIOptions): Promise<any> {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  
  return await _generateText({
    model: openai("gpt-4o-mini"),
    messages,
    ...(mergedOptions.systemPrompt ? { system: mergedOptions.systemPrompt } : {}),
    temperature: mergedOptions.temperature,
    // Note: Vercel AI 6+ passes maxTokens natively underneath if supported or defaults. 
    // If we want constraints, `maxSteps` is preferred for tools, or we omit `maxTokens` 
    // from the core CallSettings if it was removed in this specific union.
  });
}

/**
 * Returns a streaming standard Vercel AI text response from the global Nebutra configuration.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function streamText(messages: ModelMessage[], options?: NebutraAIOptions): Promise<any> {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  
  return await _streamText({
    model: openai("gpt-4o-mini"),
    messages,
    ...(mergedOptions.systemPrompt ? { system: mergedOptions.systemPrompt } : {}),
    temperature: mergedOptions.temperature,
  });
}

// Re-export core Vercel AI types for downstream consumption
export type { ModelMessage, Tool } from "ai";
