from discord.ext import commands

class Cog3(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command()
  async def cmd11(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd12(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd13(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd14(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd15(self, ctx):
    await ctx.send('1')

def setup(bot):
  bot.add_cog(Cog3(bot))