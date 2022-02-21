import sys
import os
import pyfiglet
import random
from time import sleep
from termcolor import colored, cprint





#typewriter text speed
tspeed = 0.045
#text for introbanner
ascii_banner= pyfiglet.figlet_format("School Simulator") 
def blinky():
 color = 'red'
 effects = ['reverse','bold', ]
 effects2 = ['blink','bold']
 text = 'TURN ON FULLSCREEN FOR THE BEST EXPERIENCE' 
 blink = 1 
 blinkspeed = 0.12
 if blink == 1:
   for i in range(15):
    cprint(text, color, attrs=effects,)
    sleep(blinkspeed)
    os.system('clear')
    cprint(text, color, attrs=effects2)
    sleep(blinkspeed)
    os.system('clear')
blinky()
print(ascii_banner)
#variables:
minutes = 0
hours = "0"

for i in range(10000):

 minutes + 1
 print(minutes)




sleep(1)
oldguy = 0
deathcount = 0

#asks for name
words = "Whats your name? "
for char in words:
  sleep(tspeed)
  sys.stdout.write(char)
  sys.stdout.flush()
name = input("")



while True:

  def intro() :


    words = "Welcome to school, its 8:25 and you have to enter your first class. Go inside your first class(1), Skip the class(2)   "
    for char in words:
        sleep(tspeed)
        sys.stdout.write(char)
        sys.stdout.flush()
  intro()
  ichoice = input("")



  def hall():

    
    print_ascii('oldman.txt')
    sleep(1)


    print('''You walk the halls for multiple minutes. You see a teacher walking rapidly towards you. 
    Run(1) 
    Fight the old teacher(2) ''')
    teacha = input("" )
    if teacha == "1":
      print('''You run away and the teacher forgets about you because he’s 82 and has short term memory loss. You also come back and he gives you an A in his class.''')
      sleep(1)
      print('''He tells you to hurry up and go to your next class.''')
      a = input('''موعد الرجل العجوز ''')

      
      sleep(0.3)
      os.system('clear')
      if a == code1:
        print('''You found 1/2 secret endings. You now are dating the old man. Very nice!''')
            
        global oldguy 
        oldguy = 1


        sleep(5)
        print_ascii('math.txt')
        sleep(2)
        print("However, he wants you to go to your next class.")
        sleep(1)
        class2()
      else :
        class2()
    
    if teacha == "2":
      print("You slap the teacher in the face. He freezes from the shock and dies. Call 911(1), Run away into the river(2)")
      ttch = input("")
      if ttch == "1":
        print('''The cops come over and because you’re the one that called them they are very nice and you don’t get any penalties for it. Good job. They also give you a lifetime supply of socks.''')   
        sleep(0.8)
        print_ascii('police.txt')
        sleep(0.8)
        class2()
      if ttch == "2":
        print("You jump into the river and die because the air was too airy.")
        sleep(1)
        print("Do you want to restart ? Yes or No")
        response = input()
        if not response == "Yes":
           return 
        else:
           print("You died. Sad.")
        

  def nurse():
    print_ascii('nurse.txt')
    print('''You walk into the nurses office. It is very dark and musty. The nurse gives you a strange pill. Do you take the pill or no? Yes(1), No(2)''')

  def hall4():
    print("you decided to keep on walking down the halls.")
    sleep(1)
    global oldguy

    if oldguy == 1:
      print("You meet the old man again. He gives you a slobbery kiss.")
    else :
      print("You see a lot of people crowded in the halls.")

  def hall2():
    coin = input('''You decided to roam the halls. You see a gold coin on the floor. Pick it up(1), ignore it (2)''')
    if coin == "1":
      print('''You picked up the coin. Turns out it was rusty. You got an infection from picking it up and now you have to go to the hospital. Go to the school nurse(1), Keep on walking down the hall(2)''')
      chew = input("")
      if chew == "1":
        nurse()
      
      if chew == "2":
        hall4()

    if coin == "2":
      print('''You ignore the coin but when u come closer to it you see that its very rusty, and you mightve hurt your hand if you touched it. Good job on avoiding it. Do you want to keep roaming the halls(1), or go to the third class(2)''')
      chaw = input("")
      if chaw == "1":
        hall4()
      if chaw == "2":
        class3()

  def class3() :
    print('''you made it to the third class. Currently I haven't finished this part of the game yet so you'll have to wait for it to be finished. If you made it this far you 'beat' the game so heres a trophy. ''')
    sleep(0.5)
    print_ascii('trophy.txt')



  def class2() :

    words = "Your second class is in room 067.  Your assignment in this class is to win a game of rock paper scissors. If you win, you get a prize!"
    for char in words:
        sleep(tspeed)
        sys.stdout.write(char)
        sys.stdout.flush()
    sleep(0.7)
    words = "Get ready"
    for char in words:
      sleep(tspeed)
      sys.stdout.write(char)
      sys.stdout.flush()
    sleep(1)
    words = "Here we go."
    for char in words:
      sleep(tspeed)
      sys.stdout.write(char)
      sys.stdout.flush()
    sleep(1)
    print("3")
    sleep(0.2)
    print("2")
    sleep(0.2)
    print("1")
    print("go")
    cho1 = input("Rock, Paper, or Scissors? Type 1 for Rock, 2 for Paper, 3 for Scissors")

    def draw():
      print("it's a draw. however, someone hacked your computer so you lost. very sad.")
      sleep(1)
      print("Do you want to restart ? Yes or No")
      response = input()
      if not response == "Yes":
        return 
      else:
        print("You died. Sad.")
      

    def win():
      print_ascii('trophy.txt')
      sleep(0.5)
      cre = input("You won.Luckily, your teacher was nice and lets you leave the class. Go to Third Class (1), roam the halls (2)")
      if cre == "1":
        class3
      if cre == "2":
        hall2()

    def lose():
      print("You lost.Luckily, your teacher was nice and lets you leave the class.Go to Third Class (1), roam the halls (2)")
      hs = input("")
      if hs == "1":
        class3()
      if hs == "2":
        hall2()


    ai = random.randint(1,3)
        
    if cho1 == "1" :
      
      if ai == 1:
        draw()
      if ai == 2:
        lose()
      if ai == 3:
        win()
    if cho1 == "2" :
      
      if ai == 1:
        win()
      if ai == 2:
        draw()
      if ai == 3:
        lose()
    if cho1 == "3" :
      if ai == 1:
        lose()
      if ai == 2:
        win()
      if ai == 3:
        draw()

  def slapfriend():
    print('''Bob dies because he was weak. Now you are sentenced to juvenile jail, and have a life sentence, as well as a restraining order from every school in the state.''')
    sleep(1)
    print("Do you want to restart ? Yes or No")
    response = input()
    if not response == "Yes":
      return 
    else:
      print("You died. Sad.")

  def tfrien():
    print("You tickle your friend, Bob. He’s calls the cops on you. Slap bob(1), Run into river(2)  ")
    bob = input(" ")
    if bob == "1":
      slapfriend()
    if bob == "2":
      print("You jump into the river and die because the air was too airy.")
      sleep(1)
      print("Do you want to restart ? Yes or No")
      response = input()
      if not response == "Yes":
        return 
      else:
        print("You died. Sad.")
      
  def wfriends():
    print('''You don't get any work done since all of you played clash royale and lost 200 trophies in the process. The teacher yells at you, but you don't get detention. Go to next class(1), Cuss your teacher out(2)    ''')
    tchoice = input(" ")
    if tchoice == "1":
        class2()  
    if tchoice == "2":
        print("He gets mad and expells you permanently from school.")
        sleep(1)
        print("Do you want to restart ? Yes or No")
        response = input()
        if not response == "Yes":
         return 
        else:
         print("You died. Sad.")
        
  def byo() :
    print("You sit at a far away desk. You’re able to get all your work done, as well as your homework for the next 3 days. Go to next class(1),Tickle Bob(2)    ") 
    sleep(0.5)
    var = input("")
    if var == "1":
      class2()  
    if var == "2":
      tfrien()

  def bath():
    print('''You’re in the bathroom. One of the stalls in occupied, and a faint smell of mango smoke comes from inside. Knock on the stall(1), Sit in the bathroom(2)''')
    bchoice = input("")
    if bchoice == "2":
      print("You sit in the bathroom for 10 minutes, and the mango smoke is growing less subtle. Leave bathroom(1), Stay in the bathroom(2)")
      lbath = input("")

      if lbath == "1":
        print("You made the wise choice to leave the bathroom. As you are leaving, you see a glance of the assistance principal going towards your previous location. You breathe out with a sigh. If you stayed there for even a minute more, you might've gotten expelled. Go to class(1), Jump into river(2)")
        choicee = input("")
        if choicee == "1":
          class2()
        if choicee == "2":
          print("You jump into the river and die because the air was too airy.")
          sleep(1)
          print("Do you want to restart ? Yes or No")
          response = input()
          if not response == "Yes":
            return 
          else:
           print("You died. Sad.")
          
      if lbath == "2":
        print("You stay there even though the mango smoke is increasing in density. You hear loud and rapid footsteps walking towards the bathroom. The assistant principal walks through, and sees you as potential vaper. You get in-school suspension for 3 weeks, lessening the chances of you getting into any college.")
    if bchoice == "1":
      print("You knock on the stall and a girl carrying a vape comes out. She offers you the mango vape. Accept the vape(1), Decline the vape(2)")
      vape = input("")

      if vape == "1":
        print("vaping is bad! you lost because you got long term complications, such as lung cancer.")
        print_ascii('vape.txt')
        sleep(1)
        print("Do you want to restart ? Yes or No")
        response = input()
        if not response == "Yes":
          return 
        else:
          print("You died. Sad.")
        
      
      if vape == "2":
        print(name," gets mad and kicks you out of the bathroom")
        sleep(1)
        print("you go to the next class.   ")
        sleep(1)
        class2()
  def insideclass():
    print("You’re inside of your class. You have free seating. Sit by yourself(1),Sit with friends(2)")
    classchoice = input("")
    if classchoice == "1":
      byo()
    if classchoice == "2":
      wfriends()
  def skipclass():
    print("You decided to skip the first class. Do you want to roam the halls(1), or go to the bathroom(2)?")
    hallchoice = input("")

    if hallchoice == "1":
      hall()
      
    if hallchoice == "2":
      bath()

  if ichoice == "1":
    insideclass()  
  if ichoice == "2":
    skipclass()

###############################################################################################################################################################################################################################################################################################################################################