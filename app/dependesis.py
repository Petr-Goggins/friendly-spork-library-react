from fastapi import Depends, HTTPException,Request, status
from jose import jwt,JWTError
from database import SessionLocal
from models import User
import settings
from sqlalchemy.orm import Session
from auth import get_user


def get_db():
        db=SessionLocal()
        try:
            yield db

        except:
            db.close()

def get_token(request:Request):
    token=request.cookies.get('access_token')
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail='TOKEN NOT FOUND')
    return token

def get_current_user(token:str=Depends(get_token), db:Session=Depends(get_db)):
    try:
        payLoad=jwt.decode(token,settings.secret_key,settings.algorytm)
        username=payLoad.get('sub')
        if not username:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='token does not contain user into'
            )
        token_data=username
    except JWTError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, 
            detail='invalid token'
            )
    user=get_user(db,username)
    if not user:
        raise HTTPException(
            status_code= status.HTTP_401_UNAUTHORIZED,
            detail='user not found'
        )
    return user
    
def get_admin(cur_user:User=Depends(get_current_user)):
   if not cur_user.is_admin:
       raise HTTPException(
           status_code=status.HTTP_403_FORBIDDEN,
           detail='нужны права администратора'
       )
def get_mentor(cur_user:User=Depends(get_current_user)):
    if not cur_user.is_mentor:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail='нужны права ментора'
        )
