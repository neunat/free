class Student:
	def __init__(self, name, age, GPA):
		self.name = name
		self.age  = age
		self.GPA  = GPA
	def get_grade(self):
		if self.GPA >= 7:
			return "A"
		elif self.GPA >= 4:
			return "B"
		else:
			return "C"
	def is_salaried(self):
		return False
	def get_report(self):
		report = {"Name":self.name, "Salaried":self.is_salaried(), "Grade":self.get_grade()}
		return report

class Teacher:
	def __init__(self, name, age, salary, subject):
		self.name    = name
		self.age     = age
		self.salary  = salary
		self.subject = subject
	def is_salaried(self):
		return True
	def has_lab(self):
		if self.subject in ["Science", "Biology", "Physics", "Chemistry"]:
			return True
		else:
			return False
	def get_report(self):
		report = {"Name":self.name, "Salaried":self.is_salaried(), "Lab":self.has_lab()}
		return report

student_001 = Student("Rony", 11, 8.5)
student_002 = Student("Sam", 11, 6.75)
teacher_001 = Teacher("Mr. Rony", 45, 20000, "Math")
teacher_002 = Teacher("Mr. Sam", 35, 30000, "ELA")
people = [student_001, student_002, teacher_001, teacher_002]

for i, p in enumerate(people):
	print(f"{i + 1}. {p.get_report()}")