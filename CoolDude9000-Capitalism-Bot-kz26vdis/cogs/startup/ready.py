import discord
from discord.ext import commands
from other.mongo import cluster, get_bank_data, func_bitcoin, get_user_data
from data.json.shop import shop_items
from data.json.badge import badge_items
import asyncio
import json
from discord_components import DiscordComponents

class StartUp(commands.Cog):
  def __init__(self, bot):
    self.bot = bot
    self.data = bot.data
    self.loop = asyncio.get_event_loop()
  
  @commands.Cog.listener()
  async def on_ready(self):
    DiscordComponents(self.bot)
    collection = cluster["CapBot"]["main"]
    users = await get_bank_data()
    for user in users.keys():
        if user == "_id":
          continue
        if "inventory" not in users[user]:
            users[user]["inventory"]={key: 0 for (key, val) in shop_items.items()}
        for item_name in shop_items.keys():
          if item_name not in users[user]["inventory"]:
            users[user]["inventory"][item_name] = 0
    for user in users.keys():
      if user == "_id":
        continue
      if "wallet" not in users[user]:
        users[user]["wallet"]=0
      if users[user].get('bank') ==None:
        users[user]["bank"]=0
      if users[user].get('bank_max') == None:
        users[user]["bank_max"]=5000
      if users[user].get('bitcoin') == None:
        users[user]["bitcoin"]=0
      if users[user].get('exp') == None:
        users[user]["exp"]=0
      if users[user].get('multi') == None:
        users[user]["multi"]=0
      if users[user].get('multi') != 0 :
        users[user]["multi"]=0
      if users[user].get('ads') == None:
        users[user]["ads"]=1000
      if users[user].get('ads') < 1000:
        users[user]["ads"]=1000
      if users[user].get('job') == None:
        users[user]["job"]=None
      if users[user].get('bank_color') == None:
        users[user]["bank_color"]=None
      if "badges" not in users[user]:
        users[user]["badges"] = {key: 0 for (key, val) in badge_items.items()}
      for item_name in badge_items.keys():
        if item_name not in users[user]["badges"]:
            users[user]["badges"][item_name] = 0
      removal=[]
      for item_name in users[user]["badges"].keys():
        if item_name not in badge_items.keys():
            removal.append(item_name)
      for item_name in removal:
          users[user]["badges"].pop(item_name)
    collection.replace_one({"_id":0},users)
    collection = cluster["CapBot"]["users"]
    users = await get_user_data()
    for user in users.keys():
      if user == "_id":
        continue
      if "commands" not in users[user]:
        users[user]["commands"]=0
    collection.replace_one({"_id":1},users)
    await self.bot.change_presence(status=discord.Status.idle, activity=discord.Game("CAPhelp | c/help"))
    print("Running")
    self.convert_mongo()
    await self.setup()

  def convert_mongo(self):
    maindb={}
    logsdb={}
    usersdb={}
    db = cluster["CapBot"]
    collection = db["main"]
    cursor = collection.find({})
    for document in cursor:
      users = document
    for user in users.keys():
      if user == "_id":
        continue
      maindb[user]={k:v for k, v in users[user].items()}
      maindb[user]["_id"]=user
    db = cluster["CapBot"]
    collection = db["logs"]
    cursor = collection.find({})
    for document in cursor:
      users = document
    for user in users.keys():
      if user == "_id":
        continue
      logsdb[user]={k:v for k, v in users[user].items()}
      logsdb[user]["_id"]=user
    db = cluster["CapBot"]
    collection = db["users"]
    cursor = collection.find({})
    for document in cursor:
      users = document
    for user in users.keys():
      if user == "_id":
        continue
      usersdb[user]={k:v for k, v in users[user].items()}
      usersdb[user]["_id"]=user
    with open ("storage.json", "w") as f:
      big_dict = {"main":maindb, "logs": logsdb, "users": usersdb}
      json.dump(big_dict, f)

  async def setup(self):
    f1 = self.loop.create_task(func_bitcoin())
    f2 = self.loop.create_task(self.func_data())
    await asyncio.wait([f1, f2])

  async def func_data(self):
    while True:
      with open("data/json/data.json", "w") as f:
        json.dump(self.data, f)
      await asyncio.sleep(1)

def setup(bot):
    bot.add_cog(StartUp(bot))