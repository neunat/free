import discord
from discord.ext import commands, tasks
import random, asyncio, re, time, datetime, logging, os, json
from data.profanity import swearwords
from asyncio.tasks import Task
from other.mongo import cluster, get_bot_banned, get_log_data
from data.json.shop import shop_items
from data.json.badge import badge_items
from other.mongo import get_bank_data, get_bitcoin_data, get_user_data, get_spam_banned
import smtplib
from cogs.startup.ready import StartUp
from discord_slash import SlashCommand, SlashContext
from data.embed.general import embed_General
from data.embed.help import embed
from data.embed.mod import embed_Moderation
from data.embed.emoji import embed_Emoji
from data.embed.currency import embed_Currency
from data.embed.other import embed_Other
from data.json.help import help_menu
from discord_components import DiscordComponents, Button, ButtonStyle, InteractionType

async def get_pre(bot, message):
  data = await get_log_data()
  try:
    if str(message.guild.id) in data.keys():
      prefix = data[str(message.guild.id)]["prefix"]
    else:
      return ['CAP','cap','cAp',"caP","Cap","CAp","CaP","cAP","c/","C/"]
  except:
    return ['CAP','cap','cAp',"caP","Cap","CAp","CaP","cAP","c/","C/"]
  fallback = os.urandom(32).hex()
  prefixes = prefix
  comp = re.compile("^(" + "|".join(map(re.escape, prefixes)) + ").*", flags=re.I)
  match = comp.match(message.content)
  if match is not None:
      return match.group(1)
  return fallback

client = commands.Bot(
  case_insensitive=True,
  command_prefix=get_pre,
  strip_after_prefix=True
)

client.remove_command('help')
client.loadng=False
slash = SlashCommand(
  client, 
  sync_commands=True
)

with open("data/json/data.json", "r") as f:
  dat = json.load(f)
client.data = dat
client.intervals={}

extensions = [
  'cogs.moderator.admin',
  'cogs.moderator.mod',
  'cogs.commands.cmd',
  'cogs.help.help',
  'cogs.help.rules',
  'cogs.startup.error',
  'cogs.startup.ready',
  'cogs.currency.currency',
  'cogs.emoji.emojis',
  'cogs.commands.reset',
  "cogs.startup.web"
]

@client.check
async def check_cmds(ctx):
  if client.loadng:
    await ctx.channel.send("The developers are loading commands, try again later.")
    return False
  bot_banned = await get_bot_banned()
  spam_banned = await get_spam_banned()
  if ctx.guild == None:
    dm_channel=True
  else:
    dm_channel=False
  logs = await get_log_data()
  try:
    cmds = logs[str(ctx.guild.id)]["disabled"]
    if str(ctx.command) in cmds:
      await ctx.channel.send("This command is disabled in this server.")
      return False
  except:
    pass
  if ctx.author.id in bot_banned or dm_channel or ctx.author.id in spam_banned:
    return False
  return True
  # return not ((ctx.author.id in await get_bot_banned()) or (ctx.guild == None) or (ctx.author.id in await get_spam_banned()) or client.loadng or (str(ctx.command) in (await get_log_data()).get(str(ctx.guild.id), {}).get("disabled", [])))

@commands.check
async def check_commands(ctx):
  if client.loadng:
    await ctx.channel.send("The developers are loading commands, try again later.")
    return
  bot_banned = await get_bot_banned()
  spam_banned = await get_spam_banned()
  if ctx.guild == None:
    dm_channel=True
  else:
    dm_channel=False
  logs = await get_log_data()
  try:
    cmds = logs[str(ctx.guild.id)]["disabled"]
    if str(ctx.command) in cmds:
      await ctx.channel.send("This command is disabled in this server.")
      return False
  except:
    pass
  if ctx.author.id in bot_banned or dm_channel or ctx.author.id in spam_banned:
    return False
  return True

@slash.slash(name="Prefix", description="Gives you the bot prefix", options=[])
@check_commands
async def _prefix(ctx: SlashContext):
  prefix = await get_log_data()
  try:
    prefix = prefix[str(ctx.guild.id)]["prefix"]
    prefix = str(prefix).lstrip('[').rstrip(']')
    await ctx.send(f"Hi! My prefix is {prefix}!")
  except:
    await ctx.send("Hi! My prefix is 'CAP' or 'c/'!")

