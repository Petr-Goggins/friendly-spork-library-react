from datetime import datetime, timedelta

from passlib.context import CryptContext
from sqlalchemy.orm import Session
from jose import jwt,JOSEError
# from dotenv import load_dotenv
from models import User
import settings
# load_dotenv()



pwd_context=CryptContext(schemes=["bcrypt"],deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def verfy_password(plain_password, hasned_password):
    return pwd_context.verify(plain_password, hasned_password)

def get_user(db:Session,username:str):
   return db.query(User).filter(User.username == username).first()

def create_accsess_token(data:dict)->str:
    to_encode=data.copy()
    expire=datetime.utcnow()+timedelta(minutes=30)
    to_encode.update({'exp':expire})
    encode_jwt=jwt.encode(
    to_encode, settings.secret_key, settings.algorytm
        )
    return encode_jwt

def authenticate_user(db:Session, 
                     username:str,
                     password:str
                     ):
    user=get_user(db,username)
    if not user:
        return False
    if not verfy_password(password,user.password):
        return False
    return user

    