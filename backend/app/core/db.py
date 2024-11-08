import time

from typing import Annotated
from fastapi import Depends
from sqlmodel import SQLModel, create_engine, Session
from sqlalchemy.exc import OperationalError

from app.core.config import settings
from app.utils.logger import logger


def create_engine_with_fallback():
    """Create the SQLAlchemy engine based on the environment.

    Tries to connect to the primary database. If it fails, falls back to SQLite.

    Args:
        retries (int): Number of retry attempts before falling back.
        delay (int): Delay in seconds between retries.

    Returns:
        sqlalchemy.engine.Engine: The SQLAlchemy engine.
    """

    try:
        logger.info("Attempting to connect to the primary database...")
        engine = create_engine(settings.DATABASE_URL, echo=True)
        return engine
    except OperationalError as e:
        logger.warning(f"Failed to connect to the primary database: {e}")
        raise e

    
def create_local_engine():
    connect_args = {"check_same_thread": False}
    engine = create_engine(settings.LOCAL_DATABASE_URL, connect_args=connect_args)
    logger.info("Connected to the local SQLite database.")
    return engine


def get_session():
    """Get a new SQLAlchemy session.

    Returns:
        sqlalchemy.orm.Session: A new SQLAlchemy session.
    """
    with Session(engine) as session:
        yield session
        
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    logger.info("Database and tables created.")

# Automatically create the engine based on the environment
engine = create_engine_with_fallback()
SessionDep = Annotated[Session, Depends(get_session)]

