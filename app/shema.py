from datetime import datetime

from pydantic import BaseModel,Field, field_validator
from enum import Enum

class TypeDisc(str,Enum):
    ssd="SSD"
    hdd="HDD"


class filial(BaseModel):
    id:int
    title:str=Field(...,min_length=1,max_length=30)
    address:str=Field('Moskow',description='adress filial')

class Model(BaseModel):
    id:int
    title:str

class Laptop(BaseModel):
    id:int
    model:Model
    title:str
    ram:int
    gpu:str
    disc:TypeDisc
    size:int=Field(ge=128, le=1024)

class LaptopCreate(BaseModel):
    model:int
    title:str
    ram:int
    gpu:str
    disc:TypeDisc
    size:int=Field(ge=128, le=1024)

class LaptopUpdate(BaseModel):
    id:int
    model:int
    title:str
    ram:int
    gpu:str
    disc:TypeDisc
    size:int=Field(ge=128, le=1024)

    class User(BaseModel):
         id:int
         username:str
         password:str
         is_admin:bool
         is_mentor:bool
         created_at:datetime

    class UserCreate(BaseModel):
             username:str
             password:str
             
            
@field_validator("title")
def tittle_cannot_be_whitespase(cls,v):
    if not v.strip():
        return ValueError

