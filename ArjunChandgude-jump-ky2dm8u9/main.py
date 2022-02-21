#Imports
import turtle

#Vars

win = turtle.Screen()
win.title("Jumper")
win.bgcolor("cyan")
win.setup(width=500, height=500)
win.tracer(0)

#Character
Arjun = turtle.Turtle()
Arjun.speed(0)
Arjun.shape("square")
Arjun.color("red")
Arjun.shapesize(stretch_wid=4, stretch_len=3)
Arjun.penup()
Arjun.goto(-250, 0)

#Functions
def Arjun_up():
  y = Arjun.ycor()
  y += 8
  Arjun.sety(y)

#Blocks
if Arjun.ycor() == 8:
  Arjun.ycor -= 8
  Arjun.sety(Arjun.ycor)

#Keybindings
win.listen()
win.onkeypress(Arjun_up, "w")

