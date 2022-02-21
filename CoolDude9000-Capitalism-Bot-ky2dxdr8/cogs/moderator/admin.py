from discord.ext import commands
from other.mongo import cluster, get_bank_data
import discord

class Admin(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command(name="bot_ban")
  async def ban(self, ctx, member):
    try:
      int(member)
    except:
      await ctx.send("The argument has to be an integer")
      return
    users = await get_bank_data()
    admin = users[str(ctx.author.id)]["badges"]["admin"]
    if admin == 0:
      await ctx.send("You're not an admin")
      return
    db = cluster["CapBot"]
    collection = db["bot_banned"]
    cursor = collection.find({})
    for x in cursor:
      users = x
    member = int(member)
    try:
      person = await self.bot.fetch_user(member)
      users["bot_banned"].append(member)
      channel = await self.bot.fetch_channel(853288563352404058)
      await channel.send(f"{ctx.author} banned {person.name}, id {member}")
    except Exception as e:
      print(e)
      await ctx.send("Invalid member id")
      return
    collection.replace_one({"_id":1},users)
    await ctx.send("he is now bot banned")

  @commands.command(name="bot_unban")
  async def unban(self, ctx, member):
    try:
      int(member)
    except:
      await ctx.send("The argument has to be an integer")
      return
    users = await get_bank_data()
    admin = users[str(ctx.author.id)]["badges"]["admin"]
    if admin == 0:
      await ctx.send("You're not an admin")
      return False
    db = cluster["CapBot"]
    collection = db["bot_banned"]
    cursor = collection.find({})
    for x in cursor:
      users = x
    member = int(member)
    try:
      person = await self.bot.fetch_user(member)
      spam=False
      try:
        index = users["bot_banned"].index(member)
        users["bot_banned"].pop(index)
      except:
        index = users["spam_banned"].index(member)
        users["spam_banned"].pop(index)
        spam = True
      channel = await self.bot.fetch_channel(853288563352404058)
      await channel.send(f"{ctx.author} unbanned {person.name}, id {member}, spam={spam}")
    except Exception as e:
      print(e)
      await ctx.send("Invalid member id")
      return
    collection.replace_one({"_id":1},users)
    await ctx.send("he is now bot unbanned")
    return True
  
  @discord.ext.commands.cooldown(1, 600, commands.BucketType.user)
  @commands.command()
  async def shutdown(self, ctx):
    if ctx.message.author.id == 763854419484999722:
      #put something here
      exit()
    else:
      await ctx.reply("This command is creator only", mention_author=False)

def setup(bot):
    bot.add_cog(Admin(bot))