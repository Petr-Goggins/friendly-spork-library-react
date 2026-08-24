from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String,create_engine, func
from sqlalchemy.orm import declarative_base, relationship
from database import Base, engine
engine=create_engine('sqlite+aiosqlite:///laptop.db')

Base=declarative_base()

class Model(Base):
    __tablename__='title'
    id=Column(Integer,autoincrement=True,primary_key=True)
    title=Column(String,nullable=False)

    laptops=relationship('Laptop',back_populates='model')

class Laptop(Base):
    __tablename__='laptop'
    id=Column(Integer,autoincrement=True,primary_key=True)
    model_id=Column(Integer,ForeignKey('model.id'))
    title=Column(String,nullable=False)
    ram=Column(Integer)
    cpu=Column(String)
    gpu=Column(String)
    disc=Column(String)
    size=Column(Integer)

    model=relationship('Model',back_populates='laptops')



class User(Base):
    __tablename__='user'
    id=Column(Integer,autoincrement=True,primary_key=True)
    username=Column(String,unique=True,index=True)
    password=Column(String)
    is_admin=Column(Boolean,default=False)
    is_mentor=Column(Boolean,default=False)
    created_at=Column(DateTime,server_default=func.now())
Base.metadata.create_all(engine)
