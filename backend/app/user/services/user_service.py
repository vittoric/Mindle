from typing import Optional
from sqlmodel import select
from fastapi import HTTPException

from app.user.models.user_model import User, UserCreate, UserResponse
from app.core.db import SessionDep
from app.utils.logger import logger


class UserService:
    def create_user(self, user: UserCreate, session: SessionDep) -> UserResponse:
        """Create a new user in the database."""
        try:
            new_user = User(**user.model_dump())
            session.add(new_user)
            session.commit()
            session.refresh(new_user)
            return new_user
        except Exception as e:
            session.rollback()
            logger.error(f"Error creating user: {str(e)}")
            raise HTTPException(status_code=400, detail="Error creating user.")
            
    def get_all_users(self, session: SessionDep, offset: int = 0, limit: Optional[int] = 100) -> list[User]:
        """Get all users in the database."""
        try:
            users = session.exec(select(User).offset(offset).limit(limit)).all()
            logger.info(f"Users: {users}")
            if not users:
                raise HTTPException(status_code=404, detail="No users found.")
            return users
        except Exception as e:
            logger.error(f"Error fetching all users: {str(e)}")
            raise HTTPException(status_code=400, detail="Error fetching all users.")
            
    def get_user_by_id(self, user_id: int, session: SessionDep) -> User:
        """Get a user by ID."""
        try:
            user = session.get(User, user_id)
            if not user:
                raise HTTPException(status_code=404, detail="User not found.")
            return user
        except Exception as e:
            logger.error(f"Error fetching user by ID: {str(e)}")
            raise HTTPException(status_code=400, detail="Error fetching user by ID.")
            
    def update_user(self, user_id: int, user: User, session: SessionDep) -> User:
        """Update a user by ID."""
        try:
            user = session.get(User, user_id)
            if not user:
                raise HTTPException(status_code=404, detail="User not found.")
            user.update(user)
            session.commit()
            session.refresh(user)
            return user
        except Exception as e:
            session.rollback()
            logger.error(f"Error updating user: {str(e)}")
            
    def delete_user(self, user_id: int, session: SessionDep) -> User:
        """Delete a user by ID."""
        try:
            user = session.get(User, user_id)
            if not user:
                raise HTTPException(status_code=404, detail="User not found.")
            session.delete(user)
            session.commit()
            return user
        except Exception as e:
            session.rollback()
            logger.error(f"Error deleting user: {str(e)}")
            raise HTTPException(status_code=400, detail="Error deleting user.")