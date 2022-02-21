import webbrowser
import time

timer = 0

while timer < 3:
  time.sleep(5)
  webbrowser.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  print("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  timer = timer + 1