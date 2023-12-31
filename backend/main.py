"""
The main file of the backend.

It contains the FastAPI application.
"""
from pathlib import Path
from typing import Annotated, Final

import firebase_admin.auth
from fastapi import FastAPI, Header, Request, Response
from firebase_admin import credentials

from dto.sensors_data import TestPayload

app = FastAPI()

FIREBASE_CREDENTIALS_PATH: Final[Path] = (
    Path(__file__).parent / "firebase-adminsdk.json"
)

cred = credentials.Certificate(FIREBASE_CREDENTIALS_PATH)
firebase_admin.initialize_app(cred)


def get_access_token_from_header(authorization_header: str) -> str:
    """
    Return the Access Token from Firebase.

    :param authorization_header: The Authorization header
    :return: The Access token from Firebase
    """
    _, token = authorization_header.rsplit(" ", 1)
    return token


def retrieve_uid(token: str) -> str:
    """
    Retrieve the uid from the given token.

    :param token: The access token to verify
    :return: The uid of the user
    """
    decoded_token = firebase_admin.auth.verify_id_token(token)
    return decoded_token["uid"]


@app.get("/")
async def root() -> dict[str, str]:
    """Return a 'Hello World' message."""
    return {"message": "Hello World"}


@app.post("/sensors-data")
async def sensors_data(
    request: Request, authorization: Annotated[str, Header()]
) -> Response:
    """Ingest sensors data."""
    uid = retrieve_uid(get_access_token_from_header(authorization))
    print(uid)
    if request.headers.get("content-type") != "application/json":
        print("Invalid content-type")
        return Response(status_code=499)
    print(await request.json())
    return Response(status_code=200)


@app.post("/sensors-data-test")
async def sensors_data_test(
    payload: TestPayload, authorization: Annotated[str, Header()]
) -> Response:
    """Ingest sensors data."""
    print(payload)
    print(retrieve_uid(get_access_token_from_header(authorization)))
    return Response(status_code=200)
