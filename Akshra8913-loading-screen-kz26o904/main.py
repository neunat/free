import pygame,sys,time
from pygame import display, event, draw, font, image

pygame.init()
screen = display.set_mode((550, 550))
display.set_caption("My Game")
yellow = (255, 255, 0)
rectX = 0
rectY = 275

myfont = font.Font("freesansbold.ttf", 32)
myrender = myfont.render("Loading...", True, yellow)
screen.blit(myrender, (300, 330))

myimage = image.load("pygamelogo.png")
screen.blit(myimage, (315, 170))

for i in range(1,15):
 rectX = rectX + 50
 rectangle = (rectX, rectY, 30, 30)
 draw.rect(screen, yellow, rectangle)
 display.flip()
 time.sleep(1)

while True:
  allevents = event.get()
  for myevent in allevents:
    if myevent.type == pygame.QUIT:
      sys.exit()

  display.flip()