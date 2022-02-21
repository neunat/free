with open("day2", "r") as f:
  move = f.readlines()
import time
hor = 0
dep = 0
aim = 0
for i in range(len(move)):
  movesp = move[i].split()
  if movesp[0] == "forward":
    hor = hor + int(movesp[1])
    dep = dep + (aim*int(movesp[1]))
  elif movesp[0] == "down":
    aim = aim + int(movesp[1])
  elif movesp[0] == "up":
    aim = aim - int(movesp[1])
print("dep:", dep)
print("hor:", hor)
fin = dep*hor
print(fin)