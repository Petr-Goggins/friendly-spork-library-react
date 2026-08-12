from fastapi import FastAPI

from shema import Laptop

app=FastAPI()

laptops=[
    {
        'id':1,
            'model':{
                'id':2,
                'title':'Asus'
            }
            ,
            'title': 'comp1',
            'ram':8,
            'gpu':'видеокарта1',
            'disc':'SDD',
            'size':256,
        
    },
     {
            'id':2,
                'model':{
                    'id':3,
                    'title':'Asus'
                }
                ,
                'title': 'comp1',
                'ram':8,
                'gpu':'видеокарта2',
                'disc':'SDD',
                'size':256,
            
        }
]

@app.get('/', response_model=Laptop)
def getLpt():
    return laptops

@app.get('/kain')
def kain():
    return{'message':'avel'}

@app.get('/levi')
def levi():
    return{'message':'levi'}