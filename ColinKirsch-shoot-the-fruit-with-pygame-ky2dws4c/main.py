from random import randint
apple=()
from PIL import Image
myImage = Image. open("apple.png");
apple.show();
Actor=()
screen=()
apple = Actor("apple")
def draw():
  screen.clear()
  apple.draw()

def place_apple():
  apple.x=randint(10,800)
  apple.y=randint(10,600)

def on_mouse_down(pos):
  if apple.collide.point(pos):
    print("Good shot!")
    place_apple()
  else:
    print("You missed!")
    quit()
place_apple=()