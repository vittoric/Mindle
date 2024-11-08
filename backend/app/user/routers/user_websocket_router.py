from fastapi import APIRouter, WebSocket, Depends, WebSocketDisconnect

from app.user.services.user_websocket_service import user_ws_service_instance
from app.utils.exceptions import ForbiddenException
from app.core.db import SessionDep


ws_user_router = APIRouter()

@ws_user_router.websocket("/user/{room_id}")
async def websocket_task_endpoint(
    websocket: WebSocket, room_id: int, session: SessionDep
):
    # Extract JWT from query parameters
    token = websocket.query_params.get("token")
    if token is None:
        print("No token provided. Closing WebSocket connection.")
        await websocket.close(code=1008)
        return

    try:
        await user_ws_service_instance.handshake(websocket, token)
    except ForbiddenException as e:
        await websocket.close(code=1008, reason=str(e))
        return

    try:
        # Handle task updates for this specific WebSocket connection
        await user_ws_service_instance.handle_user_updates(room_id, websocket, session)
    except WebSocketDisconnect:
        # Handle WebSocket disconnection
        user_ws_service_instance.unregister_user(websocket)
