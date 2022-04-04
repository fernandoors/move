from fastapi import APIRouter, HTTPException

from app.services import quote_service
from app.schemas.quote_schema import QuoteBase
from app.configs.mongo import Mongo

router = APIRouter()

db = Mongo()


@router.get("/", response_description="List All Quotes")
def get():
    try:
        return quote_service.list_quotes(db)
    except Exception as e:
        raise HTTPException(400, "Something went wrong")


@router.get("/{id}", response_description="List A Speficit Quote by id")
def show(id: str):
    try:
        return quote_service.show_quote(db, id)
    except Exception as e:
        raise HTTPException(400, "Something went wrong")


@router.post("/", response_description="Create A New Quote", status_code=201)
def store(quote: QuoteBase):
    try:
        return quote_service.create_quote(db, quote)
    except ValueError as e:
        raise HTTPException(400, e.args[0])
    except Exception as e:
        raise HTTPException(400, "Something went wrong")


@router.put("/{id}", response_description="Update A Quote")
def update(id: str, quote: QuoteBase):
    try:
        return quote_service.update_quote(db, id, quote)
    except Exception as e:
        raise HTTPException(400, "Something went wrong")
