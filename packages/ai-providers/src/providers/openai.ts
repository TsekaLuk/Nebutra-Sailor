import OpenAI from "openai";
import type {
  ProviderConfig,
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatCompletionChunk,
  EmbeddingRequest,
  EmbeddingResponse,
  ImageGenerationRequest,
  ImageGenerationResponse,
  TextToSpeechRequest,
  SpeechToTextRequest,
  TranscriptionResponse,
} from "../types.js";
import {
  BaseAIProvider,
  registerProvider,
  type ProviderModel,
  type ProviderCapability,
} from "./base.js";

// ============================================
// OpenAI Models
// ============================================

export const OPENAI_MODELS: ProviderModel[] = [
  // GPT-4o Series
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Most capable GPT-4 model with vision",
    capabilities: ["chat", "chat-stream", "function-calling", "vision"],
    contextWindow: 128000,
    maxOutputTokens: 16384,
    inputPricePerMillion: 2.5,
    outputPricePerMillion: 10,
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    description: "Small, fast, and affordable",
    capabilities: ["chat", "chat-stream", "function-calling", "vision"],
    contextWindow: 128000,
    maxOutputTokens: 16384,
    inputPricePerMillion: 0.15,
    outputPricePerMillion: 0.6,
  },

  // O1 Series (Reasoning)
  {
    id: "o1-preview",
    name: "O1 Preview",
    description: "Reasoning model for complex tasks",
    capabilities: ["chat", "reasoning"],
    contextWindow: 128000,
    maxOutputTokens: 32768,
    inputPricePerMillion: 15,
    outputPricePerMillion: 60,
  },
  {
    id: "o1-mini",
    name: "O1 Mini",
    description: "Smaller reasoning model",
    capabilities: ["chat", "reasoning"],
    contextWindow: 128000,
    maxOutputTokens: 65536,
    inputPricePerMillion: 3,
    outputPricePerMillion: 12,
  },

  // Embedding Models
  {
    id: "text-embedding-3-small",
    name: "Text Embedding 3 Small",
    description: "Small embedding model, 1536 dimensions",
    capabilities: ["embeddings"],
    inputPricePerMillion: 0.02,
  },
  {
    id: "text-embedding-3-large",
    name: "Text Embedding 3 Large",
    description: "Large embedding model, 3072 dimensions",
    capabilities: ["embeddings"],
    inputPricePerMillion: 0.13,
  },

  // Image Models
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    description: "Latest DALL-E image generation",
    capabilities: ["image-generation"],
  },

  // Audio Models
  {
    id: "tts-1",
    name: "TTS-1",
    description: "Text-to-speech model",
    capabilities: ["text-to-speech"],
  },
  {
    id: "whisper-1",
    name: "Whisper-1",
    description: "Speech-to-text model",
    capabilities: ["speech-to-text"],
  },
];

// ============================================
// OpenAI Provider Implementation
// ============================================

export class OpenAIProvider extends BaseAIProvider {
  readonly name = "openai" as const;
  readonly displayName = "OpenAI";

  private client: OpenAI;
  private capabilities: Set<ProviderCapability>;

  constructor(config: ProviderConfig) {
    super(config);
    this.validateApiKey();

    this.client = new OpenAI({
      apiKey: this.config.apiKey,
      organization: this.config.organization,
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      maxRetries: this.config.maxRetries,
    });

    this.capabilities = new Set([
      "chat",
      "chat-stream",
      "embeddings",
      "image-generation",
      "text-to-speech",
      "speech-to-text",
      "function-calling",
      "vision",
      "reasoning",
    ]);
  }

  // ============================================
  // Chat Completions
  // ============================================

  async chat(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    const response = await this.client.chat.completions.create({
      model: request.model,
      messages: request.messages.map((m) => ({
        role: m.role as "system" | "user" | "assistant",
        content: m.content,
        name: m.name,
      })),
      temperature: request.temperature,
      max_tokens: request.maxTokens,
      top_p: request.topP,
      stop: request.stop,
      tools: request.tools?.map((t) => ({
        type: t.type,
        function: {
          name: t.function.name,
          description: t.function.description,
          parameters: t.function.parameters,
        },
      })),
      response_format: request.responseFormat,
      stream: false,
    });

    return this.transformChatResponse(response);
  }

