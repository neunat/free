from time import *
from random import *


def randfx(): return f"[0;{choice([31, 33, 37])}m"


def rgb(r, g, b): return f"[38;2;{r};{g};{b}m"


tree = """
      /\\
     /##\\
    /####\\
   /######\\
  /########\\
 /##########\\
/____________\\
      ||
"""

while True:
    print(f"\033[{len(tree.splitlines())+1}A", end="")
    ptree = ""  # tree.replace('#', f"\033{fx['red']}{'*'}\033{fx['none']}")
    for c in tree:
        if c == "#":
            if (randint(0, 1) == 1):
                ptree += f"\033{randfx()}*\033[0;0m"
            else:
                ptree += " "

        elif c in "\\/_":
            ptree += f"\033[0;32m{c}\033[0;0m"

        elif c in "|":
            ptree += f"\033{rgb(64, 55, 47)}{c}\033[0;0m"

        else:
            ptree += c

    print(ptree)
    sleep(0.5)