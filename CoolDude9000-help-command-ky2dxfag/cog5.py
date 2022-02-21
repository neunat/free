from discord.ext import commands

class Cog5(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command()
  async def cmd21(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd22(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd23(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd24(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd25(self, ctx):
    await ctx.send('1')

def setup(bot):
  bot.add_cog(Cog5(bot))