import ctypes
import ctypes.util
import sys

libc_path = ctypes.util.find_library("c")
if type(libc_path) != str:
	print("fatal: could not get libc")
	sys.exit(1)

libc = ctypes.cdll[libc_path]


