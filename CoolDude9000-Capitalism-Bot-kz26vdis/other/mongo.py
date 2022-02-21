from pymongo import MongoClient
import random, asyncio
import discord
from discord.ext.commands import bot

cluster = MongoClient('mongodb+srv://cap:z67253635@clustercapitalism.gtqj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

async def get_bot_banned():
  db = cluster["CapBot"]
  collection = db["bot_banned"]
  cursor = collection.find({})
  for x in cursor:
    dict_list = x
  return dict_list["bot_banned"]

async def get_spam_banned():
  db = cluster["CapBot"]
  collection = db["bot_banned"]
  cursor = collection.find({})
  for x in cursor:
    dict_list = x
  return dict_list["spam_banned"]

async def get_bank_data():
  db = cluster["CapBot"]
  collection = db["main"]
  cursor = collection.find({})
  for x in cursor:
    users = x
  return users

async def func_bitcoin():
  while True:
      db = cluster["CapBot"]
      collection = db["bitcoin"]
      users = await get_bitcoin_data()
      exchange_rate = users["exchange_rate"]
      if exchange_rate < 60000:
          if exchange_rate > 40000:
              users["exchange_rate"]+=random.randint(0,500)
              users["exchange_rate"]-=random.randint(0,500)
          else:
              users["exchange_rate"]+=random.randint(1500,2000)
      else:
          users["exchange_rate"]-=random.randint(1500,2000)
      collection.replace_one({"_id":1},users)
      await asyncio.sleep(60)

async def get_bitcoin_data():
  db = cluster["CapBot"]
  collection = db["bitcoin"]
  cursor = collection.find({})
  for x in cursor:
    users = x
  return users

async def get_log_data():
  db = cluster["CapBot"]
  collection = db["logs"]
  cursor = collection.find({})
  for x in cursor:
    users = x
  return users

async def get_user_data():
  db = cluster["CapBot"]
  collection = db["users"]
  cursor = collection.find({})
  for x in cursor:
    users = x
  return users