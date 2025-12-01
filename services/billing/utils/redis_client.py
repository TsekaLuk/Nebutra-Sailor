"""
Redis Client

Async Redis client for caching.
"""

from typing import Optional
import redis.asyncio as redis

from app.config import settings


_client: Optional[redis.Redis] = None


def get_redis_client() -> Optional[redis.Redis]:
    """Get Redis client singleton (returns None if not configured)"""
    global _client
    
    if _client is None:
        if settings.REDIS_URL:
            _client = redis.from_url(
                settings.REDIS_URL,
                encoding="utf-8",
                decode_responses=True
            )
        elif settings.UPSTASH_REDIS_REST_URL and settings.UPSTASH_REDIS_REST_TOKEN:
            # For Upstash, use HTTP client
            # Note: You may need to use upstash-redis package for full compatibility
            _client = redis.from_url(
                settings.UPSTASH_REDIS_REST_URL,
                password=settings.UPSTASH_REDIS_REST_TOKEN,
                encoding="utf-8",
                decode_responses=True
            )
    
    return _client


async def close_redis_client():
    """Close Redis connection"""
    global _client
    if _client:
        await _client.close()
        _client = None
