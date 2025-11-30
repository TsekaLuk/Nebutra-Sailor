import { z } from "zod";

// ============================================
// Provider Types
// ============================================

export type ProviderName = "siliconflow" | "openai" | "anthropic" | "google";

export interface ProviderConfig {
  apiKey: string;
  baseUrl?: string;
  organization?: string;
  defaultModel?: string;
  timeout?: number;
  maxRetries?: number;
}

// ============================================
// Chat Types
// ============================================

export type MessageRole = "system" | "user" | "assistant" | "tool";

export interface ChatMessage {
  role: MessageRole;
  content: string;
  name?: string;
  toolCallId?: string;
}

export interface ToolFunction {
  name: string;
  description?: string;
  parameters?: Record<string, unknown>;
}

export interface Tool {
  type: "function";
  function: ToolFunction;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stream?: boolean;
  stop?: string | string[];
  tools?: Tool[];
  toolChoice?: "auto" | "none" | "required" | { type: "function"; function: { name: string } };
  responseFormat?: { type: "text" | "json_object" };
}

export interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface ChatCompletionChoice {
  index: number;
  message: {
    role: "assistant";
    content: string | null;
    toolCalls?: ToolCall[];
    reasoningContent?: string; // For models like DeepSeek-R1
  };
  finishReason: "stop" | "length" | "tool_calls" | "content_filter" | null;
}

export interface ChatCompletionUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface ChatCompletionResponse {
  id: string;
  object: "chat.completion";
  created: number;
  model: string;
  choices: ChatCompletionChoice[];
  usage?: ChatCompletionUsage;
}

export interface ChatCompletionChunk {
  id: string;
  object: "chat.completion.chunk";
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: {
      role?: "assistant";
      content?: string;
      toolCalls?: ToolCall[];
    };
    finishReason: "stop" | "length" | "tool_calls" | null;
  }>;
}

// ============================================
// Embedding Types
// ============================================

export interface EmbeddingRequest {
  model: string;
  input: string | string[];
  encodingFormat?: "float" | "base64";
}

export interface EmbeddingData {
  object: "embedding";
  index: number;
  embedding: number[];
}

export interface EmbeddingResponse {
  object: "list";
  data: EmbeddingData[];
  model: string;
  usage: {
    promptTokens: number;
    totalTokens: number;
  };
}

// ============================================
// Rerank Types (SiliconFlow specific)
// ============================================

export interface RerankRequest {
  model: string;
  query: string;
  documents: string[] | Array<{ text: string; [key: string]: unknown }>;
  topN?: number;
  returnDocuments?: boolean;
  maxChunksPerDoc?: number;
}

export interface RerankResult {
  index: number;
  document?: { text: string };
  relevanceScore: number;
}

export interface RerankResponse {
  object: "list";
  results: RerankResult[];
  model: string;
  usage?: {
    totalTokens: number;
  };
}

// ============================================
// Image Types
// ============================================

export interface ImageGenerationRequest {
  model: string;
  prompt: string;
  negativePrompt?: string;
  n?: number;
  size?: string;
  quality?: "standard" | "hd";
  style?: "vivid" | "natural";
  responseFormat?: "url" | "b64_json";
}

export interface ImageData {
  url?: string;
  b64Json?: string;
  revisedPrompt?: string;
}

export interface ImageGenerationResponse {
  created: number;
  data: ImageData[];
}

// ============================================
// Audio Types
// ============================================

export interface TextToSpeechRequest {
  model: string;
  input: string;
  voice: string;
  speed?: number;
  responseFormat?: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
}

export interface SpeechToTextRequest {
  model: string;
  file: Blob | Buffer;
  language?: string;
  prompt?: string;
  responseFormat?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  temperature?: number;
}

export interface TranscriptionResponse {
  text: string;
  task?: string;
  language?: string;
  duration?: number;
  words?: Array<{ word: string; start: number; end: number }>;
}

// ============================================
// Error Types
// ============================================

export class AIProviderError extends Error {
  constructor(
    message: string,
    public readonly provider: ProviderName,
    public readonly statusCode?: number,
    public readonly code?: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "AIProviderError";
  }
}

export class RateLimitError extends AIProviderError {
  constructor(provider: ProviderName, retryAfter?: number) {
    super(
      `Rate limit exceeded for ${provider}${retryAfter ? `. Retry after ${retryAfter}s` : ""}`,
      provider,
      429,
      "rate_limit_exceeded"
    );
    this.name = "RateLimitError";
  }
}

export class AuthenticationError extends AIProviderError {
  constructor(provider: ProviderName) {
    super(`Authentication failed for ${provider}`, provider, 401, "authentication_error");
    this.name = "AuthenticationError";
  }
}

// ============================================
// Zod Schemas for Validation
// ============================================

export const ChatMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string(),
  name: z.string().optional(),
  toolCallId: z.string().optional(),
});

export const ChatCompletionRequestSchema = z.object({
  model: z.string(),
  messages: z.array(ChatMessageSchema),
  temperature: z.number().min(0).max(2).optional(),
  maxTokens: z.number().positive().optional(),
  topP: z.number().min(0).max(1).optional(),
  stream: z.boolean().optional(),
  stop: z.union([z.string(), z.array(z.string())]).optional(),
});

export const EmbeddingRequestSchema = z.object({
  model: z.string(),
  input: z.union([z.string(), z.array(z.string())]),
  encodingFormat: z.enum(["float", "base64"]).optional(),
});
