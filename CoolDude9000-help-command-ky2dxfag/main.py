import os
import discord
from discord.ext import commands
from users import users as admins

class CustomHelp(commands.HelpCommand):
  def get_command_signature(self, command):
    return '%s%s %s' % (
      self.clean_prefix, 
      command.qualified_name, 
      command.signature
    )

  async def send_bot_help(self, mapping):
    embed = discord.Embed(
      title="Help:", 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
      description="Here are all the categories.",
      color=discord.Colour.random()
      )
    d = bot.cogs
    keys = d.keys()

    for key in keys:
      embed.add_field(
        name=key,
        value=f'{self.context.prefix}help {+key.lower()}', 
        inline=True
      )

    await self.context.send(embed=embed)

  async def send_cog_help(self, cog):
    cmd = cog.get_commands()
    command = ''
    for cc in cmd:
      command += f'`{cc.name}`, '

    embed = discord.Embed(
      title=cog.qualified_name, 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQm", 
      description=command,
      color=discord.Colour.random()
      )

    await self.context.send(embed=embed)
  
  async def send_command_help(self, command):
    if not isinstance(command, commands.core.Command):
      clss = bot.get_commands(command)
    else:
      clss = command

    if (clss.hidden == True) and (self.context.author.id not in admins):
      return await self.context.send('Oop. You have found the ultimate secret staff only command. Whats the password. You have 60 seconds. \n||Hint: Its 2 trillion digits long||')

    embed = discord.Embed(
      title=command,
      color=discord.Colour.random()
    )
    embed.add_field(
        name='Usage:',
        value=self.get_command_signature(command),
        inline=False

    )
    if len(clss.aliases) == 0:
      embed.add_field(
        name='Aliases:',
        value='None, like 0. Zip, Natta, None.',
        inline=False
      )
    else:
      embed.add_field(
        name='Aliases:',
        value=', '.join(clss.aliases),
        inline=False
      )

    embed.add_field(
      name='description:',
      value=clss.help,
      inline=False
    )

    embed.set_footer(text="\"< >\" stands for a required argument and \"[ ]\" stands for a optional argument")

    await self.context.send(embed=embed)
    

       

help_attr={
   'name': "help",
   'cooldown': commands.Cooldown(1, 2, commands.BucketType.user)
  }

help_cmd = CustomHelp(
  command_attrs=help_attr
)

bot = commands.Bot(
  command_prefix=['t/', 'test/', 'cap/'], 
  strip_after_prefix=True, 
  case_insensitive=True
)

bot._BotBase__cogs = commands.core._CaseInsensitiveDict()
bot.help_command=help_cmd

@bot.event
async def on_ready():
  print('ready')

hi = [
  'cog', 
  'cog2', 
  'cog3', 
  'haha', 
  'cog5',
  'test'
]

for ext in hi:
  bot.load_extension(ext)

bot.run(
  os.environ['TOKEN']
)