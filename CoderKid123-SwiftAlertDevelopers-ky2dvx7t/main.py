class GrandParent:
	def gDisplay(self):
		print("In Grandparent Class")

class Parent(GrandParent):
	def pDisplay(self):
		print("In Parent Class")

class Child(Parent):
	def cDisplay(self):
		print("In Child Class")

#child = Child()
#child.cDisplay()
#child.pDisplay()
#child.gDisplay()

parent = Parent()
parent.gDisplay()