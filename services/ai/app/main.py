from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_generate, routes_embed, routes_translate

app = FastAPI(
    title="Nebutra AI Service",
    description="AI-powered generation, embedding, and translation service",
    version="0.1.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(routes_generate.router, prefix="/api/v1/generate", tags=["generate"])
app.include_router(routes_embed.router, prefix="/api/v1/embed", tags=["embed"])
app.include_router(routes_translate.router, prefix="/api/v1/translate", tags=["translate"])


@app.get("/")
async def root():
    return {"service": "ai", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
