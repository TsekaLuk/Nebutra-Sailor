"""
Supabase Client

Singleton client for Supabase database access.
"""

from typing import Optional
from supabase import create_client, Client

from app.config import settings


_client: Optional[Client] = None


def get_supabase_client() -> Client:
    """Get Supabase client singleton"""
    global _client
    
    if _client is None:
        if not settings.SUPABASE_URL or not settings.SUPABASE_SERVICE_ROLE_KEY:
            raise ValueError("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set")
        
        _client = create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_SERVICE_ROLE_KEY
        )
    
    return _client
