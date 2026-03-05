import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from fastapi import FastAPI

from _shared.otel import instrument_app
from app.api.v1 import routes_products, routes_orders, routes_webhooks

app = FastAPI(
    title="Nebutra E-commerce Service",
    description="E-commerce operations and Shopify/Shopline integration",
    version="0.1.0",
)

instrument_app(app, service_name="ecommerce-service")

# CORS is handled at the Hono API Gateway layer — do not add CORSMiddleware here.
# This service is internal and should not be exposed directly to browsers.

app.include_router(routes_products.router, prefix="/api/v1/products", tags=["products"])
app.include_router(routes_orders.router, prefix="/api/v1/orders", tags=["orders"])
app.include_router(routes_webhooks.router, prefix="/api/v1/webhooks", tags=["webhooks"])


@app.get("/")
async def root():
    return {"service": "ecommerce", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
