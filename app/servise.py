from fastapi import Depends
from sqlalchemy import select

from auth import get_password_hash
from shema import UserCreate
from models import Laptop, User
from dependesis import get_db



from sqlalchemy.orm import Session


def get_laptops(db:Session=Depends(get_db)):
        data =db.query(Laptop)
        return data.scalar().all()

def create_user(user:UserCreate ,db:Session=Depends(get_db)):
    new_user=User(
        username=user.username,
        password=get_password_hash(user.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

