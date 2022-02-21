import pygame, sys, random, time
from twilio.rest import Client
pygame.init()

# Sending difrent report messages

account_sid = "AC7b29862c686c131d2983b09cb7b28a9f"
auth_token = "3516b737025462cce7b6c463939ee3ac"

twilio_number = "+18506053657"
Dev_1 = "+46793138799"

client = Client(account_sid, auth_token)

def send_message(to, msg):
  message = client.messages.create(
    body=msg,
    from_=twilio_number,
    to_=to
  )

  print(message)

def start():
  send_message(Dev_1, "Test")

  Server_up = True

# Colors

WHITE = 255, 255, 255
RED = 255, 0, 0
GREEN = 0, 255, 0
BLUE = 0, 0, 255
BLACK = 0, 0, 0

# Screen

WIDTH = 255
HEIGHT = 255

screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.RESIZABLE)
pygame.display.set_caption("Stadtion making")

# Main loop

while True:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      sys.exit()
      pygame.quit()

  screen.fill(WHITE)

  pygame.display.update()