from discord.ext import commands
import discord, asyncio

def check(author):
  def inner_check(message):
    if message.author != author:
      return False
    try:
      return True
    except ValueError:
      return False
  return inner_check

class Cool(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command(name='embed')
  async def hi(self, ctx, *, arg):
    embed = discord.Embed(
      title='Links:', 
      color=discord.Colour.random()
    )
    
    embed.add_field(
        name="Link:", 
        value=arg, 
        inline=False
    )
    
    await ctx.send("")
    
def setup(bot):
  bot.add_cog(Cool(bot))