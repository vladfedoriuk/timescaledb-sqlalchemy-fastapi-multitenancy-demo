"""
The main file of the backend.

It contains the FastAPI application.
"""
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root() -> dict[str, str]:
    """
    Return a message.

    :return: A message.
    """
    return {"message": "Hello World"}
