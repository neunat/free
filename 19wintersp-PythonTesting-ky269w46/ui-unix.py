import os, random, sys, termios, time, tty

# note to self: enter generates 0x0d (\r), backspace 0x7f
# these generate {0x1b}[ followed by
# left arrow: 68d (D)
# right arrow: 67d (C)
# up arrow: 65d (A)
# down arrow: 66d (B)
# home: 72d (H)
# end: 70d (F)

# API

COLOUR_BLACK = 0
COLOUR_RED = 1
COLOUR_GREEN = 2
COLOUR_YELLOW = 3
COLOUR_BLUE = 4
COLOUR_MAGENTA = 5
COLOUR_CYAN = 6
COLOUR_WHITE = 7

def getch():
	fd = sys.stdin.fileno()
	os.set_blocking(fd, False)
	ch = sys.stdin.read(1)
	os.set_blocking(fd, True)
	return ch

def move_cursor(row, col):
	print(f"\x1b[{ row };{ col }H", end="")

def move_up_cursor(rows):
	print(f"\x1b[{ rows }A", end="")

def clear_row():
	print("\x1b[2K", end="")

def hide_cursor():
	print("\x1b[?25l", end="")

def show_cursor():
	print("\x1b[?25h", end="")

def set_fg(colour):
	print(f"\x1b[3{ colour }m", end="")

def set_bg(colour):
	print(f"\x1b[4{ colour }m", end="")

def reset_fgbg():
	print("\x1b[0m", end="")

old = None

def init():
	global old
	fd = sys.stdin.fileno()
	old = termios.tcgetattr(fd)
	try:
		tty.setraw(fd)
	finally:
		pass

def uninit():
	termios.tcsetattr(sys.stdin.fileno(), termios.TCSADRAIN, old)

# COMMON

class Textbox:
	cursor_pos = 0
	text = ""
	width = 0

	def draw(self):
		if self.cursor_pos > len(self.text):
			self.cursor_pos = len(self.text)

		hide_cursor()
		reset_fgbg()
		set_fg(COLOUR_WHITE)
		print("▗", "▄" * (self.width - 2), "▖\r\n▐", sep="", end="")
		set_fg(COLOUR_BLUE)
		set_bg(COLOUR_WHITE)
		print(self.text[:self.cursor_pos], end="")
		set_fg(COLOUR_WHITE)
		set_bg(COLOUR_BLUE)
		print(self.text[self.cursor_pos] if self.cursor_pos < len(self.text) else " ", end="")
		set_fg(COLOUR_BLUE)
		set_bg(COLOUR_WHITE)
		print(self.text[(self.cursor_pos + 1):], end="")
		print(" " * (self.width - len(self.text) - (2 if self.cursor_pos < len(self.text) else 3)), end="")
		reset_fgbg()
		set_fg(COLOUR_WHITE)
		print("▌\r\n▝", "▀" * (self.width - 2), "▘", sep="", end="\r\n")
		reset_fgbg()

	def tick(self):
		read = ""
		gotch = getch()
		while len(gotch) > 0:
			read += gotch
			gotch = getch()

		i = 0
		msgs = []

		def eat():
			nonlocal i
			ch = read[i] if i < len(read) else None
			i += 1
			return ch
			
		while i < len(read):
			ch = eat()
			if ch == "\x1b":
				if eat() == "[":
					key = eat()
					if key == "A" or key == "H":
						self.cursor_pos = 0
					elif key == "B" or key == "F":
						self.cursor_pos = len(self.text)
					elif key == "C":
						if self.cursor_pos < len(self.text):
							self.cursor_pos += 1
					elif key == "D":
						if self.cursor_pos > 0:
							self.cursor_pos -= 1
			elif ch == "\r":
				msgs.append(self.text)
				self.text = ""
				self.cursor_pos = 0
			elif ch == "\x7f":
				if self.cursor_pos > 0:
					self.text = self.text[:(self.cursor_pos - 1)] + self.text[self.cursor_pos:]
					self.cursor_pos -= 1
			elif ch != None and 0x20 <= ord(ch) < 0x7F:
				self.text += ch
				self.cursor_pos += 1

		return msgs

try:
	init()

	tb = Textbox()
	
	while True:
		time.sleep(0.1)

		if random.randint(0, 20) == 0:
			print("Message", end="\r\n")

		tb.width = os.get_terminal_size().columns
		msgs = tb.tick()
		tb.draw()

		for i in range(0, 3):
			move_up_cursor(1)
			clear_row()

		for msg in msgs:
			if "/quit" == msg.lower():
				break
			print(msg, end="\r\n")
		else:
			continue
		break
		
		"""gotch = getch()
		while len(gotch) > 0:
			if gotch == "q":
				break
			print(gotch if 0x20 <= ord(gotch) < 0x7e else "?", ord(gotch), end = "\r\n")
			gotch = getch()

		if gotch == "q":
			break"""
finally:
	uninit()
	show_cursor()
