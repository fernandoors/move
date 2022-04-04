from http.client import HTTPException
from fastapi.encoders import jsonable_encoder

from app.schemas.quote_schema import QuoteBase
from app.helpers.serialize import serializeDict, serializeList


def list_quotes(db):
    return serializeList(db.find('quote'))


def create_quote(db, quote: QuoteBase):
    quote_saved = db.save('quote', jsonable_encoder(quote))
    found = db.find_by_id('quote', quote_saved)
    return serializeDict(found)


def show_quote(db, id: str):
    return serializeDict(db.find_by_id('quote', id))


def update_quote(db, id: str, quote: QuoteBase):
    quote_exists = db.find_by_id('quote', id)
    if not quote_exists:
        raise HTTPException(status_code=404, detail="Quote not found")
    db.update('quote', id, jsonable_encoder(quote))
    return serializeDict(db.find_by_id('quote', id))
