

from typing import List

from fastapi import Depends, FastAPI, HTTPException,status

from auth import authenticate_user, create_accsess_token, get_user
from dependesis import get_current_user, get_db
from shema import User
from servise import create_user, get_laptops
from shema import Laptop, LaptopCreate, LaptopUpdate, Token, UserCreate
from sqlalchemy.orm import Session

app=FastAPI()

laptops=[
    {
        'id':1,
            'model':{
                'id':2,
                'title':'Asus'
            }
            ,
            'model_id':2,
            'title': 'comp1',
            'ram':8,
            'gpu':'видеокарта1',
            'disc':'SSD',
            'size':256,
        
    },
     {
            'id':2,
                'model':{
                    'id':3,
                    'title':'Asus'
                }
                ,
                'model_id':3,
                'title': 'comp1',
                'ram':8,
                'gpu':'видеокарта2',
                'disc':'SSD',
                'size':256,
            
        }
]

@app.post('/login',response_model=Token)
def login(login:str,passw:str,db:Session=Depends(get_db)):
    user= authenticate_user(db,login,passw)
    if not user:
      raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail='incorrect login or password',
        headers={'WWW-Authenticate':'Bearer'}
        )
    access_token=create_accsess_token(
        date={'sub':user.username}
    )
    return{'access_token':access_token,
           'type_token':'bearer'}

@app.post('/register',response_model=User)
def register(user:UserCreate,db:Session=Depends(get_db) ):
    db_user=get_user(db,user.username)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Пользователь уже существует'

        )
    user=create_user(db_user)
    return user


@app.get('/', response_model=List[Laptop])
def getLaptop():
    return laptops

@app.get('/laptops/{id}', response_model=List[Laptop])
def getLpt(id:int):
    return filter(lambda x:x['id']==id,laptops)

@app.get('/laptop')
def getLpt():
    data= get_laptops()
    return data

@app.post('/laptops', status_code=201)
def createlpt(lpt:LaptopCreate,user:User=Depends(get_current_user)):
    return lpt

@app.delete('/laptops' ,status_code=204)
def deleteLpt(id:int):
    return id

@app.put('/laptops')
def putLpt(lpt:LaptopUpdate):
    return lpt