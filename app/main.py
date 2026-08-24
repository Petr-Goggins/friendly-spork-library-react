

from typing import List

from fastapi import Depends, FastAPI

from dependesis import get_current_user
from models import User
from servise import get_laptops
from shema import Laptop, LaptopCreate, LaptopUpdate

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

@app.get('/', response_model=List[Laptop])
def getLaptop():
    return laptops

@app.get('/laptops/{id}', response_model=List[Laptop])
def getLpt(id:int):
    return filter(lambda x:x['id']==id,laptops)

@app.get('/laptop')
async def getLpt():
    data= await get_laptops()
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