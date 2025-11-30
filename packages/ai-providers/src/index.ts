/**
 * @nebutra/ai-providers
 *
 * Multi-provider AI SDK for Nebutra
 *
 * Supports:
 * - SiliconFlow (DeepSeek, Qwen, BGE embeddings, reranking)
 * - OpenAI (GPT-4, embeddings, DALL-E, Whisper)
 *
 * @example
 * ```typescript
 * import { createProvider, SiliconFlowProvider } from "@nebutra/ai-providers";
 *
 * // Using factory
 * const provider = createProvider("siliconflow", {
 *   apiKey: process.env.SILICONFLOW_API_KEY!,
 * });
 *
 * // Or directly
 * const siliconflow = new SiliconFlowProvider({
 *   apiKey: process.env.SILICONFLOW_API_KEY!,
 * });
 *
 * // Chat completion
 * const response = await provider.chat({
 *   model: "deepseek-ai/DeepSeek-V3",
 *   messages: [{ role: "user", content: "Hello!" }],
 * });
 *
 * // Embeddings
 * const embeddings = await provider.embed({
 *   model: "BAAI/bge-m3",
 *   input: "Hello world",
 * });
 *
 * // Reranking (SiliconFlow only)
 * const reranked = await siliconflow.rerank({
 *   model: "BAAI/bge-reranker-v2-m3",
 *   query: "What is AI?",
 *   documents: ["AI is artificial intelligence", "Dogs are pets"],
 * });
 * ```
 */

// Types
export type {
  ProviderName,
  ProviderConfig,
  MessageRole,
  ChatMessage,
  Tool,
  ToolFunction,
  ToolCall,
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatCompletionChoice,
  ChatCompletionUsage,
  ChatCompletionChunk,
  EmbeddingRequest,
  EmbeddingResponse,
  EmbeddingData,
  RerankRequest,
  RerankResponse,
  RerankResult,
  ImageGenerationRequest,
  ImageGenerationResponse,
  ImageData,
  TextToSpeechRequest,
  SpeechToTextRequest,
  TranscriptionResponse,
} from "./types.js";

// Error classes
export {
  AIProviderError,
  RateLimitError,
  AuthenticationError,
} from "./types.js";

// Zod schemas for validation
export {
  ChatMessageSchema,
  ChatCompletionRequestSchema,
  EmbeddingRequestSchema,
} from "./types.js";

// Providers
export {
  BaseAIProvider,
  createProvider,
  registerProvider,
  getRegisteredProviders,
  type ProviderCapability,
  type ProviderModel,
} from "./providers/base.js";

export {
  SiliconFlowProvider,
  SILICONFLOW_MODELS,
  type SiliconFlowConfig,
} from "./providers/siliconflow.js";

export {
  OpenAIProvider,
  OPENAI_MODELS,
} from "./providers/openai.js";

export {
  OpenRouterProvider,
  OPENROUTER_MODELS,
  OPENROUTER_VARIANTS,
  type OpenRouterConfig,
  type OpenRouterProviderPreferences,
  type OpenRouterChatRequest,
  type OpenRouterModelInfo,
  type OpenRouterGeneration,
  type OpenRouterRateLimit,
} from "./providers/openrouter.js";

// Configuration
export {
  DEFAULT_MODELS,
  getModelsForProvider,
  getModel,
  getAllModels,
  findBestModel,
  loadConfigFromEnv,
  type ProviderSelectionCriteria,
  type EnvironmentConfig,
} from "./config/index.js";
