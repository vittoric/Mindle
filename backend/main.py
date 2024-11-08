import uvicorn
import redis
from fastapi import FastAPI, WebSocket
from fastapi.responses import JSONResponse
# Project imports
from app.core.config import settings
from app.core.middlewares.logger_middleware import LoggingMiddleware
from app.core.db import create_db_and_tables
from app.user.routers.user_router import user_router
from app.user.routers.user_websocket_router import ws_user_router


app = FastAPI(
    title=settings.PROJECT_NAME,
    docs_url="/api/docs",           # Swagger UI
    redoc_url="/api/redoc",         # ReDoc documentation
    openapi_url="/api/openapi.json" # OpenAPI schema
)

# Add middleware
app.add_middleware(LoggingMiddleware)

# Include HTTP routers
app.include_router(user_router, prefix="/api", tags=["user"])

# Include WebSocket routers
app.include_router(ws_user_router, prefix="/ws", tags=["websocket"])

# Create the database and tables on startup
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# Include the HTTP root route
@app.get("/api")
async def root():
    return JSONResponse(content={"message": "Resistance is futile"})

# Include the WebSocket root route
@app.websocket("/ws/root")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    await websocket.send_text("Hello, WebSocket!")
    await websocket.close()

# 404 handler
@app.exception_handler(404)
async def not_found(request, exc):
    return JSONResponse(content={"message": "Not Found"}, status_code=404)

# 500 handler
@app.exception_handler(500)
async def server_error(request, exc):
    return JSONResponse(content={"message": "Server Error"}, status_code=500)

# Static files
@app.get("/static/{file_path:path}")
async def read_static(file_path: str):
    return JSONResponse(content={"file_path": file_path})


# Run locally with auto-reload
if __name__ == "__main__":
    """If not using Docker.
    
    Run the FastAPI application locally with auto-reload enabled.
    
    This is useful for development and debugging.
    
    Use the following command to run the application:
            $ python main.py
    """
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,  # Enable auto-reload for development
        log_level="info"
    )
