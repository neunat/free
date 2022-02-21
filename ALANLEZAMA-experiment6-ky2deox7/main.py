import time

import turtle
d = turtle.Turtle ( )
d.shape ('turtle')

d.hideturtle ( )
d.speed (0)
d.pensize (5)
x = 150
while True:
  d.clear()
  d.penup()
  d.goto(x,-150)
  d.pendown()
  d.circle(10)
  x = x - 10
  time.sleep (0.25)
  