import datetime
import requests
from bs4 import BeautifulSoup
from time import sleep
from twilio.rest import Client

account_sid = "AC7b29862c686c131d2983b09cb7b28a9f"
auth_token = "3516b737025462cce7b6c463939ee3ac"
twilio_number = "+18506053657"

# Numbers to report to

Lucas = "+46793138799"
Erik = "+46708457572"
Victor = "+46708583830"
Ella = "+46708573371"
Ester = "0793366846"
August = "+46724487362"
Elin = "+46790522425"

# Explaining that its allowed to use the twilio number

client = Client(account_sid, auth_token)

def send_time_and_temp():

    current_time = datetime.datetime.now().date()

    # Checking the weather with google

    place = "Skåne, Malmö"
    search = f"tempature in {place} in celsius"
    url = f"https://www.google.com/search?q={search}"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")
    temp = soup.find("div", class_="BNeawe").text

    message = client.messages.create(
      body=f"\n\nGood morning Lucas!\n The current tempature in Malmö is {temp} and the current date is {current_time}",
      from_=twilio_number,
      to=Lucas
    )

    message = client.messages.create(
      body=f"\n\nMerry christmas Elin!\n The current tempature in Malmö is {temp} and the current date is {current_time}",
      from_=twilio_number,
      to=Elin
    )

    message = client.messages.create(
      body=f"\n\nMerry christmas Erik!\n The current tempature in Malmö is {temp} and the current date is {current_time}",
      from_=twilio_number,
      to=Erik
    )

    message = client.messages.create(
      body=f"\n\nMerry christmas Ella!\n The current tempature in Malmö is {temp} and the current date is {current_time}",
      from_=twilio_number,
      to=Ella
    )

    message = client.messages.create(
      body=f"\n\nMerry christmas Victor!\n The current tempature in Malmö is {temp} and the current date is {current_time}",
      from_=twilio_number,
      to=Victor
    )

    print(message.body)

    sleep(43200)

    message = client.messages.create(
      body=f"\n\nGood night Lucas!\n The current tempature in Malmö is {temp}",
      from_=twilio_number,
      to=Lucas
    )

    message = client.messages.create(
      body=f"\n\nGood night Elin!\n The current tempature in Malmö is {temp}",
      from_=twilio_number,
      to=Elin
    )

    message = client.messages.create(
      body=f"\n\nGood night Erik!\n The current tempature in Malmö is {temp}",
      from_=twilio_number,
      to=Erik
    )

    message = client.messages.create(
      body=f"\n\nGood night Ella!\n The current tempature in Malmö is {temp}",
      from_=twilio_number,
      to=Ella
    )

    print(message.body)

while True:
  send_time_and_temp()