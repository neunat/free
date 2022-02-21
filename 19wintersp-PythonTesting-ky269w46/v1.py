print("""
 __        ___              
 \ \      |__ \             
  \ \ _ __   ) |_ __  _   _ 
   > > '_ \ / /| '_ \| | | |
  / /| |_) / /_| |_) | |_| |
 /_/ | .__/____| .__/ \__, |
     | |       | |     __/ |
     |_|       |_|    |___/ 

p2py v1.0 (alpha)

Copyright (c) 2018-21 Patrick Winters

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program comes with absolutely no warranty, without even the implied warranty of merchantability or fitness for a particular purpose.

You should have received a copy of the GNU General Public License with this program. If not, see <https://gnu.org/licenses/> to download a copy.
""")

# imports
import ctypes, enum, getpass, os, socket, struct, sys, threading, time

# constants
SERVER_PORT = 9001
BEACON_PORT = 9002
NETWORK_END = 8
CONN_TIMEOUT = 0.1
RECV_TIMEOUT = 5
LOCK_TIMEOUT = 30
RESILIENT = False
TEST_ADDRESS = ("1.1.1.1", 80)

if NETWORK_END > 8:
	print("Warning: configuration has been modified in such a way that may cause harm to your network.\n")

if RESILIENT:
	print("Warning: configuration has been modified such that the protocol may be less stable when searching for peers.\n")

# state numbers
# todo: convert to enum
STATE_IDLE = 0
STATE_SCANNING = 1
STATE_SERVER = 2
STATE_CLIENT = 3
STATE_LOCKED = 4

# state management
shutdown = False
state = STATE_IDLE
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

# create beacon
beacon = socket.socket()
beacon.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
beacon.bind(("0.0.0.0", BEACON_PORT))
#beacon.listen(1)

def handle_beacon_connection(sock):
	try:
		sock.send(bytes([ state ]))
		if connected != None:
			sock.send(socket.inet_aton(connected))
		sock.send(b"\x00")
		sock.shutdown(socket.SHUT_RDWR)
		sock.close()
	except:
		pass

def poll_beacon_connections():
	beacon.settimeout(0.5)
	
	while True:
		try:
			sock, _ = beacon.accept()
			handle_beacon_connection(sock)
		except socket.timeout:
			pass
		except OSError:
			break
		except:
			pass

		if shutdown:
			break

beacon_thread = threading.Thread(target = poll_beacon_connections)
beacon_thread.start()

print("Beacon listening on", BEACON_PORT)

# scan for open servers
state = STATE_SCANNING

print("Scanning", f"{ ip }/{ NETWORK_END }")

int_ip = int.from_bytes(socket.inet_aton(ip), "big")
base_ip = int_ip & ~((1 << NETWORK_END) - 1)

for add in range(0, 1 << NETWORK_END):
	test_ip = socket.inet_ntoa((base_ip + add).to_bytes(4, "big"))
	if test_ip == ip:
		continue

	print("Trying", test_ip, end="\r")
	
	sock = socket.socket()
	sock.settimeout(CONN_TIMEOUT)

	try:
		sock.connect((test_ip, BEACON_PORT))
	except:
		continue

	sock.settimeout(RECV_TIMEOUT)

	try:
		foreign_state = sock.recv(1)
		if foreign_state == STATE_SCANNING:
			state = STATE_LOCKED
			sock.shutdown(socket.SHUT_RDWR)
			sock.close()

			# lock up and wait until that guy finds something
			print("Waiting")

			timer = 0
			while True:
				time.sleep(RECV_TIMEOUT)
				
				sock = socket.socket()
				sock.settimeout(CONN_TIMEOUT)

				try:
					sock.connect((test_ip, BEACON_PORT))
				except:
					continue

				sock.settimeout(RECV_TIMEOUT)

				foreign_state = sock.recv(1)
				if foreign_state == STATE_CLIENT:
					connected = socket.inet_ntoa(sock.recv(4))
					sock.shutdown(socket.SHUT_RDWR)
					sock.close()
					break
				elif foreign_state == STATE_SERVER:
					connected = test_ip
					sock.shutdown(socket.SHUT_RDWR)
					sock.close()
					break
				else:
					sock.shutdown(socket.SHUT_RDWR)
					sock.close()
				
				timer += 1
				if timer >= LOCK_TIMEOUT:
					if RESILIENT:
						state = STATE_SCANNING
						break
					else:
						print("Waited on failed lock")
						sys.exit(3)

			if connected == None:
				state = STATE_SCANNING
				continue
			else:
				state = STATE_CLIENT
				break
		elif foreign_state == STATE_CLIENT:
			state = STATE_CLIENT
			connected = socket.inet_ntoa(sock.recv(4))
			sock.shutdown(socket.SHUT_RDWR)
			sock.close()
			break
		elif foreign_state == STATE_SERVER:
			state = STATE_CLIENT
			connected = test_ip
			sock.shutdown(socket.SHUT_RDWR)
			sock.close()
			break

		sock.shutdown(socket.SHUT_RDWR)
		sock.close()
	except:
		pass

