import time

time.sleep(1)
print("Searching for file...")

timer = 2
Ltimer = timer

while timer > 0:
  print("  >> .", end="\r")
  time.sleep(1)
  print("  >> ..", end="\r")
  time.sleep(1)
  print("  >> ...", end="\r")
  time.sleep(1)
  print("  >>    ", end="\r")
  timer = Ltimer - 1
  Ltimer = timer

print("Disk noµ즙Ⓖꬢю󓙐K뽟")
#At least it's just an operating error.
print("x㖅ڬ弎ꂖGװ򠊪ጇ䣀|Ͷ肰𪟘񘽎ᭅـ߉/𖝪襥𓔏줔̺ː䇣𒏒⠔+FȮ񚠔Y.쪠𬏸S䝕Ρ󴔦퓜�񎞆򟊂􂜟ҙڙØ[ԁv㸉m򭯲򻊊h񁆔ͭ󝙣鵗𐡐蠤󵙈Bϗщǒ񲝅D'*ܴĳs񇽢袭󤖼⡡򂖠򛒣ǣ򦗏򚒋񠃄ܶ󝆊sڑm꜄U븘僘咺ᓧ󩙋󭸂󍣫ᆁ뇼߰󐄀񫄜򶧷񅃳셫򎹙@Хզƶ󪇩8d򇲨ʵ蝇΍낀򨒃ȟ֘L繌򐲃¸񫋻𗗦յ'ݞزU꩚􍉓򍍴hᓴ惂5񰽕〸\ܳܘጬ󞜣")

###############################################################
# Sorry, I discontinued this, but I don't think anyone really #
# cares or will notice this so I guess its fine.              #
#                                                             #
# If you really want to view the thingy again, ask Arjun; I   #
# think he put the thing over on his repl.it.                 #
###############################################################

###- CODE START -###

#import time
#import datetime
#import random
#import sys
#import cursor

#version = 'v1.2.1'
#Lversion = 'Version 1.2.1 [Release]'
#randomCrits = True    #Default, variable does nothing by itself
#doIntro = True    #If true, the intro animation is played.

#def bwaText():
  #time.sleep(0.2)
  #print('                                                                                  |')
  #time.sleep(0.2)
  #print('                                                                                  |')
  #time.sleep(0.2)
  #print('>> Welcome to the                                                                 |')
  #time.sleep(0.2)
  #print('                                                                                  |')
  #time.sleep(2)
  #print('888888b.   888       888        d8888         888    888          888      888    |')
  #time.sleep(0.2)
  #print('888  "88b  888   o   888       d88888         888    888          888      888    |')
  #time.sleep(0.2)
  #print('888  .88P  888  d8b  888      d88P888         888    888          888      888    |')
  #time.sleep(0.2)
  #print('8888888K.  888 d888b 888     d88P 888         8888888888 888  888 88888b.  888    |')
  #time.sleep(0.2)
  #print('888  "Y88b 888d88888b888    d88P  888         888    888 888  888 888 "88b 888    |')
  #time.sleep(0.2)
  #print('888    888 88888P Y88888   d88P   888         888    888 888  888 888  888 Y8P    |')
  #time.sleep(0.2)
  #print('888   d88P 8888P   Y8888  d8888888888         888    888 Y88b 888 888 d88P  "     |')
  #time.sleep(0.2)
  #print('8888888P"  888P     Y888 d88P     888         888    888  "Y88888 88888P"  888    |')
  #time.sleep(0.2)
  #print('                                                                                  |')
#def introSequence():
  
  #date = datetime.datetime.now()
  #Lhour = date.hour
  #Lminute = date.minute
  #Lday = date.day
  #Lmonth = date.month
  #Lyear = date.year

  #hour = Lhour - 7
  #spooky = False
  #varSpacing = 0
  #spaces = ''
  #space = ' '
  #hourSpace = ''

  #if Lmonth == 1:
    #Lmonth = 'January'
    #varSpacing = 4
  #if Lmonth == 2:
    #Lmonth = 'February'
    #varSpacing = 5
  #if Lmonth == 3:
    #Lmonth = 'March'
    #varSpacing = 2
  #if Lmonth == 4:
    #Lmonth = 'April'
    #varSpacing = 2
  #if Lmonth == 5:
    #Lmonth = 'May'
    #varSpacing = 0
  #if Lmonth == 6:
    #Lmonth = 'June'
    #varSpacing = 1
  #if Lmonth == 7:
    #Lmonth = 'July'
    #varSpacing = 1
  #if Lmonth == 8:
    #Lmonth = 'August'
    #varSpacing = 3
  #if Lmonth == 9:
    #Lmonth = 'September'
    #varSpacing = 6
  #if Lmonth == 10:
    #Lmonth = 'October'
    #varSpacing = 4
  #if Lmonth == 11:
    #Lmonth = 'November'
    #varSpacing = 5
  #if Lmonth == 12:
    #Lmonth = 'December'
    #varSpacing = 5
  #Takes the numerical value of the month and translates it into the name of the month;
  
  #if Lmonth == 'October':
    #if Lday == 31:
      #spooky = True

  #suffix = 'th,'
  #if Lday == 1:
    #suffix = 'st,'
  #if Lday == 2:
    #suffix = 'nd,'
  #if Lday == 3:
    #suffix = 'rd,'
  #if Lday == 21:
    #suffix = 'st,'
  #if Lday == 22:
    #suffix = 'nd,'
  #if Lday == 23:
    #suffix = 'rd,'
  #if Lday == 31:
    #suffix = 'st,'
  #Simple suffix function;

  #if Lminute <= 9:
   #Lminute = str(0)+str(Lminute)

