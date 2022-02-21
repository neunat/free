import datetime
from data import *
from time import *

def bwaText():
  import time
  time.sleep(delay)
  print('                                                                                  |')
  time.sleep(delay)
  print('                                                                                  |')
  time.sleep(delay)
  print('>> Welcome to the                                                                 |')
  time.sleep(delay)
  print('                                                                                  |')
  time.sleep(delay*10)
  print('888888b.   888       888        d8888         888    888          888      888    |')
  time.sleep(delay)
  print('888  "88b  888   o   888       d88888         888    888          888      888    |')
  time.sleep(delay)
  print('888  .88P  888  d8b  888      d88P888         888    888          888      888    |')
  time.sleep(delay)
  print('8888888K.  888 d888b 888     d88P 888         8888888888 888  888 88888b.  888    |')
  time.sleep(delay)
  print('888  "Y88b 888d88888b888    d88P  888         888    888 888  888 888 "88b 888    |')
  time.sleep(delay)
  print('888    888 88888P Y88888   d88P   888         888    888 888  888 888  888 Y8P    |')
  time.sleep(delay)
  print('888   d88P 8888P   Y8888  d8888888888         888    888 Y88b 888 888 d88P  "     |')
  time.sleep(delay)
  print('8888888P"  888P     Y888 d88P     888         888    888  "Y88888 88888P"  888    |')
  time.sleep(delay)
  print('                                                                                  |')
def introSequence():
  import time

  date = datetime.datetime.now()
  Lhour = date.hour
  Lminute = date.minute
  Lday = date.day
  Lmonth = date.month
  Lyear = date.year

  hour = Lhour - 7
  spooky = False
  varSpacing = 0
  spaces = ''
  space = ' '
  hourSpace = ''
  suffix = 'th,'
  #Default variables

  if Lmonth == 1:
    Lmonth = 'January'
    varSpacing = 4
  if Lmonth == 2:
    Lmonth = 'February'
    varSpacing = 5
  if Lmonth == 3:
    Lmonth = 'March'
    varSpacing = 2
  if Lmonth == 4:
    Lmonth = 'April'
    varSpacing = 2
  if Lmonth == 5:
    Lmonth = 'May'
    varSpacing = 0
  if Lmonth == 6:
    Lmonth = 'June'
    varSpacing = 1
  if Lmonth == 7:
    Lmonth = 'July'
    varSpacing = 1
  if Lmonth == 8:
    Lmonth = 'August'
    varSpacing = 3
  if Lmonth == 9:
    Lmonth = 'September'
    varSpacing = 6
  if Lmonth == 10:
    Lmonth = 'October'
    varSpacing = 4
    if Lday == 31:
      spooky = True
  if Lmonth == 11:
    Lmonth = 'November'
    varSpacing = 5
  if Lmonth == 12:
    Lmonth = 'December'
    varSpacing = 5  

  if Lday == 1:
    suffix = 'st,'
  if Lday == 2:
    suffix = 'nd,'
  if Lday == 3:
    suffix = 'rd,'
  if Lday == 21:
    suffix = 'st,'
  if Lday == 22:
    suffix = 'nd,'
  if Lday == 23:
    suffix = 'rd,'
  if Lday == 31:
    suffix = 'st,'

  if Lminute <= 9:
    Lminute = str(0)+str(Lminute)

  if varSpacing == 0:
    spaces = '      '
  if varSpacing == 1:
    spaces = '     '
  if varSpacing == 2:
    spaces = '    '
  if varSpacing == 3:
    spaces = '   '
  if varSpacing == 4:
    spaces = '  '
  if varSpacing == 5:
    spaces = ' '
  if varSpacing == 6:
    spaces = ''
      
  if Lday >= 10:
    space = ''
      
  if hour >= 13:
    hour -= 12
  if hour <=12:
    hourSpace = ' '
  
  bwaText()

  time.sleep(delay*5)
  print('>>  (Coded by Collin)                                                             |')
  time.sleep(delay*3.5)
  print('>> ', Lversion,       '                                                      |') 
  time.sleep(delay*3.5)
  print('                                                                                  |') 
  
  time.sleep(delay*10)
  if spooky == True:
   print("It's time to get spooky.                                                          |")
  else:
    print('The local time is', str(hour)+':'+str(Lminute)+hourSpace, '                                                          |')

  time.sleep(delay*15)
  if spooky == True:
    print('                                                                                  |')
  else:
   print('The date is', Lmonth, str(Lday)+suffix , str(Lyear), spaces, space, '                                               |')
  
  time.sleep(delay*7.5)
  print('                                                                                  |')
  time.sleep(delay)
  print('                                                                                  |')
  time.sleep(delay)
  print('----------------------------------------------------------------------------------┘')
  time.sleep(delay)