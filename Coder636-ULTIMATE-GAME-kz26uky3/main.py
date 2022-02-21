import turtle
from tkinter import*
from random import shuffle


# Variables
WIDTH, HEIGHT = 220,220
NUMBERS = ("assets/1.gif","assets/2.gif","assets/3.gif","assets/4.gif",
           "assets/5.gif","assets/6.gif","assets/7.gif","assets/8.gif",
           "assets/9.gif","assets/10.gif","assets/11.gif","assets/12.gif",
           "assets/13.gif","assets/14.gif","assets/15.gif",)

COORDINATES = [[(-75,74),  (-25,74),  (25,74),  (75,74) ],
               [(-75,24),  (-25,24),  (25,24),  (75,24) ],
               [(-75,-26), (-25,-26), (25,-26), (75,-26)],
               [(-75,-76), (-25,-76), (25,-76), (75,-76)]]
C = COORDINATES[0]+COORDINATES[1]+COORDINATES[2]+COORDINATES[3]
blank = (75,-76)

# Setting window
win = Tk()
win.overrideredirect(True)
win.config(bg="black", highlightthickness=0)
win.title("PUZZLE")
win.geometry(f"{WIDTH}x{HEIGHT+32}+100+10")
# win.iconbitmap("assets/6.ico")
  
# Widgets
board= Canvas(win, width=WIDTH, height=HEIGHT, bg="black", highlightthickness=0,)
ribbon = Frame(win, width=WIDTH, height=35, bg="#caa472", highlightthickness=3,highlightbackground="#BA8C63")
# score = Label(ribbon, text="Score=0",bg="#caa472", padx=30)
solve_b = Button(ribbon, text="S", command=lambda: solve(num_turtle2), bd=0, bg="#BA8C63", font="bold",)
newgame_b = Button(ribbon,command=lambda: newgame(),text="♻", bd=0, bg="#BA8C63", font="bold")
exit_b = Button(ribbon,command=win.quit,text="x", bd=0, bg="brown",fg='white', font="bold",)

board.grid(row=1, column=0)
ribbon.grid(row=0, column=0)
# score.grid(row=0, column=0)
solve_b.place(relx=0, rely=0)
newgame_b.place(relx=0.2, rely=0)
exit_b.place(relx=0.8, rely=0)

# Turtle screen
screen = turtle.TurtleScreen(board)
screen.bgcolor("black")


def setup():
    global num_turtle, num_turtle2
    num_turtle = list()
    screen.bgpic("assets/board.png")   
    for num in NUMBERS: 
        screen.register_shape(num)
        num_turtle.append(turtle.RawTurtle(screen,num))
        num_turtle[-1].penup()
    num_turtle2 = num_turtle.copy()
    return num_turtle, num_turtle2


def newgame():
    global blank
    setup()
    shuffle(num_turtle)
    solve(num_turtle)
    blank = C[-1]
    

def get_pos(event):
        xwin = win.winfo_x()
        ywin = win.winfo_y()
        startx = event.x_root
        starty = event.y_root
        ywin = ywin - starty
        xwin = xwin - startx

        def move_window(event):
            win.geometry('+{0}+{1}'.format(event.x_root + xwin, event.y_root + ywin))
        startx = event.x_root
        starty = event.y_root
        ribbon.bind('<B1-Motion>', move_window) 

ribbon.bind('<Button-1>', get_pos)


def iswin():
    for i in range(15):
        if (num_turtle2[i].xcor(),num_turtle2[i].ycor()) != C[i]: return
    screen.clear()
    screen.bgpic("assets/youwon.png")
  
  
def possible_move(pos):
    for row in range(4):
        if blank in COORDINATES[row]:
            ind = COORDINATES[row].index(blank)
            if   row!=0 and COORDINATES[row-1][ind] == pos: return True
            elif row!=3 and COORDINATES[row+1][ind] == pos: return True
            
            if   ind!=0 and COORDINATES[row][ind-1] == pos: return True
            elif ind!=3 and COORDINATES[row][ind+1] == pos: return True
    return False
        
          
def solve(List):
    global blank
    for i in range(15):
        List[i].goto(C[i][0],C[i][1])
    bind_turtle()
    blank = C[-1]


def move(tur):
    global blank
    x,y = tur.xcor(),tur.ycor()
    if possible_move((x,y)):   
        tur.goto(blank[0], blank[1])
        iswin()
        blank=(x,y)
 
    
# Binding all buttons
def bind_turtle():
    num_turtle[0].onclick(lambda x,y: move(num_turtle[0]))
    num_turtle[1].onclick(lambda x,y: move(num_turtle[1]))
    num_turtle[2].onclick(lambda x,y: move(num_turtle[2]))
    num_turtle[3].onclick(lambda x,y: move(num_turtle[3]))
    num_turtle[4].onclick(lambda x,y: move(num_turtle[4]))
    num_turtle[5].onclick(lambda x,y: move(num_turtle[5]))
    num_turtle[6].onclick(lambda x,y: move(num_turtle[6]))
    num_turtle[7].onclick(lambda x,y: move(num_turtle[7]))
    num_turtle[8].onclick(lambda x,y: move(num_turtle[8]))
    num_turtle[9].onclick(lambda x,y: move(num_turtle[9]))
    num_turtle[10].onclick(lambda x,y: move(num_turtle[10]))
    num_turtle[11].onclick(lambda x,y: move(num_turtle[11]))
    num_turtle[12].onclick(lambda x,y: move(num_turtle[12]))
    num_turtle[13].onclick(lambda x,y: move(num_turtle[13]))
    num_turtle[14].onclick(lambda x,y: move(num_turtle[14]))
 
    

newgame()
win.mainloop()