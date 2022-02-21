# -*- coding: utf-8 -*-
"""
Created on Wed Jul 28 11:02:16 2021

filename: notepad.py

fully copyrighted by Rudra

@author: Rudra
"""

#imports
from tkinter import *

#App

App = Tk()
App.geometry("500x400")
App.title("my pad not yours >:)")

#NOT WORKING BUTTONS

def save_file():
    print("")

b1 = Button(App, text = "save file", command = save_file)
b1.place(x=10,y=10)

def clear_text():
    print("")

b2 = Button(App, text = "clear text", command = clear_text)
b2.place(x=70,y=10)

def open_file():
    print("")

b3 = Button(App, text = "open file", command = open_file)
b3.place(x=170,y=10)

#textbox

entry = Text(App, height = 33, width = 58)
entry.place(x = 10, y = 50)



#mainloop

App.mainloop()
