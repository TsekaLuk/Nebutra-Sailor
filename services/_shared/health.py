"""Standardized health check endpoint for all services."""

from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(tags=["health"])


@router.get("/health")
async def health_check() -> JSONResponse:
    """Basic liveness probe."""
    return JSONResponse({"status": "healthy"})


@router.get("/ready")
async def readiness_check() -> JSONResponse:
    """Readiness probe — extend per service for dependency checks."""
    return JSONResponse({"status": "ready"})
