print("""
 __        ___                   .---.
 \ \      |__ \                 |_o_  |
  \ \ _ __   ) |_ __  _   _   .-----' |-.
   > > '_ \ / /| '_ \| | | | |   _____/  |
  / /| |_) / /_| |_) | |_| | |  /        |
 /_/ | .__/____| .__/ \__, |  '-| .-----'
     | |       | |     __/ |    |  "o"|
     |_|       |_|    |___/      '---'

p2py v2.0 (alpha)

Copyright (c) 2021 Patrick Winters

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program comes with absolutely no warranty, without even the implied warranty of merchantability or fitness for a particular purpose.

You should have received a copy of the GNU General Public License with this program. If not, see <https://gnu.org/licenses/> to download a copy.
""")

# imports
import ctypes, enum, getpass, os, socket, struct, sys, threading, time

# constants
SERVER_PORT = 9003
TEST_ADDRESS = ("1.1.1.1", 80)

# state management
shutdown = False
connected = None

# get current ip
host = socket.gethostname()

sock = socket.socket()
sock.connect(TEST_ADDRESS)
ip = sock.getsockname()[0]
sock.shutdown(socket.SHUT_RDWR)
sock.close()

print("Got hostname", host)
print("Got IP", ip)

print()

# terminal ui classes
class Terminal:
	move_cursor = lambda row, col: print(f"\x1b[{ row };{ col }H", end="")
	move_cursor_up = lambda rows: print(f"\x1b[{ rows }A", end="")
	clear_row = lambda: print("\x1b[2K", end="")
	hide_cursor = lambda: print("\x1b[?25l", end="")
	show_cursor = lambda: print("\x1b[?25h", end="")
	colour = lambda colour: print(f"\x1b[{ colour }m", end="")
	bold = lambda: print("\x1b[1m", end="")
	reset = lambda: print("\x1b[0m", end="")

	old_config = None

	def init(): # innit?
		if os.name == "posix":
			Terminal.init_unix()
		else:
			Terminal.init_win()

	def deinit():
		if os.name == "posix":
			Terminal.deinit_unix()
		else:
			Terminal.deinit_win()

	def getch():
		if os.name == "posix":
			return Terminal.getch_unix()
		else:
			return Terminal.getch_win()

	def init_unix():
		import termios, tty
		
		fd = sys.stdin.fileno()
		Terminal.old_config = termios.tcgetattr(fd)
		try:
			tty.setraw(fd)
		finally:
			pass

	def init_win():
		from ctypes import wintypes
		
		k32 = ctypes.windll.kernel32

		STD_INPUT_HANDLE = -10
		STD_OUTPUT_HANDLE = -11
		
		ENABLE_VIRTUAL_TERMINAL_INPUT = 0x0200
		ENABLE_PROCESSED_OUTPUT = 0x0001
		ENABLE_VIRTUAL_TERMINAL_PROCESSING = 0x0004

		Terminal.old_config = (None, None)
		
		stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
		stdout_config = wintypes.LPDWORD(wintypes.DWORD(0))
		k32.GetConsoleMode(stdout, stdout_config)
		k32.SetConsoleMode(stdout, ENABLE_PROCESSED_OUTPUT | ENABLE_VIRTUAL_TERMINAL_PROCESSING)
		
		stdin = k32.GetStdHandle(STD_INPUT_HANDLE)
		stdin_config = wintypes.LPDWORD(wintypes.DWORD(0))
		k32.GetConsoleMode(stdin, stdin_config)
		k32.SetConsoleMode(stdin, ENABLE_VIRTUAL_TERMINAL_INPUT)

		Terminal.old_config = (stdout_config[0], stdin_config[0])

	def deinit_unix():
		import termios
		
		if Terminal.old_config != None:
			termios.tcsetattr(sys.stdin.fileno(), termios.TCSADRAIN, Terminal.old_config)

	def deinit_win():
		k32 = ctypes.windll.kernel32
		
		STD_INPUT_HANDLE = -10
		STD_OUTPUT_HANDLE = -11
		
		if Terminal.old_config != None:
			stdout = k32.GetStdHandle(STD_OUTPUT_HANDLE)
			k32.SetConsoleMode(stdout, Terminal.old_config[0])
			
			stdin = k32.GetStdHandle(STD_INPUT_HANDLE)
			k32.SetConsoleMode(stdin, Terminal.old_config[1])

	def getch_unix():
		fd = sys.stdin.fileno()
		os.set_blocking(fd, False)
		ch = sys.stdin.read(1)
		os.set_blocking(fd, True)
		return ch
	
	def getch_win():
		import msvcrt
		
		if msvcrt.kbhit():
			return chr(msvcrt.getch()[0])
		else:
			return ""

