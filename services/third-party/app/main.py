"""
Nebutra Integrations Service.

Third-party API integrations (Product Hunt, Twitter, GitHub, etc.)
with caching, rate limiting, and data transformation.
"""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from app.api.v1 import routes_producthunt
from utils.config import get_settings

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
"""Application lifespan events."""
    # Startup
    logger.info("Starting Third-Party Data Service...")
    settings = get_settings()
    logger.info(f"Service: {settings.service_name}")
    logger.info(f"Port: {settings.service_port}")

    # Optionally warm cache on startup
    # from services.producthunt import ph_service
    # await ph_service.warm_cache()

    yield

    # Shutdown
    logger.info("Shutting down Third-Party Data Service...")


# Initialize FastAPI app
app = FastAPI(
    title="Nebutra Third-Party Data Service",
    description="""
Third-party data service for Nebutra.

## Features

- **Product Hunt Integration**: Access trending products, topics, collections
- **Caching**: Redis-based caching with configurable TTL
- **Rate Limiting**: Protection against API abuse
- **Graceful Degradation**: Stale cache fallback on errors

## Authentication

This service requires a valid Product Hunt developer token.
Configure via `PRODUCT_HUNT_DEV_TOKEN` environment variable.

## Rate Limits

- Product Hunt API: ~100 requests/hour (fair use)
- This service adds additional caching to minimize upstream calls

## Endpoints

### Product Hunt

- `GET /api/v1/producthunt/posts` - List posts
- `GET /api/v1/producthunt/posts/trending` - Trending posts
- `GET /api/v1/producthunt/posts/{slug}` - Single post
- `GET /api/v1/producthunt/topics` - All topics
- `GET /api/v1/producthunt/collections` - Collections
- `POST /api/v1/producthunt/cache/warm` - Warm cache
- `DELETE /api/v1/producthunt/cache` - Invalidate cache
    """,
    version="0.1.0",
    lifespan=lifespan,
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(
    routes_producthunt.router,
    prefix="/api/v1/producthunt",
    tags=["Product Hunt"],
)


@app.get("/")
async def root():
    """Service info."""
    return {
        "service": "third-party",
        "status": "running",
        "version": "0.1.0",
        "providers": ["producthunt"],
    }


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "ok"}


@app.get("/ready")
async def ready():
    """Readiness check endpoint."""
    settings = get_settings()

    checks = {
        "config": bool(settings.product_hunt_dev_token),
        "redis": bool(settings.upstash_redis_url),
    }

    status = "ok" if all(checks.values()) else "degraded"

    return {
        "status": status,
        "checks": checks,
    }
