"""
AI Providers for Nebutra

Supports multiple AI providers with a unified interface:
- SiliconFlow (DeepSeek, Qwen, BGE embeddings, reranking)
- OpenAI (GPT-4, embeddings, DALL-E)
"""

from .base import BaseProvider, ProviderConfig
from .siliconflow import SiliconFlowProvider, SILICONFLOW_MODELS
from .openai_provider import OpenAIProvider, OPENAI_MODELS
from .factory import create_provider, get_available_providers

__all__ = [
    "BaseProvider",
    "ProviderConfig",
    "SiliconFlowProvider",
    "SILICONFLOW_MODELS",
    "OpenAIProvider",
    "OPENAI_MODELS",
    "create_provider",
    "get_available_providers",
]
