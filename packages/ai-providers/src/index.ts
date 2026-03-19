/**
 * @nebutra/ai-providers
 *
 * Multi-provider AI SDK for Nebutra
 *
 * Supports:
 * - SiliconFlow (DeepSeek, Qwen, BGE embeddings, reranking)
 * - OpenAI (GPT-5, GPT-4, embeddings, DALL-E, Whisper)
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

// Configuration
export {
  DEFAULT_MODELS,
  type EnvironmentConfig,
  findBestModel,
  getAllModels,
  getModel,
  getModelsForProvider,
  loadConfigFromEnv,
  type ProviderSelectionCriteria,
} from "./config/index.js";
// Providers
export {
  BaseAIProvider,
  createProvider,
  getRegisteredProviders,
  type ProviderCapability,
  type ProviderModel,
  registerProvider,
} from "./providers/base.js";
export { OPENAI_MODELS, OpenAIProvider } from "./providers/openai.js";
export {
  OPENROUTER_MODELS,
  OPENROUTER_VARIANTS,
  type OpenRouterChatRequest,
  type OpenRouterConfig,
  type OpenRouterGeneration,
  type OpenRouterModelInfo,
  OpenRouterProvider,
  type OpenRouterProviderPreferences,
  type OpenRouterRateLimit,
} from "./providers/openrouter.js";

export {
  SILICONFLOW_MODELS,
  type SiliconFlowConfig,
  SiliconFlowProvider,
} from "./providers/siliconflow.js";
// Types
export type {
  ChatCompletionChoice,
  ChatCompletionChunk,
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatCompletionUsage,
  ChatMessage,
  EmbeddingData,
  EmbeddingRequest,
  EmbeddingResponse,
  ImageData,
  ImageGenerationRequest,
  ImageGenerationResponse,
  MessageRole,
  ProviderConfig,
  ProviderName,
  RerankRequest,
  RerankResponse,
  RerankResult,
  SpeechToTextRequest,
  TextToSpeechRequest,
  Tool,
  ToolCall,
  ToolFunction,
  TranscriptionResponse,
} from "./types.js";
// Error classes
// Zod schemas for validation
export {
  AIProviderError,
  AuthenticationError,
  ChatCompletionRequestSchema,
  ChatMessageSchema,
  EmbeddingRequestSchema,
  RateLimitError,
} from "./types.js";