print()

# terminal ui helpers
class Terminal:
	move_cursor = lambda row, col: print(f"\x1b[{ row };{ col }H", end="")
	move_cursor_up = lambda rows: print(f"\x1b[{ rows }A", end="")
	clear_row = lambda: print("\x1b[2K", end="")
	hide_cursor = lambda: print("\x1b[?25l", end="")
	show_cursor = lambda: print("\x1b[?25h", end="")
	set_fg = lambda colour: print(f"\x1b[3{ colour.value }m", end="")
	set_bg = lambda colour: print(f"\x1b[4{ colour.value }m", end="")
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

class Textbox:
	width = 0
	cursor_pos = 0
	text = ""

	def draw(self):
		if self.cursor_pos > len(self.text):
			self.cursor_pos = len(self.text)

		self.width = os.get_terminal_size().columns
		pt_text = self.text[:(self.width - 5)]

		Terminal.hide_cursor()
		Terminal.reset()
		Terminal.set_fg(Colour.WHITE)
		print("▗", "▄" * (self.width - 2), "▖\r\n▐", sep="", end="")
		Terminal.set_fg(Colour.BLUE)
		Terminal.set_bg(Colour.WHITE)
		print(pt_text[:self.cursor_pos], end="")
		Terminal.set_fg(Colour.WHITE)
		Terminal.set_bg(Colour.BLUE)
		print(pt_text[self.cursor_pos] if self.cursor_pos < len(pt_text) else " ", end="")
		Terminal.set_fg(Colour.BLUE)
		Terminal.set_bg(Colour.WHITE)
		print(pt_text[(self.cursor_pos + 1):], end="")
		print(" " * (self.width - len(pt_text) - (2 if self.cursor_pos < len(pt_text) else 3)), end="")
		Terminal.reset()
		Terminal.set_fg(Colour.WHITE)
		print("▌\r\n▝", "▀" * (self.width - 2), "▘", sep="", end="\r\n")
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

username = getpass.getuser() or host
messages = []

# create own server
if connected == None:
	print("Creating server")
	state = STATE_SERVER
	# TODO: create server

# connect to server
else:
	print("Connecting")
	# TODO: connect

print()

# main application
Terminal.init()
textbox = Textbox()

def print_message(author, msg):
	Terminal.set_fg(Colour.GREEN)
	Terminal.bold()
	print(" ", author, sep="", end=" ")
	Terminal.reset()
	print(msg, end="\r\n")

def print_notif(msg, colour):
	Terminal.set_fg(colour)
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
	
		for i in range(0, 3):
			Terminal.move_cursor_up(1)
			Terminal.clear_row()
except KeyboardInterrupt:
	print()

# cleanup
Terminal.show_cursor()
Terminal.reset()
Terminal.deinit()

print("Killing children")
shutdown = True
beacon_thread.join()

beacon.close()

print("Exiting")
