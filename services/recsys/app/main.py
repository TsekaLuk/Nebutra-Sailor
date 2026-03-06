import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from fastapi import FastAPI

from _shared.otel import instrument_app
from app.api.v1 import routes_recsys

app = FastAPI(
    title="Nebutra Recommendation Service",
    description="AI-powered content recommendations using recall/rank pipeline",
    version="0.1.0",
)

instrument_app(app, service_name="recsys-service")

# CORS is handled at the Hono API Gateway layer — do not add CORSMiddleware here.
# This service is internal and should not be exposed directly to browsers.

app.include_router(routes_recsys.router, prefix="/api/v1/recommend", tags=["recommend"])


@app.get("/")
async def root():
    return {"service": "recsys", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
