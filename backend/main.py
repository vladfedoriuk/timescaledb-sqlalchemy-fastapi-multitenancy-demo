"""
The main file of the backend.

It contains the FastAPI application.
"""
from fastapi import FastAPI, Request, Response

app = FastAPI()


@app.get("/")
async def root() -> dict[str, str]:
    """Return a 'Hello World' message."""
    return {"message": "Hello World"}


@app.post("/sensors-data")
async def sensors_data(request: Request) -> Response:
    """Ingest sensors data."""
    print(await request.json())
    return Response(status_code=200)