#  if varSpacing == 0:
#    spaces = '      '
#  if varSpacing == 1:
#    spaces = '     '
#  if varSpacing == 2:
#    spaces = '    '
#  if varSpacing == 3:
#    spaces = '   '
#  if varSpacing == 4:
#    spaces = '  '
#  if varSpacing == 5:
#    spaces = ' '
#  if varSpacing == 6:
#    spaces = ''
#  
#  if Lday >= 10:
#    space = ''
#  
#  if hour >= 12:
#    hour -= 12
#
#  if hour <=12:
#    hourSpace = ' '
# 
#  bwaText()
#  #Prints the textart for BWA;
#
#  time.sleep(1)
#  print('>>  (Coded by Collin & Liam)                         #                             |')
#  time.sleep(0.7)
#  print('>> ', Lversion,       '                              #                        |') 
#  time.sleep(0.7)
#  print('                                                     #                             |') 
#  
#  time.sleep(2)
#  if spooky == True:
#   print("It's time to get spooky.                            #                              |")
#  if spooky == False:
#    print('The local time is', str(hour)+':'+str(Lminute)#+hourSpace, '                                                         |')
    #Prints the current time;

#  time.sleep(1.7)
#  if spooky == True:
#    print('                                                   #                               |')
#  if spooky == False:
#   print('The date is', Lmonth, str(Lday)+suffix , str(Lyear),# spaces, space, '                                             #  |')
#   #Prints the current date;
#  
#  time.sleep(1.5)
#  print('                                                     #                             |')
#  time.sleep(0.2)
#  print('                                                     #                             |')
#  time.sleep(0.2)
#  print('----------------------------------------------------------------------------------┘')
#  time.sleep(0.2)

#if doIntro == True:
  #introSequence()

#badNames = ['Noobmaster69', 'Epicman420', 'Diaperman360', 'Epicdude76', 'bigshnitzel']
#badname = random.choice(badNames)

#---------------------------#
#consoleOutput = True
#if consoleOutput == True:
  #print('Enter a command:')
#while consoleOutput == True:
  
  #consoleInput = input(">> ")

  #if consoleInput == "/help":
    #print('')
    #time.sleep(0.2)
    #print('>> Command List and Function:')
    #time.sleep(0.2)
    #print('')
    #time.sleep(0.2)
    #print('   /help = Returns possible commands and their function')
    #time.sleep(0.2)
    #print('   /chat = Enters the BWA Chatroom')
    #time.sleep(0.2)
    #print('   /version = Returns the current version')
    #print('')
    #print('   (More commands comming soon!)')
    #time.sleep(0.2) 
    #print('')
    #The "Help" command

  #elif consoleInput == "/chat":
    #consoleOutput = False
    #chatInput = True
  
  #elif consoleInput == "/debug":
    #print('')
    #print(version)

  #elif consoleInput == "/version":
    #print()
    #print(Lversion)
    #print()

  #elif consoleInput == "/vers":
    #print()
    #print(version)
    #print()

  #elif consoleInput == "/togglercrits":
    #if randomCrits == True:
      #time.sleep(0.2)
      #print('')
      #time.sleep(0.2)
      #print('Random crits are now disabled, phew.')
      #time.sleep(0.2)
      #print('')
      #randomCrits = False
    #elif randomCrits == False:
      
      #time.sleep(0.2)
      #print('')
      #time.sleep(0.2)
      #print('Random crits are now enabled, you monster!')
      #time.sleep(0.2)
      #print('')
      #randomCrits = True
    
  #elif consoleInput == "/stalin":
    #print('')
    #time.sleep(0.2)
    #print('Glorious leader.')
    #time.sleep(0.2)
    #print('')
  
  #elif consoleInput == "":
    #print(end="\r ")

  #else:
    #print('')
    #print('Invalid command. Enter "/help" for possible commands.')
    #print('')
#---------------------------#
#Beta command console

#---------------------------#
#if chatInput == True:
  #print('')
  #time.sleep(0.2)
  #print('Username?: ')
  #userName = input()

  #if userName == '':
    #time.sleep(0.5)
    #print('Come on, pick a username:')
    #userName = input()

    #if userName == '':
      #time.sleep(0.5)
      #print("Fine, I guess I'll have to choose.")
      #time.sleep(0.2)
      #userName = badname
  
  #time.sleep(0.2)
  #print('')
  #time.sleep(0.2)
  #print('----------------------------------------------------------------------------------|')
#while chatInput == True:
  #chatString = input(str(userName)+'>> ')
  #sys.stdout.write("\033[K")

  #if chatString == '/exit':
    #print('')
    #print('Cannot exit. Refresh the page to return to the #console')
    #print('')

  #elif chatString == '/exit':
    #chatInput = False
    #consoleInput = True
#---------------------------#

#An old message:

###########################################################
# Sorry, I don't see a point in continuing to update this.#
# To be fair, I don't think anyone ever went here.        #
###########################################################