import turtle

t = turtle.Turtle()
t.shape('turtle')
t.speed(1000)
t.color('red')
t.fillcolor('red')
for i in range(8):
 t.begin_fill()
 t.circle(50)
 t.forward(10)
 t.left(45)
 t.circle(50)
 t.end_fill()
t.color('yellow')
t.penup()
t.left(90)
t.forward(10)
t.dot(20)

#CREATE A POPPY!!!!!!!