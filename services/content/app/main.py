from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import routes_posts, routes_feed, routes_comments

app = FastAPI(
    title="Nebutra Content Service",
    description="Content management, feed, and comments",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_posts.router, prefix="/api/v1/posts", tags=["posts"])
app.include_router(routes_feed.router, prefix="/api/v1/feed", tags=["feed"])
app.include_router(routes_comments.router, prefix="/api/v1/comments", tags=["comments"])


@app.get("/")
async def root():
    return {"service": "content", "status": "running", "version": "0.1.0"}


@app.get("/health")
async def health():
    return {"status": "ok"}
