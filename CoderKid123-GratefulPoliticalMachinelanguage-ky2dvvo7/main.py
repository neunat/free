class Father:
	def fDisplay(self):
		print("Father Class")

class Mother:
	def mDisplay(self):
		print("Mother Class")

class Child(Father, Mother):
	def cDisplay(self):
		print("Child Class")

child = Child()
child.fDisplay()
child.mDisplay()
child.cDisplay()
