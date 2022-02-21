import pygame
pygame.init()

size = width, height = 1920, 1080
black = 0, 0, 0
x, y = 1, 1

screen = pygame.display.set_mode(size)

ball = pygame.image.load("intro_ball.gif")

while True:
  pos = x, y
  
  screen.fill(black)
  screen.blit(ball, pos)
  pygame.display.flip()