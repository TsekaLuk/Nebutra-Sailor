"""
Base provider interface for AI services
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import AsyncGenerator, Optional, List, Dict, Any


@dataclass
class ProviderConfig:
    """Configuration for AI providers"""
    api_key: str
    base_url: Optional[str] = None
    organization: Optional[str] = None
    default_model: Optional[str] = None
    timeout: int = 60
    max_retries: int = 3


@dataclass
class ChatMessage:
    """Chat message structure"""
    role: str  # "system", "user", "assistant", "tool"
    content: str
    name: Optional[str] = None
    tool_call_id: Optional[str] = None


@dataclass
class ChatCompletionRequest:
    """Request for chat completion"""
    model: str
    messages: List[ChatMessage]
    temperature: Optional[float] = None
    max_tokens: Optional[int] = None
    top_p: Optional[float] = None
    stream: bool = False
    stop: Optional[List[str]] = None
    tools: Optional[List[Dict[str, Any]]] = None
    response_format: Optional[Dict[str, str]] = None


@dataclass
class ChatCompletionResponse:
    """Response from chat completion"""
    id: str
    model: str
    content: Optional[str]
    finish_reason: Optional[str]
    usage: Dict[str, int]
    tool_calls: Optional[List[Dict[str, Any]]] = None
    reasoning_content: Optional[str] = None  # For DeepSeek-R1


@dataclass
class EmbeddingRequest:
    """Request for embeddings"""
    model: str
    input: str | List[str]
    encoding_format: Optional[str] = None


@dataclass
class EmbeddingResponse:
    """Response from embeddings"""
    model: str
    embeddings: List[List[float]]
    usage: Dict[str, int]


@dataclass
class RerankRequest:
    """Request for document reranking"""
    model: str
    query: str
    documents: List[str] | List[Dict[str, Any]]
    top_n: Optional[int] = None
    return_documents: bool = False


@dataclass
class RerankResult:
    """Single rerank result"""
    index: int
    relevance_score: float
    document: Optional[Dict[str, Any]] = None


@dataclass
class RerankResponse:
    """Response from reranking"""
    model: str
    results: List[RerankResult]
    usage: Optional[Dict[str, int]] = None


@dataclass
class ModelInfo:
    """Information about a model"""
    id: str
    name: str
    description: Optional[str] = None
    capabilities: List[str] = field(default_factory=list)
    context_window: Optional[int] = None
    input_price_per_million: Optional[float] = None
    output_price_per_million: Optional[float] = None


class BaseProvider(ABC):
    """Abstract base class for AI providers"""
    
    def __init__(self, config: ProviderConfig):
        self.config = config
        self._validate_api_key()
    
    @property
    @abstractmethod
    def name(self) -> str:
        """Provider name identifier"""
        pass
    
    @property
    @abstractmethod
    def display_name(self) -> str:
        """Human-readable provider name"""
        pass
    
    def _validate_api_key(self) -> None:
        """Validate API key is present"""
        if not self.config.api_key or not self.config.api_key.strip():
            raise ValueError(f"API key is required for {self.name}")
    
    # ============================================
    # Required Methods
    # ============================================
    
    @abstractmethod
    async def chat(self, request: ChatCompletionRequest) -> ChatCompletionResponse:
        """Create a chat completion"""
        pass
    
    @abstractmethod
    async def embed(self, request: EmbeddingRequest) -> EmbeddingResponse:
        """Create embeddings for text"""
        pass
    
    # ============================================
    # Optional Methods
    # ============================================
    
    async def chat_stream(
        self, request: ChatCompletionRequest
    ) -> AsyncGenerator[str, None]:
        """Stream a chat completion"""
        raise NotImplementedError(f"Streaming not supported by {self.name}")
        yield  # Make it a generator
    
    async def rerank(self, request: RerankRequest) -> RerankResponse:
        """Rerank documents by relevance"""
        raise NotImplementedError(f"Reranking not supported by {self.name}")
    
    # ============================================
    # Utility Methods
    # ============================================
    
    @abstractmethod
    def get_available_models(self) -> List[ModelInfo]:
        """Get list of available models"""
        pass
    
    def supports_capability(self, capability: str) -> bool:
        """Check if provider supports a capability"""
        return False
