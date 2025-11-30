# @nebutra/ai-providers

> Multi-provider AI SDK for Nebutra - SiliconFlow, OpenAI, OpenRouter, and more

## Overview

This package provides a unified interface for multiple AI providers:

- **SiliconFlow** - DeepSeek, Qwen, BGE embeddings, reranking, image generation
- **OpenAI** - GPT-4, embeddings, DALL-E, Whisper
- **OpenRouter** - Unified API for 400+ models (GPT, Claude, Gemini, Llama, etc.) with automatic fallbacks

## Installation

```bash
pnpm add @nebutra/ai-providers
```

## Quick Start

```typescript
import { createProvider, SiliconFlowProvider } from "@nebutra/ai-providers";

// Using factory (recommended)
const provider = createProvider("siliconflow", {
  apiKey: process.env.SILICONFLOW_API_KEY!,
});

// Or directly instantiate
const siliconflow = new SiliconFlowProvider({
  apiKey: process.env.SILICONFLOW_API_KEY!,
});

// Chat completion
const response = await provider.chat({
  model: "deepseek-ai/DeepSeek-V3",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);
```

## Features

### Chat Completions

```typescript
const response = await provider.chat({
  model: "deepseek-ai/DeepSeek-V3",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is AI?" },
  ],
  temperature: 0.7,
  maxTokens: 1000,
});
```

### Streaming

```typescript
for await (const chunk of provider.chatStream({
  model: "deepseek-ai/DeepSeek-V3",
  messages: [{ role: "user", content: "Tell me a story" }],
})) {
  process.stdout.write(chunk.choices[0].delta.content || "");
}
```

### Embeddings

```typescript
const embeddings = await provider.embed({
  model: "BAAI/bge-m3",
  input: "Hello world",
});

console.log(embeddings.data[0].embedding); // [0.123, -0.456, ...]
```

### Reranking (SiliconFlow only)

```typescript
const reranked = await siliconflow.rerank({
  model: "BAAI/bge-reranker-v2-m3",
  query: "What is artificial intelligence?",
  documents: [
    "AI is the simulation of human intelligence",
    "Dogs are popular pets",
    "Machine learning is a subset of AI",
  ],
  topN: 2,
});

console.log(reranked.results);
// [{ index: 0, relevanceScore: 0.95 }, { index: 2, relevanceScore: 0.82 }]
```

## Available Models

### SiliconFlow

| Model | Type | Context | Price ($/M tokens) |
|-------|------|---------|-------------------|
| `deepseek-ai/DeepSeek-V3` | Chat | 164K | $0.27 / $0.41 |
| `deepseek-ai/DeepSeek-R1` | Chat + Reasoning | 164K | $0.55 / $2.19 |
| `Qwen/QwQ-32B` | Chat + Reasoning | 32K | $1.26 / $1.26 |
| `Qwen/Qwen2.5-Coder-32B-Instruct` | Chat + Code | 32K | $1.26 / $1.26 |
| `BAAI/bge-m3` | Embedding | 8K | $0.01 |
| `BAAI/bge-reranker-v2-m3` | Rerank | - | $0.10 |

### OpenAI

| Model | Type | Context | Price ($/M tokens) |
|-------|------|---------|-------------------|
| `gpt-4o` | Chat + Vision | 128K | $2.50 / $10.00 |
| `gpt-4o-mini` | Chat + Vision | 128K | $0.15 / $0.60 |
| `o1-preview` | Reasoning | 128K | $15.00 / $60.00 |
| `text-embedding-3-small` | Embedding | - | $0.02 |

### OpenRouter (400+ models)

| Model | Type | Context | Price ($/M tokens) |
|-------|------|---------|-------------------|
| `openai/gpt-4o` | Chat + Vision | 128K | $2.50 / $10.00 |
| `anthropic/claude-sonnet-4` | Chat + Vision | 200K | $3.00 / $15.00 |
| `google/gemini-pro-1.5` | Chat + Vision | 2M | $1.25 / $5.00 |
| `deepseek/deepseek-r1` | Reasoning | 164K | $0.55 / $2.19 |
| `meta-llama/llama-3.3-70b-instruct` | Chat | 128K | $0.40 / $0.40 |
| `openrouter/auto` | Auto-select | - | Varies |

## Configuration

### Environment Variables

```bash
# Default provider
DEFAULT_AI_PROVIDER=siliconflow

# SiliconFlow
SILICONFLOW_API_KEY=sk-xxx
SILICONFLOW_USE_INTERNATIONAL=false  # Use api.siliconflow.com instead of .cn

# OpenAI
OPENAI_API_KEY=sk-xxx
OPENAI_ORGANIZATION=org-xxx

# OpenRouter (Unified API for 400+ models)
OPENROUTER_API_KEY=sk-or-xxx
OPENROUTER_HTTP_REFERER=https://your-app.com  # App attribution (optional)
OPENROUTER_APP_TITLE=Your App Name            # App attribution (optional)
```

