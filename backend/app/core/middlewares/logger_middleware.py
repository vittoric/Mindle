import time

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

from app.utils.logger import logger


class LoggingMiddleware(BaseHTTPMiddleware):
    """Middleware to log request details.
    
    Args:
        BaseHTTPMiddleware: Base class for HTTP middleware.
    
    Returns:
        Response: The response object.
    """
    async def dispatch(self, request: Request, call_next: callable) -> Response:
        """Log request details.
        
        Args:
            request (Request): The request object.
            call_next (callable): The next middleware to call.
            
        Returns:
            Response: The response object.
        """
        # Start time
        start_time = time.time()
        
        # Process request
        response: Response = await call_next(request)
        
        # Calculate process time
        process_time = time.time() - start_time
        
        # Log details
        logger.info(f"{request.method} {request.url}: completed in {process_time:.2f} seconds")
        
        return response
