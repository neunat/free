from discord.ext import commands
from discord.ext.commands import has_permissions
from other.mongo import cluster, get_log_data
import discord
import asyncio

class Mod(commands.Cog):
  def __init__(self, bot):
    self.bot = bot
  
  @discord.ext.commands.cooldown(1, 3, commands.BucketType.user)
  @commands.command()
  @commands.has_permissions(ban_members = True)
  async def unban(self, ctx,*,member,reason=None):
    try:
        banned_users = await ctx.guild.bans()
        id_ = None
        try:
            int(member)
            id_ = True
        except:
            id_ = False
        if not id_ == True:
            member_name, member_discriminator = member.split('#')
        else:
            mem="discord#0000"
            member_name, member_discriminator = mem.split('#')
        for ban_entry in banned_users:
            user = ban_entry.user
            if (user.name, user.discriminator) == (member_name, member_discriminator):
                await ctx.guild.unban(user)
                await ctx.send(f"{user} has been unbanned by {ctx.author}.")
            elif int(user.id) == int(member):
                await ctx.guild.unban(user)
                await ctx.send(f"{user} has been unbanned by {ctx.author}.")
    except:
      await ctx.reply("This pog person isn't banned.", mention_author=False)

  @discord.ext.commands.cooldown(1, 3, commands.BucketType.user)
  @commands.command()
  @commands.has_permissions(kick_members = True)
  async def kick(self, ctx, member: discord.Member, *, reason=None):
      try:
          await member.kick(reason=reason)
          await ctx.reply(f'User {member} has been kicked.', mention_author=False)
      except:
          await ctx.reply("You cannot kick this pog person.", mention_author=False)

  @discord.ext.commands.cooldown(1, 3, commands.BucketType.user)
  @commands.command()
  @has_permissions(ban_members = True)
  async def ban(self, ctx, *arg):
    try:
      member = arg[0]
    except:
      await ctx.send("heyoo dude fill in the arguments")
      return
    try:
        int(member)
    except:
        member = member.split("!")
        member = member[1]
        member = member.split(">")
        member = member[0]
    try:
        reason=arg[1]
    except:
        reason=None
    try:
      user = await self.bot.fetch_user(member)
      await ctx.guild.ban(user, reason = reason)
      await ctx.reply(f'User {user} has been banned.', mention_author=False)
    except:
      await ctx.reply("You cannot ban this pog person.", mention_author=False)

  @discord.ext.commands.cooldown(1, 3, commands.BucketType.user)
  @commands.command()
  @has_permissions(administrator=True)
  async def prefix(self, ctx, *, arg):
    try:
      arg = arg.split()
      # if len(list_) > 1:
      #   try:
      #     arg = list(arg)
      #   except:
      #     await ctx.send("Hey you can't include spaces in the prefix.")
      #     return
    except:
      pass
    data = await get_log_data()
    try:
      data[str(ctx.guild.id)]
    except:
      data[str(ctx.guild.id)]={}
    try:
      try:
        arg[0]
        prefix = str(arg).lstrip('[').rstrip(']')
      except:
        pass
      data[str(ctx.guild.id)]["prefix"]=arg
      await ctx.send(f"The prefix for this server has been set to {prefix}!",  allowed_mentions=discord.AllowedMentions(roles=False, users=False, everyone=False))
    except:
      await ctx.send("The prefix couldn't be set because it wasn't in a valid format")
      return
    db = cluster["CapBot"]
    collection = db["logs"]
    collection.replace_one({"_id":1}, data)
    

  @discord.ext.commands.cooldown(1, 1, commands.BucketType.user)
  @commands.command()
  @has_permissions(administrator=True)
  async def purge(self, ctx, num: int):
      await ctx.channel.purge(limit = num + 1)

  @discord.ext.commands.cooldown(1, 600, commands.BucketType.user)
  @commands.command()
  async def massPing(self, ctx):
    if ctx.message.author.id == 763854419484999722:
      try:
        await ctx.message.delete()
      except:
        pass
      await asyncio.sleep(3)
      await ctx.send(
        "@everyone @here @everyone @everyone @here @everyone @here\n**DO NOT COMPLAIN ABOUT PINGS**\n@everyone @everyone @here @everyone @here \n**COMPLAIN = INSTANT BAN!**")
    else:
      await ctx.reply("This command is currently for bot owner only to prevent ping raids.", mention_author=False)

  @discord.ext.commands.cooldown(1, 600, commands.BucketType.user)
  @commands.command()
  async def spamPing(self, ctx):
    if ctx.message.author.id == 763854419484999722:
      for i in range(10):
        await ctx.send("@everyone")
    else:
      await ctx.reply("This command is currently creator-only to prevent ping raids.", mention_author=False)

  @commands.Cog.listener()
  async def on_member_join(self, member):
    data = await get_log_data()
    if str(member.guild.id) in data.keys():
      try:
        channel_id = data[str(member.guild.id)]["channel"]
      except:
        return
      channel = self.bot.fetch_channel(channel_id)
      await channel.send(f"{member} just joined the server! Welcome!")
    else:
      return
  
  @discord.ext.commands.cooldown(1,2,commands.BucketType.user)
  @commands.command()
  @commands.has_permissions(manage_guild=True)
  async def setchannel(self, ctx, channel: discord.TextChannel):
    data = await get_log_data()
    try:
      try:
        data[str(ctx.guild.id)]
      except:
        data[str(ctx.guild.id)]={}
      data[str(ctx.guild.id)]["channel"]=channel.id
      db=cluster["CapBot"]
      collection = db["logs"]
      collection.replace_one({"_id":1},data)
    except:
      await ctx.send("Channel not found")



def setup(bot):
    bot.add_cog(Mod(bot))