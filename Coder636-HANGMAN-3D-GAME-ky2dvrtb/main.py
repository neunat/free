from tkinter import *
from random import choice
from PIL import Image, ImageTk

fact = 60
score = count= 0
words = ("HANGMAN", "MYSTERY", "CAPTAIN", "CHAMBER", "ELEMENT", "FAILURE", "JOURNEY", "SUPREME", "SOMEONE", "UNUSUAL",
         "UNKNOWN", "TROUBLE", "SOMEHOW", "QUARTER", "PHOENIX", "PIONEER", "ORGANIC", "OUTDOOR", "NOTHING", "MISSION",
         "MESAURE", "LOGICAL", "LIMITED", "KINGDOM", "ILLEGAL", "FORWARD")
combinations = ([0,3,5,6], [1,2,5,6], [0,2,4,6], [2,3,4,5], [0,1,2,6], [0,1,2,5])

# TKINTER WINDOW
win =Tk()
WIDTH, HEIGHT = (win.winfo_screenwidth(),win.winfo_screenheight( ))
but_place0 = WIDTH//12
but_place1 = HEIGHT//1.4
win.config(highlightthickness=0)
win.title("Hangman 1.0")
win.resizable(0,0)
win.geometry(f"{WIDTH}x{HEIGHT-10}")


def check(x):
    global orginal, buttons, score, count, answer
    if  buttons[x]["text"] == orginal[x]:
        if orginal == answer:
            buttons[x].unbind_all()
            cheer.config(text="YOU WON")
            create_win("assets/man.png", "THANKS.\nYou saved my life from these trolls.\nBut why can't you do it faster?\nBe responsible😏", (170, 270),0)
        else:
            cheer.config(text=choice(["EXCELLENT", "YOU'RE A GENIUS", "VERY GOOD", "I KNEW, YOU COULD DO THAT"]))
            score +=10
            scoreboard.config(text=f"SCORE: {score}")
            with open("assets/score.txt","r+") as f:
                highscore=int(f.read())
                if score > highscore:
                    f.seek(0)
                    f.write(str( score ))
                    highscoreboard.config(text=f"HIGH SCORE: {score}")
    elif count<3:
        score -=5
        scoreboard.config(text=f"SCORE: {score}")
        cheer.config(text=choice(["LOOSER!!!", "SO POOR", "HOW CAN ANYONE BE SO BAD?", "DON'T YOU KNOW ENGLISH", "WORST"]))
        count+=1
        canvas.itemconfig(image,image=images[count])
    elif count == 3:
        count+=1
        canvas.itemconfig(image,image=images[count])
        count=0
        org = orginal[0]+orginal[1]+orginal[2]+orginal[3]+orginal[4]+orginal[5]+orginal[6]
        score=0
        scoreboard.config(text=f"SCORE: {score}")
        create_win("assets/troll.png",f"LOOSER!!!\nLook what you have done.\nYou killed a man.\nPlay again and save him.\nThe word was {org}", (150, 170))


def ok(root, change):
    global count, org, seq, combinations
    cheer.config(text="")
    if change:
        count=0
        canvas.itemconfig(image,image=images[count])
    create_qns()
    root.destroy()


def create_win(file, txt, dimensions, change=1):
    root = Toplevel(); root.config(bg="white"); root.resizable(0,0); root.title("Hangman 1.0")
    # Widgets
    file = img_resize(file, dimensions[0], dimensions[1])
    Label(root,image=file, bd=0).grid(row=0,column=0, rowspan=2)  
    Label(root, text=txt, fg='red',bg='white', font=('ink free',20,'bold')).grid(row=0, column=1)
    Button(root,bd=2, text="ok",font=10, bg='blue',padx=10, command=lambda : ok(root, change)).grid(row=1,column=1)
    root.mainloop()


# Function for buttons
def click(b):
    global buttons,canvas, button
    button = b
    for x in range(7): buttons[x].config(bg="#855e42")
    else: b.config(bg="light blue")


def press(e):
    global button, buttons, answer, canvas 
    if e.char.isalpha():
        button.config(text=e.char.upper() )
        answer = [ buttons[x]["text"] for x in range(7) ]
        check(buttons.index(button))

def create_qns():
    global buttons,words,combinations, orginal
    orginal = list(choice(words)); combination = choice(combinations)
    for x in range(7):
        if x in combination: 
            buttons[x].config(text="_")
            buttons[x].config(state=NORMAL)
            
        else: 
            buttons[x].config(text= orginal[x])
            buttons[x].config(state=DISABLED)
            

def img_resize(file, WIDTH, HEIGHT):
    img = Image.open(file,)
    img = img.resize((WIDTH, HEIGHT), Image.ANTIALIAS)
    img = ImageTk.PhotoImage(img)
    return img


# Background image
canvas =  Canvas(win)
canvas.pack(fill=BOTH, expand=True)
images =[ img_resize(f"assets/hangman{i}.png", WIDTH, HEIGHT) for i in range(5) ]
image = canvas.create_image(0,0, image=images[0], anchor='nw')
# Creating buttons
bsize = (6,3)
b0 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b0), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b1 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b1), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b2 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b2), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b3 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b3), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b4 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b4), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b5 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b5), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b6 = Button(canvas, text=" ", padx=bsize[0],command=lambda: click(b6), state=DISABLED, pady=bsize[0],bg="#855e42",fg="black", bd=0, font=("INK FREE",20,"bold"), disabledforeground="black")
b0.place(x=but_place0+fact*1,y=but_place1)
b1.place(x=but_place0+fact*2,y=but_place1)
b2.place(x=but_place0+fact*3,y=but_place1)
b3.place(x=but_place0+fact*4,y=but_place1)
b4.place(x=but_place0+fact*5,y=but_place1)
b5.place(x=but_place0+fact*6,y=but_place1)
b6.place(x=but_place0+fact*7,y=but_place1)

# Other Widgets
with open("assets/score.txt","r+") as f:
    highscore = int(f.read())
cheer = Label(canvas, bg="white", fg="red", font=("INK FREE", 20, 'bold'))
scoreboard = Label(canvas, bg="white", fg="green", font=("comic sans ms", 15, 'bold'), text="SCORE: 0", anchor='nw')
highscoreboard = Label(canvas, bg="white", fg="green", font=("comic sans ms", 15, 'bold'), text=f"HIGH SCORE: {highscore}", anchor='nw')
cheer.grid(row=0, column=0, sticky='nw')
scoreboard.grid(row=1, column=0, sticky='nw')
highscoreboard.grid(row=2, column=0, sticky='nw')
# Button list
buttons = [ eval(f"b{i}") for i in range(7) ]

# Starting
create_qns()
win.bind("<Key>", press)
win.mainloop()