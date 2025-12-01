"""
Billing Microservice

FastAPI service for billing, subscriptions, usage tracking, and credits management.
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_billing, routes_subscriptions, routes_usage, routes_credits, routes_webhooks
from app.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan handler"""
    # Startup
    print(f"Starting Billing Service on {settings.HOST}:{settings.PORT}")
    yield
    # Shutdown
    print("Shutting down Billing Service")


app = FastAPI(
    title="Nebutra Billing Service",
    description="Billing, subscriptions, usage tracking, and credits management",
    version="0.1.0",
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(routes_billing.router, prefix="/api/v1/billing", tags=["billing"])
app.include_router(routes_subscriptions.router, prefix="/api/v1/subscriptions", tags=["subscriptions"])
app.include_router(routes_usage.router, prefix="/api/v1/usage", tags=["usage"])
app.include_router(routes_credits.router, prefix="/api/v1/credits", tags=["credits"])
app.include_router(routes_webhooks.router, prefix="/api/v1/webhooks", tags=["webhooks"])


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "billing"}


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "service": "nebutra-billing",
        "version": "0.1.0",
        "docs": "/docs",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG,
    )
