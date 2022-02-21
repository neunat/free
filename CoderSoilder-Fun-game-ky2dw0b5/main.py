import datetime
import pygame
import sys
import requests
from bs4 import BeautifulSoup

pygame.init()

clock = pygame.time.Clock()

# Collors in RGB

RED = 255, 0, 0
GREEN = 0, 255, 0
BLUE = 0, 0, 255
WHITE = 255, 255, 255
BLACK = 0, 0, 0

# Screen settings

HEIGHT = 575
WIDTH = 625

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Tempature report in malmö")

# A function that will print something to the screen

font = pygame.font.SysFont("impact", 25)

def message(msg, color, x, y):
  screen_text = font.render(msg, True, color)
  screen.blit(screen_text, [x, y])

# Main loop

while True:

  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      sys.exit()
      pygame.quit()

  # Getting the date and the tempature

  current_date = datetime.datetime.now().date()

  place = "Skåne, Malmö"
  search = f"tempature in {place} in celsius"
  url = f"https://www.google.com/search?q={search}"
  r = requests.get(url)
  soup = BeautifulSoup(r.text, "html.parser")
  Update = soup.find("div", class_="BNeawe").text

  screen.fill(WHITE)

  # Putting the results on the screen

  message(f"The current tempature is {Update}", BLACK, 200, 150)
  message(f"The current date is {current_date}", BLACK, 200, 50)

  pygame.display.update()