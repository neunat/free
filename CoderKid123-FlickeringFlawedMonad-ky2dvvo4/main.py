class Rectangle:
	def __init__(self, length, width):
		self.length = length
		self.width = width

class Square(Rectangle):
	def __init__(self, length):
		super().__init__(length, length)
	def area(self):
		return self.length**2

class Cube(Rectangle):
	def __init__(self, length):
		super().__init__(length, length)
		self.length = length
	def volume(self):
		return self.length**3

length = int(input("Enter the length:\n--> "))
square = Square(length)
cube = Cube(length)
print(f"Area of square: {square.area()}\nVolume of Cube: {cube.volume()}")