from discord.ext import commands
from other.mongo import cluster, get_bot_banned, get_bank_data
from cogs.moderator.admin import Admin
from data.json.help import help_menu
import discord
import traceback

class ErrorHandler(commands.Cog):
  def __init__(self, bot):
    self.bot = bot

  @commands.Cog.listener()
  async def on_command_error(self, ctx, error):
    if str(ctx.command) == "bot_unban":
      result = await Admin.unban(self,ctx, ctx.author.id)
      if result:
        return
    bot_banned = await get_bot_banned()
    if ctx.author.id in bot_banned:
      await ctx.send("You're bot banned! Join support server to appeal. ~~bad boy!~~")
      return
    if ctx.guild == None:
      await ctx.send("Sorry but we've disabled DM commands")
      return
    else:
      pass
    if isinstance(error, commands.CommandOnCooldown):
      em = discord.Embed(
      title="Slow it down, mate",
      description=f"Try again in {error.retry_after:.2f}s.", color=discord.Color.random()
      )
      await ctx.reply(embed=em, mention_author=False)
      return
    elif isinstance(error, commands.MissingRequiredArgument):
      em=discord.Embed(
        title="You're missing required arguments!",
        description="{} - {}".format(str(ctx.command), help_menu[str(ctx.command)]["use"])
      )
      em.set_footer(text=help_menu[str(ctx.command)]["footer"])
      await ctx.send(embed=em)
      ctx.command.reset_cooldown(ctx)
      return
    elif isinstance(error, commands.CommandNotFound):
      return
    elif isinstance(error, commands.MissingPermissions):
      await ctx.send("You are missing required permissions!")
      ctx.command.reset_cooldown(ctx)
    elif isinstance(error, commands.CheckFailure):
      return
    elif isinstance(error, commands.CommandInvokeError):
      if str(error.original) == "403 Forbidden (error code: 50007): Cannot send messages to this user":
        await ctx.send("I failed send message! The user must have blocked me or closed their dms.")
        return
      else:
        traceb = ""
        traceblist = traceback.format_exception(type(error), error, error.__traceback__)
        for i in traceblist:
          traceb+=i
        await ctx.send(f"```py\n{traceb}```")
    else:
      ctx.command.reset_cooldown(ctx)
      traceb = ""
      traceblist = traceback.format_exception(type(error), error, error.__traceback__)
      for i in traceblist:
        traceb+=i
      await ctx.send(f"```py\n{traceb}```")
      return

def setup(bot):
    bot.add_cog(ErrorHandler(bot))