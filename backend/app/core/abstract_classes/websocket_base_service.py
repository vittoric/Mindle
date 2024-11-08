from fastapi import WebSocket, WebSocketDisconnect
from abc import ABC, abstractmethod


class WebSocketBase(ABC):
    def __init__(self):
        self.global_websocket_dict = {}

    async def connect(self, websocket: WebSocket, user_id: int):
        await websocket.accept()
        self.global_websocket_dict[user_id] = websocket

    async def disconnect(self, websocket: WebSocket):
        await websocket.close()
        for user_id, ws in self.global_websocket_dict.items():
            if ws == websocket:
                del self.global_websocket_dict[user_id]
                break

    async def receive(self, websocket: WebSocket):
        try:
            data = await websocket.receive_text()
            return data
        except WebSocketDisconnect:
            return None
