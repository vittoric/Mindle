from fastapi import WebSocket

from app.core.abstract_classes.websocket_base_service import WebSocketBase
from app.user.services.user_service import UserService
from app.core.jwt import verify_token
from app.utils.exceptions import ForbiddenException
from app.core.db import SessionDep



class UserWebsocketService(WebSocketBase):
    def __init__(self):
        super().__init__()
        self.users: dict[int, WebSocket] = {}

    async def handshake(self, websocket: WebSocket, token: str):
        try:
            # TODO: Uncomment the following line to verify the token before connecting
            # user_id = verify_token(token)
            user_id = 1
            await self.register_user(websocket, user_id)
            await self.broadcast(f"User {user_id} connected")
        except Exception as e:
            raise ForbiddenException("Invalid token")

    async def register_user(self, websocket: WebSocket, user_id: int):
        # Add a new user to the users dictionary
        await self.connect(websocket, user_id)
        self.users[user_id] = websocket
        print(f"User {user_id} connected. Total users: {len(self.users)}")

    async def unregister_user(self, websocket: WebSocket):
        # Find the user by websocket and remove them
        user_to_remove = None
        for user_id, ws in self.users.items():
            if ws == websocket:
                user_to_remove = user_id
                break
        if user_to_remove is not None:
            del self.users[user_to_remove]
            print(f"User {user_to_remove} disconnected. Total users: {len(self.users)}")

    async def handle_user_updates(
        self, task_id: int, websocket: WebSocket, session: SessionDep
    ):
        user_service = UserService()
        while True:
            message = await websocket.receive_text()
            if message:
                # Process the message and update task
                user = user_service.get_user_by_id(session, task_id)
                if user:
                    user = user_service.update_user(session, task_id, user)
                    # Notify all users about the task status update
                    await self.broadcast(f"User {task_id} updated: {user}")
            else:
                break

    async def broadcast(self, message: str):
        # Send the message to all connected users
        for websocket in self.users.values():
            await websocket.send_text(message)


# Create a shared instance (Singleton) of the TaskService class
user_ws_service_instance = UserWebsocketService()
