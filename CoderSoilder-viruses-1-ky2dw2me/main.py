# This virus is an very weird thing!
# It deletes some files and rickroll the victim
# Then it draws an virus on the screen!

# Importing the virus files

from Viruses import Delete_virus
from Viruses import Draw_virus
from Viruses import RickRoll_virus
from Viruses import Install_virus

# Using the install virus

Install_virus.install("pygame")

# Using the rickroll virus

RickRoll_virus.RickRoll()

# Drawing the virus

Draw_virus.Draw_virus()

# If you change the orders this may not work! So please dont change anything!(Only change if you need to!)