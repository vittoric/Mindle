from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import select
from typing import Annotated

from app.user.models.user_model import User, UserCreate, UserUpdate, UserResponse
from app.core.db import SessionDep
from app.user.services.user_service import UserService

user_router = APIRouter()

@user_router.post("/user", response_model=UserResponse)
def create_new_user(user: UserCreate, session: SessionDep) -> User:
    """Create a new user in the system.
    
    Args:
        user (User): The user to create.
        session (SessionDep): The database session.
        
    Returns:
        User: The newly created user.
    """
    try:
        user_service = UserService()
        user = user_service.create_user(user, session)
        return user

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@user_router.get("/users", response_model=list[User])
def get_all_users(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[User]:
    """Get all users in the system.
    
    Args:
        session (SessionDep): The database session.
        
    Returns:
        list[User]: A list of all users in the system.
    """
    try:
        user_service = UserService()
        users = user_service.get_all_users(session, offset, limit)
        return users
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@user_router.get("/user/{user_id}", response_model=User)
def get_user_by_id(user_id: int, session: SessionDep) -> User:
    """Get a user by ID.
    
    Args:
        user_id (int): The ID of the user to retrieve.
        session (SessionDep): The database session.
        
    Returns:
        User: The user with the specified ID.
    """
    try:
        user_service = UserService()
        user = user_service.get_user_by_id(user_id, session)
        return user
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@user_router.put("/user/{user_id}", response_model=User)
def update_user(user_id: int, user: User, session: SessionDep) -> User:
    """Update a user by ID.
    
    Args:
        user_id (int): The ID of the user to update.
        user (UserUpdate): The updated user data.
        session (SessionDep): The database session.
        
    Returns:
        User: The updated user.
    """
    try:
        user_service = UserService()
        db_user = user_service.update_user(user_id, user, session)
        return db_user
    
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    
@user_router.delete("/user/{user_id}", response_model=User)
def delete_user(user_id: int, session: SessionDep) -> User:
    """Delete a user by ID.
    
    Args:
        user_id (int): The ID of the user to delete.
        session (SessionDep): The database session.
        
    Returns:
        User: The deleted user.
    """
    try:
        user_service = UserService()
        user = user_service.delete_user(user_id, session)
        return user
    
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=400, detail=str(e))