from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Pydantic BaseSettings class for Borg application settings.
    
    Attributes:
    - PROJECT_NAME: str
    - DATABASE_URL: str
    - LOCAL_DATABASE_URL: str
    - SECRET_KEY: str
    - ALGORITHM: str
    - ACCESS_TOKEN_EXPIRE_MINUTES: int
    - DEBUG: bool
    - ALLOWED_HOSTS: str
    """
    model_config = SettingsConfigDict(
        env_file=(".env", ".env.prod"),
        env_file_encoding="utf-8",
    )

    PROJECT_NAME: str = "The Borg"
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DEBUG: bool
    ALLOWED_HOSTS: str
    PORT: int
    REDIS_HOST: str
    REDIS_PORT: int
    REDIS_URL: str
    CELERY_BROKER_URL: str

settings = Settings()
