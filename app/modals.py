from sqlalchemy import Column, ForeignKey, Integer, String,create_engine

from sqlalchemy.orm import declarative_base, relationship

engine=create_engine('sqlite:///laptop.db')

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

Base.metadata.create_all(bind=engine)
