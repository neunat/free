from turtle import *

def Draw_virus():
  hideturtle()

  penup()
  goto(0,200)
  pendown()
  bgcolor('black')
  color('red')
  speed(11)

  b = 0
  
  while b < 200:
    right(b)
    forward(b * 3)
    b = b + 1
    
  done()