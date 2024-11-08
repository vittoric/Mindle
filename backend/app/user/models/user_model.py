from sqlmodel import SQLModel, Field


class User(SQLModel, table=True):
    """Represents a user in the system.
    
    Attributes:
    """
    __tablename__ = "user"

    id: int | None = Field(default=None, primary_key=True)
    email: str = Field(max_length=255, unique=True, index=True, nullable=False)
    password: str = Field(max_length=255, nullable=False)
    is_active: bool = Field(default=True)
    
    def __repr__(self):
        return f"<User {self.email}>"
    
    def __str__(self):
        return self.email
    
    def __eq__(self, other):
        return self.email == other.email

class UserResponse(SQLModel):
    """Represents a user response.
    
    Attributes:
    """
    id: int
    email: str
    is_active: bool

class UserCreate(SQLModel):
    """Represents a user creation request.
    
    Attributes:
    """
    email: str
    password: str
    
class UserUpdate(SQLModel):
    """Represents a user update request.
    
    Attributes:
    """
    email: str
    password: str
    is_active: bool