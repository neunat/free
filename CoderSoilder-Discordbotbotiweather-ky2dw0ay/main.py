# A weather discord bot
import discord
import random
import time
import datetime
import requests
from bs4 import BeautifulSoup


TOKEN = "OTIyODcyOTAzMDA2MDQ4MzE2.YcHyXg.OGN1ExsdalwEyHGstPmwDIG_Vw8"

client = discord.Client()

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))

@client.event
async def on_message(message):
  username = str(message.author).split("#")[0]
  user_message = str(message.content)
  channel = str(message.channel.name)
  print(f"({channel}) {username}: {user_message}")

  if message.author == client.user:
    return
  
  if user_message.lower() == "!random":
    random_num = random.randint(0, 10000000000000000000000000000000000000)
    await message.channel.send(f"Your random number was: {random_num}")
    return
  elif user_message.lower() == "!commands":
    await message.channel.send("Commands\n\n !random\n !commands\n !whats the date\n !when did you get born\n !whats the tempature")
    return
  elif user_message.lower() == "!whats the date":
    DATE = datetime.datetime.now().date()
    await message.channel.send(f"The current date is: {DATE}")
    return
  elif user_message.lower() == "!when did you get born":
    await message.channel.send("I was bornd the 21 of 12-2021 and thats 1 day after my big brother named Boti")
    return
  elif user_message.lower() == "!whats the tempature":
    place = "Skåne, Södra, Malmö"
    search = f"tempature in {place} in celsius"
    url = f"https://www.google.com/search?q={search}"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")
    Update = soup.find("div", class_="BNeawe").text

    await message.channel.send(f"The current tempature outside is {Update}")
    return
  elif user_message.lower() == "!whats the meaning of life?":
    await message.channel.send("No one knows!")
    return

client.run(TOKEN)