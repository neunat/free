import turtle.turtle()

import time #this allows for use of time.sleep()
import os #this allows the function on line 3 to work
def clearconsole(): #when clearconsole() is called, the "screen" is cleared.  
    command = 'clear'
    if os.name in ('nt', 'dos'):  # If Machine is running on Windows, use cls
        command = 'cls'
    os.system(command)
print ('Hello and welcome to Milstead\'s Python MadLib!')

name=input('What is your name?')

time.sleep(2)

print("Ok",name,", let us do this.First, I am going to ask you for a few words. All you have to do is follow my instructions and poof, a story will appear.")
time.sleep(4)
clearconsole()

print('Write an animal')
noun1=input()

print('Write another animal')
noun2=input()

print ('Once upon a time there was a' ,noun1,'who met a',noun2,'.') 