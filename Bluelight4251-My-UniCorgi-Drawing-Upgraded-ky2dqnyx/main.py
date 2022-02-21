#******************************************************************************************#

# Inputs

haircolor = input('What hair color do you want?\n')
textcolor = input('What text color do you want?\n')
eyecolor = input('What eye color do you want?\n')
unicorginame = input('What\'s your UniCorgi\'s name?\n')
unicorgigender = input('Is it a boy or girl?\n')
nameinput = input('What\'s your name?\n')
turtlespeed = int(input('How fast do you want the turtles to be? 0-10:\n'))
boldness1 = int(input('How bold do you want the 1st text to be?'))
boldness2 = int(input('How bold do you want the 2nd text to be?'))

# Importing
import turtle

# Creating the first turtle
a = turtle.Turtle()
a.shape("airplane")
a.pendown()
a.speed(speed)

# Code for turtle 'a'
a.fillcolor("yellow")
a.begin_fill()
for i in range(200):
  a.forward(1)
  a.left(1)
a.forward(90)
a.left(120)
a.forward(125)
a.end_fill()
a.left(45)
a.forward(20)
a.penup()
a.left(125)
a.forward(120)
a.right(180)
a.pendown()
a.fillcolor("hot pink")
a.begin_fill()
for i in range(50):
  a.forward(1)
  a.right(3)
a.right(25)
a.forward(25)
a.end_fill()
a.hideturtle()

# Creating the second turtle
b = turtle.Turtle()
b.shape("airplane")
b.penup()
b.speed(speed)

# Code for turtle 'b'
b.fillcolor("yellow")
b.begin_fill()
for i in range(100):
  b.forward(1)
  b.left(1)
b.pendown()
b.right(90)
b.forward(70)
b.left(150)
b.forward(120)
b.left(90)
b.forward(5)
b.end_fill()
b.hideturtle()

# Creating the third turtle
c = turtle.Turtle()
c.shape("airplane")
c.penup()
c.speed(speed)

# Code for turtle 'c'
for i in range(100):
  c.forward(1)
  c.left(1)
c.right(90)
c.forward(70)
c.left(150)
c.forward(120)
c.left(90)
c.forward(5)
c.left(180)
c.pendown()
c.fillcolor(haircolor)
c.begin_fill()
for i in range(50):
  c.forward(1)
  c.left(3)
c.forward(50)
c.left(100)
c.forward(10)
c.end_fill()
c.hideturtle()

# Creating the fourth turtle
d = turtle.Turtle()
d.shape("airplane")
d.penup()
d.speed(speed)

# Code for turtle 'd'
for i in range(100):
  d.forward(1)
  d.left(1)
d.right(90)
d.forward(70)
d.left(150)
d.forward(120)
d.left(90)
d.forward(5)
d.left(180)
d.fillcolor("gold")
d.begin_fill()
for i in range(25):
  d.forward(1)
  d.left(3)
d.pendown()
d.forward(90)
d.left(145)
d.forward(75)
d.end_fill()
d.hideturtle()

# Creating the fifth turtle
e = turtle.Turtle()
e.shape("airplane")
e.penup()
e.speed(speed)

# Code for turtle 'e'
for i in range(100):
  e.forward(1)
  e.left(1)
e.right(90)
e.forward(70)
e.left(150)
e.forward(120)
e.left(90)
e.forward(50)
e.fillcolor("white")
e.begin_fill()
e.circle(25)
e.end_fill()
e.fillcolor(eyecolor)
e.begin_fill()
e.circle(10)
e.end_fill()
e.hideturtle()

# Creating the sixth turtle
f = turtle.Turtle()
f.shape("airplane")
f.penup()
f.speed(speed)

# Code for turtle 'f'
f.right(180)
f.forward(10)
f.right(40)
f.forward(70)
f.right(110)
f.pendown()
for i in range(35):
  f.forward(1)
  f.left(1)
f.hideturtle()

# Creating the seventh turtle
g = turtle.Turtle()
g.shape("airplane")
g.penup()
g.speed(speed)

# Code for turtle 'g'
g.right(90)
g.pendown()
g.forward(150)
g.right(90)
for i in range(45):
  g.forward(1)
  g.left(4)
g.forward(35)
g.hideturtle()

# Creating the eighth turtle
h = turtle.Turtle()
h.shape("airplane")
h.penup()
h.speed(speed)

# Code for turtle 'h'
h.fillcolor("yellow")
h.begin_fill()
for i in range(65):
  h.forward(1)
  h.left(1)
h.pendown()
h.right(110)
h.forward(225)
for i in range(65):
  h.forward(1)
  h.right(2)
h.forward(110)
h.right(13)
h.forward(50)
h.end_fill()
h.right(90)
h.forward(110)
h.hideturtle()

# Creating the ninth turtle
j = turtle.Turtle()
j.shape("airplane")
j.penup()
j.speed(speed)

# Code for turtle 'j'
for i in range(65): # <--- The ninth turtle had to be 'j' instead of 'i' because there's an i here
  j.forward(1)
  j.left(1)
j.pendown()
j.right(110)
j.forward(225)
for i in range(65):
  j.forward(1)
  j.right(2)
j.forward(110)
j.right(90)
for i in range(65):
  j.forward(1)
  j.right(2)
j.right(180)
for i in range(100):
  j.forward(1)
  j.right(1)
j.hideturtle()

# Creating the tenth turtle
k = turtle.Turtle()
k.shape("airplane")
k.pendown()
k.speed(speed)

# Code for turtle 'k'
for i in range(65):
  k.forward(1)
  k.left(1)
k.right(110)
k.forward(240)
k.fillcolor(haircolor)
k.begin_fill()
k.forward(150)
k.right(90)
for i in range(80):
  k.forward(1)
  k.right(1)
k.right(25)
k.forward(100)
k.end_fill()
k.hideturtle()

# Creating the last turtle
writer = turtle.Turtle()
writer.shape("airplane")
writer.penup()
writer.speed(speed)

def wr():
  # Code for the last turtle 'writer'
  writer.right(90)
  writer.forward(300)
  writer.color(textcolor)
  writer.write("{} the UniCorgi".format(unicorginame), align = 'center', font = ('Arial','{}'.format(boldness1),'bold'))
  writer.forward(50)
  writer.write("by {}".format(nameinput),align = 'center', font = ('Arial','{}'.format(boldness2),'bold'))
  writer.hideturtle()
wr()
#******************************************************************************************#