import os

if os.name == "posix":
	from unix import *
else:
	from win import *
