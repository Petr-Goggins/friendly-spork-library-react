

from typing import List

from fastapi import FastAPI

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

@app.get('/laptops/{id}', response_model=List[Laptop])
def getLpt(id:int):
    return filter(lambda x:x['id']==id,laptops)

@app.get('/laptop')
def getLpt(name,gpu):
    return {'name':name,'видеокарта':gpu}

@app.post('/laptops', status_code=201)
def postLpt(lpt:LaptopCreate):
    return lpt

@app.delete('/laptops' ,status_code=204)
def deleteLpt(id:int):
    return id

@app.put('/laptops')
def putLpt(lpt:LaptopUpdate):
    return lpt