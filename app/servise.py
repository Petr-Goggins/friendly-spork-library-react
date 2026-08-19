from sqlalchemy import select

from models import Laptop
from database import AsyncSessionLocal, get_db

import asyncio
from sqlalchemy.ext.asyncio import AsyncSession



async def get_laptops(session_factory):
    async with session_factory() as session:
        session=get_db()
        data = await session.execute(select(Laptop))
        
        return data.scalar().all()

