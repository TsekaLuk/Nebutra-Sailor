import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from fastapi import FastAPI

from _shared.otel import instrument_app
from app.api.v1 import routes_web3

app = FastAPI(
    title="Nebutra Web3 Service",
    description="Blockchain data indexing and Web3 operations",
    version="0.1.0",
)

instrument_app(app, service_name="web3-service")

# CORS is handled at the Hono API Gateway layer — do not add CORSMiddleware here.
# This service is internal and should not be exposed directly to browsers.

app.include_router(routes_web3.router, prefix="/api/v1", tags=["web3"])


@app.get("/")
async def root():
    return {"service": "web3", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
