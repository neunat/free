import requests
from bs4 import BeautifulSoup

while True:
  place = input("Tempeture in: ")
  search = f"tempature in {place} in celsius"
  url = f"https://www.google.com/search?q={search}"
  r = requests.get(url)
  soup = BeautifulSoup(r.text, "html.parser")
  Update = soup.find("div", class_="BNeawe").text
  print(f"{search} now is: {Update}")