from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_web3

app = FastAPI(
    title="Nebutra Web3 Service",
    description="Blockchain data indexing and Web3 operations",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_web3.router, prefix="/api/v1", tags=["web3"])


@app.get("/")
async def root():
    return {"service": "web3", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
