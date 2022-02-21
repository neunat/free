import sys
def statusBar(persentage, size, color, bg):
  char = "█"; bar = ""
  for x in range(size):
    bar += char
  ratio = 100/size
  persentage = int(persentage/ratio) #determines the number of green boxes to display
  if persentage < 0: persentage = 0 #if the boxes to print are less than 0, print no boxes instead of a negative
  return f"{color}{bar[0:persentage]}{bg}{bar[persentage:size]}\033[0m"



def showCursor():
  sys.stdout.write("\033[?25h")

def hideCursor():
  sys.stdout.write("\033[?25l")