  async *chatStream(
    request: ChatCompletionRequest
  ): AsyncGenerator<ChatCompletionChunk, void, unknown> {
    const stream = await this.client.chat.completions.create({
      model: request.model,
      messages: request.messages.map((m) => ({
        role: m.role as "system" | "user" | "assistant",
        content: m.content,
        name: m.name,
      })),
      temperature: request.temperature,
      max_tokens: request.maxTokens,
      top_p: request.topP,
      stop: request.stop,
      stream: true,
    });

    for await (const chunk of stream) {
      yield this.transformStreamChunk(chunk);
    }
  }

  // ============================================
  // Embeddings
  // ============================================

  async embed(request: EmbeddingRequest): Promise<EmbeddingResponse> {
    const response = await this.client.embeddings.create({
      model: request.model,
      input: request.input,
      encoding_format: request.encodingFormat,
    });

    return {
      object: "list",
      data: response.data.map((d, i) => ({
        object: "embedding" as const,
        index: i,
        embedding: d.embedding,
      })),
      model: response.model,
      usage: {
        promptTokens: response.usage.prompt_tokens,
        totalTokens: response.usage.total_tokens,
      },
    };
  }

  // ============================================
  // Image Generation
  // ============================================

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    const response = await this.client.images.generate({
      model: request.model,
      prompt: request.prompt,
      n: request.n,
      size: request.size as "256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792",
      quality: request.quality,
      style: request.style,
      response_format: request.responseFormat,
    });

    return {
      created: response.created,
      data: (response.data || []).map((d) => ({
        url: d.url,
        b64Json: d.b64_json,
        revisedPrompt: d.revised_prompt,
      })),
    };
  }

  // ============================================
  // Audio
  // ============================================

  async textToSpeech(request: TextToSpeechRequest): Promise<ArrayBuffer> {
    const response = await this.client.audio.speech.create({
      model: request.model,
      input: request.input,
      voice: request.voice as "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer",
      speed: request.speed,
      response_format: request.responseFormat,
    });

    return response.arrayBuffer();
  }

  async speechToText(request: SpeechToTextRequest): Promise<TranscriptionResponse> {
    const response = await this.client.audio.transcriptions.create({
      model: request.model,
      file: request.file as File,
      language: request.language,
      prompt: request.prompt,
      response_format: request.responseFormat as "json" | "text" | "srt" | "verbose_json" | "vtt",
      temperature: request.temperature,
    });

    // Handle different response formats
    if (typeof response === "string") {
      return { text: response };
    }

    return {
      text: response.text,
      task: (response as { task?: string }).task,
      language: (response as { language?: string }).language,
      duration: (response as { duration?: number }).duration,
    };
  }

  // ============================================
  // Utility Methods
  // ============================================

  supportsCapability(capability: ProviderCapability): boolean {
    return this.capabilities.has(capability);
  }

  getAvailableModels(): ProviderModel[] {
    return OPENAI_MODELS;
  }

  // ============================================
  // Private Helpers
  // ============================================

  private transformChatResponse(
    response: OpenAI.Chat.Completions.ChatCompletion
  ): ChatCompletionResponse {
    return {
      id: response.id,
      object: "chat.completion",
      created: response.created,
      model: response.model,
      choices: response.choices.map((c) => ({
        index: c.index,
        message: {
          role: "assistant" as const,
          content: c.message.content,
          toolCalls: c.message.tool_calls?.map((tc) => ({
            id: tc.id,
            type: "function" as const,
            function: {
              name: tc.function.name,
              arguments: tc.function.arguments,
            },
          })),
        },
        finishReason: c.finish_reason as "stop" | "length" | "tool_calls" | "content_filter" | null,
      })),
      usage: response.usage
        ? {
            promptTokens: response.usage.prompt_tokens,
            completionTokens: response.usage.completion_tokens,
            totalTokens: response.usage.total_tokens,
          }
        : undefined,
    };
  }

  private transformStreamChunk(
    chunk: OpenAI.Chat.Completions.ChatCompletionChunk
  ): ChatCompletionChunk {
    return {
      id: chunk.id,
      object: "chat.completion.chunk",
      created: chunk.created,
      model: chunk.model,
      choices: chunk.choices.map((c) => ({
        index: c.index,
        delta: {
          role: c.delta.role as "assistant" | undefined,
          content: c.delta.content ?? undefined,
          toolCalls: c.delta.tool_calls?.map((tc) => ({
            id: tc.id || "",
            type: "function" as const,
            function: {
              name: tc.function?.name || "",
              arguments: tc.function?.arguments || "",
            },
          })),
        },
        finishReason: c.finish_reason as "stop" | "length" | "tool_calls" | null,
      })),
    };
  }
}

// Register the provider
registerProvider("openai", (config) => new OpenAIProvider(config));

export default OpenAIProvider;
