import os
import readchar
import time

lines = [[]]
cursorx = 0
cursory = 0
allText = ""
mode = "edit"

topText = """CTR+D = run, CTR+A = install package, CTR+E = save, CTR+F = load, CTR+B = new"""
runText = """Your code is now running. Press CTR+C to stop your program."""
packageText = """Enter the packages you want to install below, seperated by spaces. CTR+C to cancel."""
saveText = """Enter the filename that you want to save to. CTR+C to cancel."""
openText = """Enter the filename of the file you want to open. CTR+C to cancel."""

def moveCursor(y, x):
  print("\033[%d;%dH" % (y, x))


def getTextFromLines(a,cursorTrue):
  printList = a[:]
  currentList = printList[cursory][:]
  if cursorTrue == True:
    currentList.insert(cursorx,"│")
  printList[cursory] = currentList[:]
  linesCombined = []
  for line in printList:
    linesCombined.append("".join(line))
  allText = "\n".join(linesCombined)
  return allText

def refresh():
  global allText,mode
  os.system("clear")
  if mode == "edit":
    rows, columns = os.popen('stty size', 'r').read().split()
    allText = getTextFromLines(lines,1)
    print(topText)
    print("="*(int(columns)))
    print(allText)
    moveCursor(len(lines) + 4, 0)

def run(code):
  global mode
  os.system("clear")
  rows, columns = os.popen('stty size', 'r').read().split()
  print(runText)
  print("="*int(columns))
  file = open("temp.py","w")
  file.write(code)
  file.close()
  try:
    os.system("python3 temp.py")
    os.system("rm temp.py")
  except KeyboardInterrupt:
    os.system("rm temp.py")
  input("Code execution finished. Press [ENTER] to return to edit mode.")

def installPackages():
  os.system("clear")
  rows, columns = os.popen('stty size', 'r').read().split()
  print(packageText)
  print("="*int(columns))
  try:
    packages = input(">pip install ")
    os.system("pip install "+packages)
  except KeyboardInterrupt:
    print("")
  input("Package installation finished. Press [ENTER] to return to edit mode.")

def save():
  os.system("clear")
  rows, columns = os.popen('stty size', 'r').read().split()
  print(saveText)
  print("="*int(columns))
  try:
    filename = input(">")
    code = getTextFromLines(lines,0)
    file = open(filename,"w")
    file.write(code)
    file.close()
  except KeyboardInterrupt:
    pass

def openFile():
  global lines, cursorx, cusrory
  os.system("clear")
  rows, columns = os.popen('stty size', 'r').read().split()
  print(openText)
  print("="*int(columns))
  try:
    filename = input(">")
    lines = []
    file = open(filename,"r")
    fileLines = file.readlines()
    for i in range(0, len(fileLines)):
      lines.append([])
      for j in range(len(fileLines[i])):
        lines[i].append(fileLines[i][j])
    for i in range(0,len(lines)):
      for j in range(len(lines[i])-1,-1,-1):
        if lines[i][j] == "\n":
          del lines[i][j]
    cusrory = len(lines)-1
    cursorx = len(lines[cursory])
  except KeyboardInterrupt:
    pass
  except OSError:
    input("File not found. Press [ENTER] then CTR+F to try again.")

refresh()

while True:
  if mode == "edit":
    char = readchar.readkey()
    allowedChars = "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? `1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./\t"
    if char == readchar.key.BACKSPACE:
      if not len(lines[cursory]) == 0:
        if lines[cursory] == []:
          del lines[cursory]
          cursory = cursory-1
          cursorx = len(lines[cursory])+1
        else:
          del lines[cursory][cursorx-1]
        cursorx = cursorx-1
      else:
        if len(lines)>1:
          del lines[cursory]
          cursorx = len(lines[cursory-1])
    elif char == readchar.key.RIGHT:
      cursorx = cursorx+1
    elif char == readchar.key.LEFT:
      cursorx = cursorx-1
    elif char == readchar.key.DOWN:
      cursory = cursory+1
    elif char == readchar.key.UP:
      cursory = cursory-1
    elif char == readchar.key.HOME:
      cursorx = 0
    elif char == readchar.key.END:
      cursorx = len(lines[cursory])
    elif char == readchar.key.ENTER:
      lines.insert(cursory+1,[])
      cursorx = 0
      for character in lines[cursory]:
        if character=="\t":
          lines[cursory+1].insert(0,"\t")
          cursorx = cursorx+1
        else:
          break
      if "".join(lines[cursory]).endswith(":") == True:
        lines[cursory+1].insert(0,"\t")
        cursorx = cursorx+1
      cursory = cursory+1
    elif char == readchar.key.CTRL_D:
      mode = "run"
    elif char == readchar.key.CTRL_A:
      mode = "install"
    elif char == readchar.key.CTRL_E:
      mode = "save"
    elif char == readchar.key.CTRL_F:
      mode = "open"
    elif char == readchar.key.CTRL_B:
      lines = [[]]
    elif not char in allowedChars:
      pass
    else:
      lines[cursory].insert(cursorx,char)
      cursorx = cursorx+1
    if cursory > len(lines)-1:
      cursory = len(lines)-1
    elif cursory < 0:
      cursory = 0
    if cursorx > len(lines[cursory]):
      cursorx = len(lines[cursory])
    elif cursorx < 0:
      cursorx = 0
    refresh()
  elif mode == "run":
    run(getTextFromLines(lines,0))
    mode = "edit"
    refresh()
  elif mode == "install":
    installPackages()
    mode = "edit"
    refresh()
  elif mode == "save":
    save()
    mode = "edit"
    refresh()
  elif mode == "open":
    openFile()
    mode = "edit"
    refresh()