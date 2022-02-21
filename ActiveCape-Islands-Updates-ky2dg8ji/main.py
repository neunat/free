import time
import os
def clr():
  os.system('clear')
while True:
  clr()
  print('Islands Updates: V1.0.0(initial release)\n\n[1] Trade Info\n[2] Updates\n[3] To-Do')
  option = input('')
  if option == '2':
    clr()
    print('Added:\nAdded Mailbox.\nAdded new totems. \nPumpkin Totem\nWatermelon Totem\nRadish Totem\nSlate Totemn\nMarble Totem\nAdded Info Booklets.\nAdded a countdown for the release of the new game that Easy.GG was working on for 2 months(Bedwars).\n\nModifications\nChanged textures for the coal block and stone\nPalm Trees can now grow on sand.\nReverted Plank textures.\n\nBug Fixes\nFixed bug causing sickles to not work on mobile\nFixed disappearance of the \"Go Home\" button.\nFixed bug that caused only yellow fireflies to spawn.')
    input('[ENTER] to go back')
  elif option == '1':
    clr()
    print('Log In:\n')
    sign_in_username = input('Username: ')
    if sign_in_username == '29huic':
      sign_in_password = input('Password: ')
      if sign_in_password == 'WFL201024':
        print('Loading...')
        clr()
        print('Current Trades: None')
        input('[ENTER] to exit.')
  elif option == '3':
    clr()
    print('Log In\n')
    sign_in_username2 = input('Username: ')
    if sign_in_username2 == '29huic':
      sign_in_password2 = input('Password: ')
      if sign_in_password2 == 'WFL201024':
        clr()
        print('To-Do:\n\nGet Tier 3 Workbench with Athena:\n  -Get Athena to get on the zoom/call\n  -Get iron from Athena\'s iron totem\n  -Smelt the iron\n  -Make the bricks\n  -Go to Hugo\'s island to chop down some maples\n  -Craft the workbench! :)')
        input('[ENTER] to exit')