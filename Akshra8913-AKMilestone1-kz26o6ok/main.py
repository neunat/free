import pygame, sys
from pygame import display, event, image

pygame.init()
screen = display.set_mode((800,550))
display.set_caption("Milestone")

screen.fill((240,99,81))

myimage = image.load("lido.png")
screen.blit(myimage, (350,350))

while True:
  allevents = event.get();
  for myevent in allevents:
    if myevent.type == pygame.QUIT:
      sys.exit()

  display.flip()      