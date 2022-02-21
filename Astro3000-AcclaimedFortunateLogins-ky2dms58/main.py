import pyautogui


f = open("cheese", "r")



for word in f:
  pyautogui.typewrite(word)
  pyautogui.press("enter")