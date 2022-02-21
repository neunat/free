from discord.ext import commands

class Cog4(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command()
  async def cmd16(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd17(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd18(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd19(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd20(self, ctx):
    await ctx.send('1')

def setup(bot):
  bot.add_cog(Cog4(bot))