class Parent:
	def pDisplay(self):
		print("Parent Class")

class Child1(Parent):
	def c1Display(self):
		print("Child 1 Class")

class Child2(Parent):
	def c2Display(self):
		print("Child 2 Class")

child2 = Child2()
child2.pDisplay()
child2.c1Display()