class Colour(enum.Enum):
	BLACK = 0
	RED = 1
	GREEN = 2
	YELLOW = 3
	BLUE = 4
	MAGENTA = 5
	CYAN = 6
	WHITE = 7

	def fg(self, bright=False):
		return self.value + (90 if bright else 30)

	def bg(self, bright=False):
		return self.value + (100 if bright else 40)

class Menu:
	pass #todo

class Textbox:
	width = 0
	cursor_pos = 0
	text = ""
	title = None

	def __init__(self, title=None):
		self.title = title

	def draw(self):
		if self.cursor_pos > len(self.text):
			self.cursor_pos = len(self.text)

		self.width = os.get_terminal_size().columns
		pt_text = self.text[:(self.width - 5)]
		pt_title = self.title or ""

		Terminal.hide_cursor()
		Terminal.reset()
		Terminal.colour(Colour.WHITE.fg())
		print("\r\n┌╴", pt_title, "╶", "─" * (self.width - len(pt_title) - 4), "┐\r\n│", sep="", end="")
		Terminal.colour(Colour.YELLOW.fg(True))
		print(pt_text[:self.cursor_pos], end="")
		Terminal.colour(Colour.BLACK.fg())
		Terminal.colour(Colour.WHITE.bg())
		print(pt_text[self.cursor_pos] if self.cursor_pos < len(pt_text) else " ", end="")
		Terminal.reset()
		Terminal.colour(Colour.YELLOW.fg(True))
		print(pt_text[(self.cursor_pos + 1):], end="")
		print(" " * (self.width - len(pt_text) - (2 if self.cursor_pos < len(pt_text) else 3)), end="")
		Terminal.reset()
		Terminal.colour(Colour.WHITE.fg())
		print("│\r\n└", "─" * (self.width - 2), "┘", sep="", end="\r\n")
		Terminal.reset()

	def tick(self):
		read = ""
		gotch = Terminal.getch()
		while len(gotch) > 0:
			read += gotch
			gotch = Terminal.getch()

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
			elif ch == "\x03":
				raise KeyboardInterrupt()
			elif ch != None and 0x20 <= ord(ch) < 0x7F:
				self.text = self.text[:self.cursor_pos] + ch + self.text[self.cursor_pos:]
				self.cursor_pos += 1

		return msgs

	def erase(self):
		for i in range(0, 4):
			Terminal.move_cursor_up(1)
			Terminal.clear_row()

username = getpass.getuser() or host
messages = []

# create own server
if connected == None:
	print("Creating server")
	# TODO: create server

# connect to server
else:
	print("Connecting")
	# TODO: connect

print()

# main application
Terminal.init()
textbox = Textbox("Send message")

def print_message(author, msg):
	Terminal.colour(Colour.GREEN.fg())
	Terminal.bold()
	print(" ", author, sep="", end=" ")
	Terminal.reset()
	print(msg, end="\r\n")

def print_notif(msg, colour):
	Terminal.colour(colour.fg(True))
	Terminal.bold()
	print(" ", msg, sep="", end="\r\n")
	Terminal.reset()

try:
	while True:
		for message in messages:
			print_message(message[0], message[1])
		messages = []
	
		inputs = textbox.tick()
		for inp in inputs:
			if inp[0] == "/":
				command = inp[1:].split(" ")[0].lower()
				arguments = inp[1:].split(" ")[1:]
	
				if command == "quit":
					raise KeyboardInterrupt()
				elif command in [ "nick", "name" ]:
					if len(arguments) > 0:
						username = arguments[0]
						print_notif(f"Name updated to \"{ username }\"", Colour.CYAN)
					else:
						print_notif(f"One agument must be provided to /{ command }", Colour.RED)
				else:
					print_notif(f"Unknown command /{ command }", Colour.RED)
			else:
				print_message(username, inp)
				# todo: send message
	
		textbox.draw()
		
		time.sleep(0.05)
	
		textbox.erase()
except KeyboardInterrupt:
	print()

# cleanup
Terminal.show_cursor()
Terminal.reset()
Terminal.deinit()

print("Killing children")
shutdown = True
#beacon_thread.join()

#beacon.close()

print("Exiting")
