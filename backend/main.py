"""
The main file of the backend.

It contains the FastAPI application.
"""
from fastapi import FastAPI, Request, Response

from dto.sensors_data import TestPayload

app = FastAPI()


@app.get("/")
async def root() -> dict[str, str]:
    """Return a 'Hello World' message."""
    return {"message": "Hello World"}


@app.post("/sensors-data")
async def sensors_data(request: Request) -> Response:
    """Ingest sensors data."""
    if request.headers.get("content-type") != "application/json":
        print("Invalid content-type")
        return Response(status_code=499)
    print(await request.json())
    return Response(status_code=200)


@app.post("/sensors-data-test")
async def sensors_data_test(payload: TestPayload) -> Response:
    """Ingest sensors data."""
    print(payload)
    return Response(status_code=200)
