class Person:
	def __init__(self, name, age):
		self.name = name
		self.age = age
	def pDisplay(self):
		print(f"{self.name}, {self.age}")
class Student(Person):
	def __init__(self, name, age, grade):
		super().__init__(name, age)
		self.grade = grade
	def sDisplay(self):
		print(f"{self.name}, {self.age}, {self.grade}")

rony = Student("Rony", 11, "A")
sam = Student("Sam", 10, "B")
themis = Student("Themis", 11, "A")
rony.sDisplay()
sam.sDisplay()
themis.sDisplay()