from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_recsys

app = FastAPI(
    title="Nebutra Recommendation Service",
    description="AI-powered content recommendations using recall/rank pipeline",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_recsys.router, prefix="/api/v1/recommend", tags=["recommend"])


@app.get("/")
async def root():
    return {"service": "recsys", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
