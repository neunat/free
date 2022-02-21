import pygame, sys
from pygame import display, event

pygame.init()
screen=display.set_mode((300,400))

display.set_caption("Game")

screen.fill((238,104,26))

while True:
  allevents = event.get()
  for myevent in allevents:
    if myevent.type == pygame.QUIT:
      sys.exit()

  display.flip()
