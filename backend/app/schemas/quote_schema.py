from datetime import date
import enum
from typing import List, Optional
from bson import ObjectId
from pydantic import BaseModel, Field
from app.helpers.mock_data import quote_data


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class StatusOptionsCreator(str, enum.Enum):
    draft = "pedding"
    done = "done"
    cancelled = "cancelled"
    active = "active"


class UserCreator(BaseModel):
    name: str
    email: str


class PositionCreator(BaseModel):
    lat: str
    lng: str


class LocationCreator(BaseModel):
    from_address: str
    from_position: PositionCreator
    to_address: str
    to_position: PositionCreator


class VolumesCreator(BaseModel):
    description: str
    weight: str
    length: str
    width: str


class QuoteBase(BaseModel):
    _id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    date_to_move: str
    status: Optional[StatusOptionsCreator] = Field(default="pedding")
    user: UserCreator
    location: LocationCreator
    volumes: List[VolumesCreator]

    class Config:
        use_enum_values = True
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {"example": quote_data}
