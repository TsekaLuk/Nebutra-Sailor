from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_products, routes_orders, routes_webhooks

app = FastAPI(
    title="Nebutra E-commerce Service",
    description="E-commerce operations and Shopify/Shopline integration",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_products.router, prefix="/api/v1/products", tags=["products"])
app.include_router(routes_orders.router, prefix="/api/v1/orders", tags=["orders"])
app.include_router(routes_webhooks.router, prefix="/api/v1/webhooks", tags=["webhooks"])


@app.get("/")
async def root():
    return {"service": "ecommerce", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
