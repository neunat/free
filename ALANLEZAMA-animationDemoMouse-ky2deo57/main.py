# Basic Animation in Python 3
# Part 7: Events and Event Handling

import turtle

def moveRight ( ):
  t.forward (5)

def moveLeft ( ):
  t.backward (5);

def doClick (x,y):
  t.goto (x,y)

turtle.listen ( )
turtle.onkeypress (moveRight, key='Right')
turtle.onkeypress (moveLeft, key='Left')

turtle.onscreenclick(doClick, 1)


turtle.bgcolor ('black')
turtle.register_shape ('image3.gif')


t = turtle.Turtle ( )
t.shape ('image3.gif')
t.penup ( )