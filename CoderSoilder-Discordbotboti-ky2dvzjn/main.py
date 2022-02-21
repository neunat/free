import discord
import random
import datetime
import requests
from bs4 import BeautifulSoup

TOKEN = "OTIyNTI1NTc2ODIzMjAxODkz.YcCu5Q.y0gfVBxgmbaK4w7yKv09OOWBcFE"

client = discord.Client()

greetings = ["hello", "whats up", "sup", "yo"]

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
  
  if (user_message.lower() in greetings):
    await message.channel.send(f"Hello there {username}!")
    return
  elif user_message.lower() == "bye":
    await message.channel.send(f"Good bye {username}!")
    return
  elif user_message.lower() == "!random":
    random_num = random.randint(0, 10000)
    await message.channel.send(f"Your random number was: {random_num}")
    return
  elif user_message.lower() == "!info":
    DATE = datetime.datetime.now().date()
    await message.channel.send(f"This server was created by Lucasostost#3236 in 2021-12-20 and the current date is {DATE}")
    return
  elif user_message.lower() == "!whats the date?":
    DATE = datetime.datetime.now().date()
    await message.channel.send(f"The current date is: {DATE}")
    return
  elif user_message.lower() == "!how are you?":
    await message.channel.send("Im good thanks for asking!")
    return
  elif user_message.lower() == "deez nuts":
    await message.channel.send("So mature")
    return
  elif user_message.lower() == "!fuck off":
    await message.channel.send(f"Why are you talking to yourself {username}?")
    return
  elif user_message.lower() == "!commands":
    await message.channel.send("The commands are\n\n"
                              + "!random\n"
                              + "!info\n"
                              + "!how are you?\n"
                              + "!fuck off\n"
                              + "!whats the date?\n"
                              + "!minecraft ip\n"
                              + "!whats the best song of all time?\n"
                              + "!commands")
    return
  elif user_message.lower() == "!minecraft ip":
    await message.channel.send("There is none yet sorry!")
    return
  elif user_message.lower() == "!whats the best song?":
    url = "https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
    await message.channel.send(f"The best song of all time is: {url}")
    return
  elif user_message.lower() == "!lucasostost":
    await message.channel.send("Password?")
    return
  elif user_message.lower() == "!logic":
    await message.channel.send("sup")
    return
  elif user_message.lower() == "!whats the temp?":

    place = "Skåne, Södra, Malmö"
    search = f"tempature in {place} in celsius"
    url = f"https://www.google.com/search?q={search}"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")
    Update = soup.find("div", class_="BNeawe").text

    await message.channel.send(f"The current tempature in south malmö is {Update}")
    return
  elif user_message.lower() == "!what date was this server created?":
    await message.channel.send("The date i was creted was 2021 12 20 by Lucasostost#3236")
    await message.channel.send("The date the server was created was 2021 12 20 by Lucasostost#3236")
    return

client.run(TOKEN)