@tasks.loop(seconds=1.0)
async def store_data(ctx):
  pass

options = [{
    "name": "argument",
    "description": "input for command or category",
    "required": False,
    "type": 3
}]

@slash.slash(name="Help", description="Run this command for help!", options=options)
@check_commands
async def _help(ctx: SlashContext, argument=None):
    embed.color = discord.Color.random()
    embed_General.color = discord.Color.random()
    embed_Moderation.color = discord.Color.random()
    embed_Other.color = discord.Color.random()
    embed_Emoji.color = discord.Color.random()
    embed_Currency.color = discord.Color.random()
    inpt = None
    if argument == None:
      await ctx.send(embed=embed)
    else:
      inpt = argument.lower()
      if inpt == "all":
        await ctx.send(embed=embed)
      elif inpt == "moderation":
        await ctx.send(embed=embed_Moderation)
      elif inpt == "other":
        await ctx.send(embed = embed_Other)
      elif inpt == "emoji":
        await ctx.send(embed = embed_Emoji)
      elif inpt == "currency":
        await ctx.send(embed = embed_Currency)
      elif inpt == "general":
        await ctx.send(embed=embed_General)
      elif inpt == "data":
        embed_Data = discord.Embed(
          color = discord.Color.random()
        )
        embed_Data.add_field(
          name = "Data Type Commands",
          value = "`removedata`, `removelogs`, `removeall`"
        )
        await ctx.send(embed=embed_Data)
      try:
        command = client.get_command(inpt)
        inpt = command.name
        try:
          desc = help_menu[inpt]["use"]
          cooldown = help_menu[inpt]["cooldown"]
          alias = help_menu[inpt]["aliases"]
          footer = help_menu[inpt]["footer"]
          em = discord.Embed(
            title = inpt,
            description = f"__**Description**__: {desc} \n __**Cooldown**__: {cooldown} seconds \n __**Aliases**__: {alias}"
          )
          em.set_footer(text=f"Command format --- {footer}")
          await ctx.send(embed=em)
        except:
          await ctx.send(f"{command.name} is a valid command but no help source was found.")
      except:
          await ctx.send("that is not a valid category or command!")

@slash.slash(name="Communism", description="Will ban you", options=[])
@check_commands
async def _communism(ctx: SlashContext):
  await ctx.send("Capitalism is better", hidden=True)

@slash.slash(name="Invite", description="Posts the invite link", options=[])
@check_commands
async def _invite(ctx: SlashContext):
  await ctx.send("[Click me for the invite](<https://discord.com/api/oauth2/authorize?client_id=823699570147065876&permissions=268823670&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3DCapitalismBot&scope=bot%20applications.commands>)", hidden=True)

@slash.slash(name="Support", description="Posts the support server", options=[])
@check_commands
async def _support(ctx: SlashContext):
  await ctx.send("https://discord.gg/capitalism", hidden=True)

@slash.slash(name="pograte", description="POG RATE", options=[])
@check_commands
async def _pograte(ctx: SlashContext):
  number = random.randint(1,100)
  embedPog = discord.Embed(
  title="POG RATE MACHINE",
  description="You are {}% pog <:littlepog:825452143657353226>".format(number),
  color=discord.Color.random()
  )
  await ctx.send(embed=embedPog, hidden=True)

@slash.slash(name="website", description="Posts website", options=[])
@check_commands
async def _website(ctx: SlashContext):
  await ctx.send("https://discord.capitalismbot.repl.co", hidden = True)

@client.event
async def on_slash_command_error(ctx:SlashContext, er):
  bot_banned = await get_bot_banned()
  spam_banned = await get_spam_banned()
  if ctx.author.id in bot_banned:
    await ctx.send("You're bot banned! Join support server to appeal. ~~bad boy!~~", hidden=True)
    return
  if ctx.author.id in spam_banned:
    await ctx.send("You were banned for spamming too many commands. \nAppeal here: discord.gg/capitalism (If you are banned from the server, there's no way you can get unbanned.)")

@client.command()
async def calc(ctx,arg):
  pass

@client.command()
async def test(ctx):
  print(client.data)

@client.command()
async def reload(ctx, *, arg):
  devs = [763854419484999722, 583745403598405632]
  if not ctx.author.id in devs:
    return
  client.loadng=True
  argument = ""
  for i in arg:
    argument+=i
  try:
    client.reload_extension(argument)
  except Exception as e:
    print(e)
  await ctx.send("Reloaded.")
  client.loadng=False

