import requests
from bs4 import BeautifulSoup
import time

# Taking the tempature via google and waiting 24 hours

while True:
  place = "Skåne, Malmö"
  search = f"tempature in {place} in celsius"
  url = f"https://www.google.com/search?q={search}"
  r = requests.get(url)
  soup = BeautifulSoup(r.text, "html.parser")
  Update = soup.find("div", class_="BNeawe").text
  print(f"{search} now is: {Update}")
  time.sleep(86800)