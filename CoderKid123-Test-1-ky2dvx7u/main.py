from turtle import *
distance = 0
register_shape("002.gif")
register_shape("003.gif")
register_shape("004.gif")
register_shape("005.gif")
register_shape("player.gif")
register_shape("power0.gif")
register_shape("power1.gif")
register_shape("power2.gif")
register_shape("power3.gif")
register_shape("power4.gif")
register_shape("racebackdrop1.gif")
register_shape("racebackdrop2.gif")
setup(1580, 575, 0, 0)
bgpic("racebackdrop1.gif")
player = Turtle()
car2 = Turtle()
car3 = Turtle()
car4 = Turtle()
car5 = Turtle()
power = Turtle()
player.penup()
car2.penup()
car3.penup()
car4.penup()
car5.penup()
power.penup()
player.ht()
car2.ht()
car3.ht()
car4.ht()
car5.ht()
power.ht()
player.shape("player.gif")
car2.shape("002.gif")
car3.shape("003.gif")
car4.shape("004.gif")
car5.shape("005.gif")
power.shape("power4.gif")
boosts = 4
player.goto(-700, 235)
car2.goto(-700, 110)
car3.goto(-700, 0)
car4.goto(-700, -110)
car5.goto(-700, -320)
player.st()
car2.st()
car3.st()
car4.st()
car5.st()
car2inrange = True
car3inrange = True
car4inrange = True
car5inrange = True
#car2: medium
#car3: fast
#car4: medium
#car5: slow
def move(x, y):
    #player.xcor() += 10
    pass
def start():
    while True:
        if car2inrange:
            car2.xcor += 7
            if car3.xcor() < 570:
                car3inrange = False
        if car4inrange:
            car4.xcor() += 8
            if car4.xcor < 570:
                car4inrange = False
        if car5inrange:
            car5.xcor += 5
            if car4.xcor() < 570:
                car4inrange = False
        car3.xcor+=7
onkey(start, " ")