### Provider Configuration

```typescript
const provider = createProvider("siliconflow", {
  apiKey: "sk-xxx",
  baseUrl: "https://api.siliconflow.cn/v1",  // Optional
  timeout: 60000,  // 60 seconds
  maxRetries: 3,
});
```

## OpenRouter Features

OpenRouter provides a unified API to access 400+ AI models from multiple providers with automatic fallbacks and intelligent routing.

### Basic Usage

```typescript
import { createProvider, OpenRouterProvider } from "@nebutra/ai-providers";

const provider = createProvider("openrouter", {
  apiKey: process.env.OPENROUTER_API_KEY!,
  httpReferer: "https://your-app.com",  // For attribution
  appTitle: "Your App Name",
});

// Use any model from any provider
const response = await provider.chat({
  model: "anthropic/claude-sonnet-4",
  messages: [{ role: "user", content: "Hello!" }],
});
```

### Model Fallbacks

Automatically try alternative models if the primary fails:

```typescript
const openrouter = new OpenRouterProvider({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

// Tries models in order until one succeeds
const response = await openrouter.chatWithFallback(
  {
    model: "anthropic/claude-sonnet-4",
    messages: [{ role: "user", content: "Hello!" }],
  },
  ["openai/gpt-4o", "google/gemini-pro-1.5"]  // Fallback models
);
```

### Provider Routing

Control which providers handle your requests:

```typescript
import { OpenRouterChatRequest } from "@nebutra/ai-providers";

const request: OpenRouterChatRequest = {
  model: "openai/gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
  provider: {
    sort: "throughput",        // Prefer fastest provider
    allowFallbacks: true,      // Allow backup providers
    dataCollection: "deny",    // Privacy preference
    ignore: ["azure"],         // Skip specific providers
  },
};

const response = await provider.chat(request);
```

### Model Variants

Use specialized routing variants:

```typescript
import { OpenRouterProvider, OPENROUTER_VARIANTS } from "@nebutra/ai-providers";

const provider = new OpenRouterProvider({ apiKey: "..." });

// Get fastest provider for a model
const nitroModel = provider.getModelVariant("openai/gpt-4o", "NITRO");
// Returns: "openai/gpt-4o:nitro"

// Get cheapest provider
const floorModel = provider.getModelVariant("openai/gpt-4o", "FLOOR");
// Returns: "openai/gpt-4o:floor"

// Better tool-calling accuracy
const exactoModel = provider.getModelVariant("openai/gpt-4o", "EXACTO");
// Returns: "openai/gpt-4o:exacto"
```

### OpenRouter-specific APIs

```typescript
// Get all available models from OpenRouter
const models = await openrouter.listModels();

// Get generation details (token counts, costs)
const generation = await openrouter.getGeneration(responseId);

// Check account credits
const credits = await openrouter.getCredits();
console.log(`Credits: $${credits.credits}, Used: $${credits.usage}`);

// Check rate limits
const limits = await openrouter.getRateLimits();
```

## Error Handling

```typescript
import { AIProviderError, RateLimitError } from "@nebutra/ai-providers";

try {
  const response = await provider.chat({ ... });
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log("Rate limited, retry later");
  } else if (error instanceof AIProviderError) {
    console.log(`Provider error: ${error.message}`);
  }
}
```

## Utilities

### Find Best Model

```typescript
import { findBestModel } from "@nebutra/ai-providers";

const model = findBestModel({
  capabilities: ["chat", "function-calling"],
  preferCheap: true,
  minContextWindow: 100000,
});

console.log(model);
// { id: "deepseek-ai/DeepSeek-V2.5", provider: "siliconflow", ... }
```

### Load Config from Environment

```typescript
import { loadConfigFromEnv } from "@nebutra/ai-providers";

const config = loadConfigFromEnv();
// { siliconflow: { apiKey: "...", useInternational: false }, ... }
```

## Python Usage

The `services/ai` directory contains Python implementations with the same interface:

```python
from providers import create_provider
from providers.base import ChatMessage, ChatCompletionRequest

# Create provider
provider = create_provider("siliconflow")

# Chat
request = ChatCompletionRequest(
    model="deepseek-ai/DeepSeek-V3",
    messages=[ChatMessage(role="user", content="Hello!")]
)
response = await provider.chat(request)
print(response.content)
```

## License

MIT
