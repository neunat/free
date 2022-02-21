import discord
import random
import os
from discord.ext import commands
from keep_alive import keep_alive
from replit import db

bot = commands.Bot(command_prefix='.')

a = input("keep alive? y/n? ")

@bot.event
async def on_message(message):
  if message.author == bot.user:
    return

  msg = message.content

  if msg.startswith('pls'):
    left_over = msg.split('pls ', 1)[1]
    person = str(message.author)

    if left_over.startswith('create account'):
      if db.get(person):
        await message.reply("you already have account")
      else:
        db[person] = 500
        db[person + 'fish'] = 0
        db[person + 'rabbit'] = 0
        await message.reply("account created")

    if left_over.startswith('bal') or left_over.startswith('balance'):
      if db.get(person):
        await message.reply("you have " + str(db[person]) + " coin(s)")
      else:
        await message.reply("create account by pls create account")

    if left_over.startswith('shop'):
      item = left_over.split('shop ', 1)[1]

      if db.get(person):

        if item.startswith('fish'):
          await message.reply('you have ' +
          str(db[person + 'fish']) + ' fish')

        elif item.startswith('rab') or item.startswith('rabbit'):
          await message.reply('you have ' +
          str(db[person + 'rabbit']) + ' rabbit(s)')

        else:
          await message.reply('create account by pls create account')

    if left_over.startswith('fish'):
      if db.get(person):
        rate = random.randrange(6)
        if rate <= 2:
          db[person + 'fish'] += 1
          await message.reply("you cought 1 fish :fish:")
        else:
          await message.reply("unlucky fishing day")
      else:
        await message.reply('create account by pls create account')

    if left_over.startswith('hunt'):
      if db.get(person):
        rate = random.randrange(6)
        if rate <= 1:
          db[person + 'rabbit'] += 1
          await message.reply("you cought 1 rabbit :rabbit:")
        else:
          await message.reply("unlucky hunting day")
      else:
        await message.reply('create account by pls create account')

    if left_over.startswith('beg'):
      if db.get(person):
        win = random.randrange(2)
        if win == 1:
          amount = random.randrange(75)
          db[person] += amount
          await message.reply("here take " + str(amount) + " money")
        else:
          await message.reply("no money for you")
      else:
        await message.reply('create account by pls create account')

@bot.event
async def on_ready():
    print('We have logged in as {0.user}'.format(bot))


if (a.lower() == 'y'):
    keep_alive()

bot.run(os.getenv('TOKEN'))
