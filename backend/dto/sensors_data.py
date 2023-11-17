"""DTO for sensors data."""
from typing import Any
from uuid import UUID

from pydantic import BaseModel, Field


class TestPayload(BaseModel):
    """DTO for sensors data test payload."""

    class PayloadItem(BaseModel):
        """DTO for sensors data test payload item."""

        time: int
        name: str
        values: list[Any]

    message_id: int = Field(..., alias="messageId")
    session_id: UUID = Field(..., alias="sessionId")
    device_id: UUID = Field(..., alias="deviceId")
    payload: list[PayloadItem]
