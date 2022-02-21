import turtle 
from random import randint

t = turtle.Turtle()
t.speed(100000000)

height= randint(0,300)

length = randint(0,301)
# randomly generate a color
# colors are on a spectrum from 0 to 255
# combination of red, green and blue can create any color
# 0,0,0  is black
# 255,255,255 is white



# the order is r,g,b

for i in range(5000):
	height= randint(0,300)
  length = randint(0,301)
  r = randint(0,255)
  g = randint(0,255)
  b = randint(0,255)
  x=randint(-100,1000)
  y=randint(-100,1000)
  t.penup()
  t.goto(x,y)
  t.fillcolor(r,g,b)
  t.begin_fill()
	t.pendown()
	for i in range(4):
		t.fd(length)
		t.rt(90)
		t.fd(height)
		t.rt(90)
	t.end_fill()
