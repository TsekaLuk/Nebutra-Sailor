import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from fastapi import FastAPI

from _shared.otel import instrument_app
from app.api.v1 import routes_posts, routes_feed, routes_comments

app = FastAPI(
    title="Nebutra Content Service",
    description="Content management, feed, and comments",
    version="0.1.0",
)

instrument_app(app, service_name="content-service")

# CORS is handled at the Hono API Gateway layer — do not add CORSMiddleware here.
# This service is internal and should not be exposed directly to browsers.

app.include_router(routes_posts.router, prefix="/api/v1/posts", tags=["posts"])
app.include_router(routes_feed.router, prefix="/api/v1/feed", tags=["feed"])
app.include_router(routes_comments.router, prefix="/api/v1/comments", tags=["comments"])


@app.get("/")
async def root():
    return {"service": "content", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
