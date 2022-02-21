from discord.ext import commands

class Cog(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.command(
    aliases=['command1', 'test1', 'testcommand1'],
    help='This is a placeholder command for a help command sub class example by forum member'
    )
  async def cmd1(self, ctx, arg1, arg2 = None):
    await ctx.send('1')

  @commands.command(help='This is a placeholder command for a help command sub class example by forum member')
  async def cmd2(self, ctx):
    await ctx.send('1')

  @commands.command(hidden=True)
  async def cmd3(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd4(self, ctx):
    await ctx.send('1')

  @commands.command()
  async def cmd5(self, ctx):
    await ctx.send('1')

def setup(bot):
  bot.add_cog(Cog(bot))