# y = 0
# num = 0

# @discord.ext.commands.cooldown(1, 1, commands.BucketType.user)
# @client.command()
# async def nitro(ctx):
#   await ctx.send("no, just no nitro for you.")
  # if not ctx.message.author.id in bot_banned:
  #   nitro1 = random.choice(numletter)
  #   nitro2 = random.choice(numletter)
  #   nitro3 = random.choice(numletter)
  #   nitro4 = random.choice(numletter)
  #   nitro5 = random.choice(numletter)
  #   nitro6 = random.choice(numletter)
  #   nitro7 = random.choice(numletter)
  #   nitro8 = random.choice(numletter)
  #   nitro9 = random.choice(numletter)
  #   nitro10 = random.choice(numletter)
  #   nitro11 = random.choice(numletter)
  #   nitro12 = random.choice(numletter)
  #   nitro13 = random.choice(numletter)
  #   nitro14 = random.choice(numletter)
  #   nitro15 = random.choice(numletter)
  #   nitro16 = random.choice(numletter)
  #   await ctx.send("This thing generates a random nitro link (May not work, idk if discord patched this already)")
  #   await ctx.send(
  #       "https://discord.gift/" + nitro1 + nitro2 + nitro3 + nitro4 + nitro5 + nitro6 + nitro7 + nitro8 + nitro9 + nitro10 + nitro11 + nitro12 + nitro13 + nitro14 + nitro15 + nitro16)
  #   embedNitro = discord.Embed(
  #     title="Nitro Moving to Generator Website",
  #     description="https://replit.com/@NastyPigz/Nitro-Generator",
  #     color=discord.Color.random()
  #   )

  #   await ctx.send(embed=embedNitro)
  # else:
  #   await ctx.reply("You are bot banned.")


# @discord.ext.commands.cooldown(1, 40, commands.BucketType.user)
# @client.command()
# async def rob(ctx, member: discord.Member):
#     if await find_ban(ctx.author.id)==True:
#       await ctx.send("You are bot banned.")
#       return
#     await open_account(ctx.author)
#     await open_account(member)
#     user=ctx.author
#     target=member
#     users = await get_bank_data()
#     wallet_amt=users[str(user.id)]["wallet"]
#     wallet_amt_target=users[str(target.id)]["wallet"]
#     success = int(random.randrange(1,100))
#     if not int(wallet_amt) < 500:
#       if not int(wallet_amt_target) < 100:
#         if int(success) > 69:
#           stolen_amount=int(random.randrange(round(int(wallet_amt_target)/100),int(wallet_amt_target)/10))
#           users[str(user.id)]["wallet"]+=stolen_amount
#           users[str(target.id)]["wallet"]-=stolen_amount
#           await ctx.send(f"You robbed {stolen_amount}!")
#           with open("data.json","w") as f:
#             json.dump(users,f, sort_keys=True, indent=4)
#           return True
#         else:
#           users[str(user.id)]["wallet"]-=500
#           users[str(target.id)]["wallet"]+=500
#           await ctx.send("You failed to rob this guy and paid him 500 coins.")
#           with open("data.json","w") as f:
#             json.dump(users,f, sort_keys=True, indent=4)
#           return True
#       else:
#         await ctx.send("They're too poor to be robbed.")
#     else:
#       await ctx.send("you need at least 500 coins to rob someone.")

# @client.ipc.route()
# async def vote_reward(user_id, amount=1):
#   user = client.fetch_user(user_id)
#   user.send("Thanks for voting for me!")
#   users = await get_bank_data()
#   try:
#     users[str(user.id)]["inventory"]["coin_bag"]+=amount
#     db = cluster["CapBot"]
#     collection = db["main"]
#     collection.replace_one({"_id":0},users)
#   except:
#     return False
#   return True

for extension in extensions:
  client.load_extension(extension)

# async def run_web():
#   await run()

# async def run_client():
client.run(os.getenv("TOKEN"))

# async def main():
#   lop = asyncio.get_event_loop()
#   f1 = lop.create_task(run_web())
#   f2 = lop.create_task(run_client())
#   await asyncio.wait([f1, f2])

# asyncio.run(main())