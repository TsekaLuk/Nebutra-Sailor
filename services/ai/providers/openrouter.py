"""
OpenRouter Provider

Unified API gateway for 400+ AI models from multiple providers.
Supports provider routing, model fallbacks, and automatic failover.

https://openrouter.ai/docs
"""

import os
import httpx
from dataclasses import dataclass, field
from typing import AsyncGenerator, Optional, List, Dict, Any, Literal
from openai import AsyncOpenAI

from .base import (
    BaseProvider,
    ProviderConfig,
    ChatMessage,
    ChatCompletionRequest,
    ChatCompletionResponse,
    EmbeddingRequest,
    EmbeddingResponse,
    ModelInfo,
)


OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"


@dataclass
class OpenRouterConfig(ProviderConfig):
    """Configuration for OpenRouter"""
    http_referer: Optional[str] = None  # App URL for attribution
    app_title: Optional[str] = None  # App name for attribution
    default_provider_preferences: Optional[Dict[str, Any]] = None


@dataclass
class ProviderPreferences:
    """Provider routing preferences"""
    allow_fallbacks: bool = True
    require_parameters: bool = False
    data_collection: Optional[Literal["deny", "allow"]] = None
    sort: Optional[Literal["price", "throughput", "latency"]] = None
    order: Optional[List[str]] = None
    ignore: Optional[List[str]] = None
    only: Optional[List[str]] = None
    quantizations: Optional[List[str]] = None


@dataclass
class OpenRouterChatRequest(ChatCompletionRequest):
    """Extended chat request with OpenRouter-specific options"""
    provider: Optional[Dict[str, Any]] = None
    models: Optional[List[str]] = None  # Fallback models
    route: Optional[Literal["fallback"]] = None
    transforms: Optional[List[str]] = None


# ============================================
# OpenRouter Models (Popular Examples)
# ============================================

OPENROUTER_MODELS = [
    # OpenAI
    ModelInfo(
        id="openai/gpt-4o",
        name="GPT-4o",
        description="OpenAI's most capable multimodal model",
        capabilities=["chat", "stream", "function-calling", "vision"],
        context_window=128000,
        input_price_per_million=2.5,
        output_price_per_million=10,
    ),
    ModelInfo(
        id="openai/gpt-4o-mini",
        name="GPT-4o Mini",
        description="Fast and affordable multimodal model",
        capabilities=["chat", "stream", "function-calling", "vision"],
        context_window=128000,
        input_price_per_million=0.15,
        output_price_per_million=0.6,
    ),
    ModelInfo(
        id="openai/o1",
        name="OpenAI o1",
        description="Reasoning model with chain-of-thought",
        capabilities=["chat", "stream", "reasoning"],
        context_window=200000,
        input_price_per_million=15,
        output_price_per_million=60,
    ),
    
    # Anthropic
    ModelInfo(
        id="anthropic/claude-sonnet-4",
        name="Claude Sonnet 4",
        description="Latest Claude model",
        capabilities=["chat", "stream", "function-calling", "vision"],
        context_window=200000,
        input_price_per_million=3,
        output_price_per_million=15,
    ),
    ModelInfo(
        id="anthropic/claude-3.5-sonnet",
        name="Claude 3.5 Sonnet",
        description="Balanced Claude model",
        capabilities=["chat", "stream", "function-calling", "vision"],
        context_window=200000,
        input_price_per_million=3,
        output_price_per_million=15,
    ),
    
    # Google
    ModelInfo(
        id="google/gemini-2.0-flash-exp:free",
        name="Gemini 2.0 Flash (Free)",
        description="Google's latest fast model (free tier)",
        capabilities=["chat", "stream", "vision"],
        context_window=1000000,
        input_price_per_million=0,
        output_price_per_million=0,
    ),
    ModelInfo(
        id="google/gemini-pro-1.5",
        name="Gemini Pro 1.5",
        description="Google's flagship model",
        capabilities=["chat", "stream", "function-calling", "vision"],
        context_window=2000000,
        input_price_per_million=1.25,
        output_price_per_million=5,
    ),
    
    # DeepSeek
    ModelInfo(
        id="deepseek/deepseek-r1",
        name="DeepSeek R1",
        description="Reasoning model with chain-of-thought",
        capabilities=["chat", "stream", "reasoning"],
        context_window=164000,
        input_price_per_million=0.55,
        output_price_per_million=2.19,
    ),
    ModelInfo(
        id="deepseek/deepseek-chat",
        name="DeepSeek Chat",
        description="DeepSeek's chat model (V3)",
        capabilities=["chat", "stream", "function-calling"],
        context_window=164000,
        input_price_per_million=0.14,
        output_price_per_million=0.28,
    ),
    
    # Meta
    ModelInfo(
        id="meta-llama/llama-3.3-70b-instruct",
        name="Llama 3.3 70B",
        description="Meta's latest open model",
        capabilities=["chat", "stream", "function-calling"],
        context_window=128000,
        input_price_per_million=0.4,
        output_price_per_million=0.4,
    ),
    
    # Mistral
    ModelInfo(
        id="mistralai/mistral-large-2411",
        name="Mistral Large",
        description="Mistral's flagship model",
        capabilities=["chat", "stream", "function-calling"],
        context_window=128000,
        input_price_per_million=2,
        output_price_per_million=6,
    ),
    
    # Qwen
    ModelInfo(
        id="qwen/qwq-32b",
        name="Qwen QwQ 32B",
        description="Qwen's reasoning model",
        capabilities=["chat", "stream", "reasoning"],
        context_window=32768,
        input_price_per_million=0.12,
        output_price_per_million=0.18,
    ),
    
    # Auto
    ModelInfo(
        id="openrouter/auto",
        name="OpenRouter Auto",
        description="Auto-select best model for the task",
        capabilities=["chat", "stream"],
        context_window=128000,
    ),
]


