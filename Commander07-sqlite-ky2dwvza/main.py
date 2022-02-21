import asyncio
import aiosql
import aiosqlite

async def main():
  async with aiosqlite.connect("config.db") as conn:
    pass

asyncio.run(main())