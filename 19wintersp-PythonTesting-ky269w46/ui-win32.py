import ctypes, msvcrt, time

# API

k32 = ctypes.windll.kernel32

STD_INPUT_HANDLE = -10
STD_OUTPUT_HANDLE = -11

ENABLE_VIRTUAL_TERMINAL_INPUT = 0x0200
ENABLE_PROCESSED_OUTPUT = 0x0001
ENABLE_VIRTUAL_TERMINAL_PROCESSING = 0x0004

class COORD(ctypes.Structure): # todo: check whether this is in k32
	_fields_ = [
		("x", ctypes.c_short),
		("y", ctypes.c_short)
	]

class SMALL_RECT(ctypes.Structure):
	_fields_ = [
		("Left", ctypes.c_short),
		("Top", ctypes.c_short),
		("Right", ctypes.c_short),
		("Bottom", ctypes.c_short)
	]

class CONSOLE_SCREEN_BUFFER_INFO(ctypes.Structure):
	_fields_ = [
		("dwSize", COORD),
		("dwCursorPosition", COORD),
		("wAttributes", ctypes.c_uint16),
		("srWindow", SMALL_RECT),
		("dwMaximumWindowSize", COORD)
	]

def getch():
	if msvcrt.kbhit():
		return chr(msvcrt.getch())
	else:
		return ""

def move_cursor(row, col):
	stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
	pos = COORD(col, row)
	k32.SetConsoleCursorPosition(stdout, pos)

def screen_size():
	stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
	info = CONSOLE_SCREEN_BUFFER_INFO()
	k32.GetConsoleScreenBufferInfo(stdout, ctypes.POINTER(info))
	return (info.dwSize.y, info.dwSize.x)

old_stdout = None
old_stdin = None

def init():
	global old_stdout, old_stdin
	
	stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
	old_stdout = k32.GetConsoleMode(stdout)
	k32.SetConsoleMode(stdout, ENABLE_PROCESSED_OUTPUT | ENABLE_VIRTUAL_TERMINAL_PROCESSING)
	
	stdin = k32.GetStdHandle(STD_INPUT_HANDLE)
	old_stdin = k32.GetConsoleMode(stdin)
	k32.SetConsoleMode(stdin, ENABLE_VIRTUAL_TERMINAL_INPUT)

def uninit():
	if old_stdout != None:
		stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
		k32.SetConsoleMode(stdout, old_stdout)
		
	if old_stdin != None:
		stdin = k32.GetStdHandle(STD_INPUT_HANDLE)
		k32.SetConsoleMode(stdin, old_stdin)

# COMMON

try:
	init()
	
	while True:
		time.sleep(0.1)
		
		gotch = getch()
		while len(gotch) > 0:
			if gotch == "q":
				break
			print(gotch if 0x20 <= ord(gotch) < 0x7e else "?", ord(gotch), end = "\r\n")
			gotch = getch()

		if gotch == "q":
			break
finally:
	uninit()