# Model Variants
OPENROUTER_VARIANTS = {
    "NITRO": ":nitro",      # Fastest provider
    "FLOOR": ":floor",      # Cheapest provider
    "EXACTO": ":exacto",    # Better tool-calling accuracy
    "EXTENDED": ":extended", # Extended context
    "FREE": ":free",        # Free tier (rate limited)
}


class OpenRouterProvider(BaseProvider):
    """OpenRouter unified API provider"""
    
    def __init__(self, config: OpenRouterConfig):
        self._config = config
        self._validate_api_key()
        
        base_url = config.base_url or OPENROUTER_BASE_URL
        
        # Build default headers for attribution
        default_headers = {}
        if config.http_referer:
            default_headers["HTTP-Referer"] = config.http_referer
        if config.app_title:
            default_headers["X-Title"] = config.app_title
        
        self.client = AsyncOpenAI(
            api_key=config.api_key,
            base_url=base_url,
            timeout=config.timeout,
            max_retries=config.max_retries,
            default_headers=default_headers,
        )
        
        self.http_client = httpx.AsyncClient(
            base_url=base_url,
            headers={
                "Authorization": f"Bearer {config.api_key}",
                **default_headers,
            },
            timeout=config.timeout,
        )
        
        self.default_preferences = config.default_provider_preferences
        self._capabilities = {
            "chat", "stream", "function-calling", "vision", "reasoning"
        }
    
    @property
    def config(self) -> OpenRouterConfig:
        return self._config
    
    @property
    def name(self) -> str:
        return "openrouter"
    
    @property
    def display_name(self) -> str:
        return "OpenRouter"
    
    # ============================================
    # Chat Completions
    # ============================================
    
    async def chat(self, request: ChatCompletionRequest) -> ChatCompletionResponse:
        """Create a chat completion"""
        openrouter_request = request if isinstance(request, OpenRouterChatRequest) else request
        
        body: Dict[str, Any] = {
            "model": request.model,
            "messages": [
                {"role": m.role, "content": m.content, "name": m.name}
                for m in request.messages
            ],
            "stream": False,
        }
        
        if request.temperature is not None:
            body["temperature"] = request.temperature
        if request.max_tokens is not None:
            body["max_tokens"] = request.max_tokens
        if request.top_p is not None:
            body["top_p"] = request.top_p
        if request.stop:
            body["stop"] = request.stop
        if request.tools:
            body["tools"] = request.tools
        if request.response_format:
            body["response_format"] = request.response_format
        
        # OpenRouter-specific options
        if isinstance(openrouter_request, OpenRouterChatRequest):
            if openrouter_request.provider or self.default_preferences:
                body["provider"] = {
                    **(self.default_preferences or {}),
                    **(openrouter_request.provider or {}),
                }
            if openrouter_request.models:
                body["models"] = openrouter_request.models
                body["route"] = openrouter_request.route or "fallback"
            if openrouter_request.transforms:
                body["transforms"] = openrouter_request.transforms
        
        response = await self.client.chat.completions.create(**body)
        
        return ChatCompletionResponse(
            id=response.id,
            model=response.model,
            content=response.choices[0].message.content,
            finish_reason=response.choices[0].finish_reason,
            usage={
                "prompt_tokens": response.usage.prompt_tokens if response.usage else 0,
                "completion_tokens": response.usage.completion_tokens if response.usage else 0,
                "total_tokens": response.usage.total_tokens if response.usage else 0,
            },
            tool_calls=[
                {
                    "id": tc.id,
                    "type": "function",
                    "function": {
                        "name": tc.function.name,
                        "arguments": tc.function.arguments,
                    },
                }
                for tc in (response.choices[0].message.tool_calls or [])
            ] if response.choices[0].message.tool_calls else None,
            # Handle reasoning content from models like o1/DeepSeek-R1
            reasoning_content=getattr(response.choices[0].message, "reasoning", None),
        )
    
    async def chat_stream(
        self, request: ChatCompletionRequest
    ) -> AsyncGenerator[str, None]:
        """Stream a chat completion"""
        openrouter_request = request if isinstance(request, OpenRouterChatRequest) else request
        
        body: Dict[str, Any] = {
            "model": request.model,
            "messages": [
                {"role": m.role, "content": m.content, "name": m.name}
                for m in request.messages
            ],
            "stream": True,
        }
        
        if request.temperature is not None:
            body["temperature"] = request.temperature
        if request.max_tokens is not None:
            body["max_tokens"] = request.max_tokens
        if request.top_p is not None:
            body["top_p"] = request.top_p
        if request.stop:
            body["stop"] = request.stop
        
        # OpenRouter-specific options
        if isinstance(openrouter_request, OpenRouterChatRequest):
            if openrouter_request.provider or self.default_preferences:
                body["provider"] = {
                    **(self.default_preferences or {}),
                    **(openrouter_request.provider or {}),
                }
            if openrouter_request.models:
                body["models"] = openrouter_request.models
                body["route"] = openrouter_request.route or "fallback"
        
        stream = await self.client.chat.completions.create(**body)
        
        async for chunk in stream:
            # Skip OpenRouter comment payloads
            if chunk.id == "":
                continue
            if chunk.choices and chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content
    
    async def chat_with_fallback(
        self,
        request: ChatCompletionRequest,
        fallback_models: List[str],
    ) -> ChatCompletionResponse:
        """Chat with automatic model fallbacks"""
        openrouter_request = OpenRouterChatRequest(
            model=request.model,
            messages=request.messages,
            temperature=request.temperature,
            max_tokens=request.max_tokens,
            top_p=request.top_p,
            stream=request.stream,
            stop=request.stop,
            tools=request.tools,
            response_format=request.response_format,
            models=[request.model, *fallback_models],
            route="fallback",
        )
        return await self.chat(openrouter_request)
    
    # ============================================
    # Embeddings
    # ============================================
    
    async def embed(self, request: EmbeddingRequest) -> EmbeddingResponse:
        """Create embeddings (proxied through OpenRouter)"""
        response = await self.http_client.post(
            "/embeddings",
            json={
                "model": request.model,
                "input": request.input,
                "encoding_format": request.encoding_format,
            },
        )
        
        if response.status_code != 200:
            raise Exception(f"OpenRouter embeddings error: {response.status_code} {response.text}")
        
        data = response.json()
        
        return EmbeddingResponse(
            model=data["model"],
            embeddings=[d["embedding"] for d in data["data"]],
            usage={
                "prompt_tokens": data["usage"]["prompt_tokens"],
                "total_tokens": data["usage"]["total_tokens"],
            },
        )
    
    # ============================================
    # OpenRouter Specific APIs
    # ============================================
    
    async def list_models(self) -> List[Dict[str, Any]]:
        """Get available models from OpenRouter API"""
        response = await self.http_client.get("/models")
        
        if response.status_code != 200:
            raise Exception(f"Failed to list models: {response.status_code}")
        
        return response.json()["data"]
    
    async def get_generation(self, generation_id: str) -> Dict[str, Any]:
        """Get generation details by ID (token counts, costs)"""
        response = await self.http_client.get(f"/generation?id={generation_id}")
        
        if response.status_code != 200:
            raise Exception(f"Failed to get generation: {response.status_code}")
        
        return response.json()
    
    async def get_credits(self) -> Dict[str, Any]:
        """Get account credits and usage"""
        response = await self.http_client.get(
            "https://openrouter.ai/api/v1/auth/key"
        )
        
        if response.status_code != 200:
            raise Exception(f"Failed to get credits: {response.status_code}")
        
        data = response.json()["data"]
        return {
            "credits": data.get("limit") or float("inf"),
            "usage": data.get("usage", 0),
        }
    
    async def get_rate_limits(self) -> Dict[str, Any]:
        """Get rate limit status"""
        response = await self.http_client.get(
            "https://openrouter.ai/api/v1/auth/key"
        )
        
        if response.status_code != 200:
            raise Exception(f"Failed to get rate limits: {response.status_code}")
        
        return response.json()["data"]
    
    # ============================================
    # Utility Methods
    # ============================================
    
    def get_available_models(self) -> List[ModelInfo]:
        """Get list of popular models"""
        return OPENROUTER_MODELS
    
    def supports_capability(self, capability: str) -> bool:
        """Check if provider supports a capability"""
        return capability in self._capabilities
    
    @staticmethod
    def get_model_variant(model_id: str, variant: str) -> str:
        """Get model ID with variant suffix"""
        suffix = OPENROUTER_VARIANTS.get(variant, "")
        return f"{model_id}{suffix}"
    
    async def close(self):
        """Close HTTP client"""
        await self.http_client.aclose()
