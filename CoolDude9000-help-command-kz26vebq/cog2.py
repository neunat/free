from discord.ext import commands

class Cog2(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command()
  async def cmd6(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd7(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd8(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd9(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd10(self, ctx):
    await ctx.send('1')

def setup(bot):
  bot.add_cog(Cog2(bot))