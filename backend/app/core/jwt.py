from datetime import datetime, timedelta, timezone
from typing import Dict, Optional
from jose import JWTError, jwt

from app.core.config import settings
from app.utils.logger import logger


def create_access_token(data: Dict[str, str], expires_delta: Optional[timedelta] = None) -> str:
    """Create a JWT access token.

    Args:
        data (Dict[str, str]): The data to encode in the token (JWT payload).
        expires_delta (Optional[timedelta]): The time duration for token expiration. 
            If not provided, the default expiration time from the settings will be used.

    Returns:
        str: The encoded JWT token.

    Raises:
        ValueError: If data is not provided or empty.
    """
    if not data:
        logger.error("The payload data for JWT token creation is empty.")
        raise ValueError("The payload data for JWT token creation cannot be empty.")
    
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    
    try:
        encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm="HS256")
        logger.info("Access token created successfully.")
        return encoded_jwt
    except JWTError as e:
        logger.error(f"Failed to encode JWT token: {e}")
        raise

def verify_token(token: str) -> Dict[str, str]:
    """Verify and decode a JWT token.

    Args:
        token (str): The JWT token to verify and decode.

    Returns:
        Dict[str, str]: The decoded payload if verification is successful.

    Raises:
        JWTError: If the token is invalid, expired, or cannot be verified.
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        logger.info("Token verified successfully.")
        return payload
    except JWTError as e:
        logger.warning(f"Failed to verify JWT token: {e}")
        raise JWTError("Could not validate credentials") from e
