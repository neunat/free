#Base Class (Parent Class):
class Person:
	def __init__(self, name, age):
		self.name = name
		self.age  = age
	def is_adult(self):
		if self.age >= 18:
			return True
		else:
			return False


#Derived Class (Child Class)
class Student(Person):
	def __init__(self, name, age, GPA):
		Person.__init__(self, name, age)
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

class Employee(Person):
	def __init__(self, name, age, salary):
		Person.__init__(self, name, age)
		self.salary = salary
	def is_salaried(self):
		return True
	
#Derived Class (Child Class)
class Teacher(Employee):
	def __init__(self, name, age, salary, subject):
		Employee.__init__(self, name, age, salary)
		self.subject = subject
	def has_lab(self):
		if self.subject in ["Science", "Biology", "Physics", "Chemistry"]:
			return True
		else:
			return False
	def get_report(self):
		report = {"Name":self.name, "Salaried":self.is_salaried(), "Lab":self.has_lab()}
		return report

#Derived Class (Child Class)
class Developer(Employee):
	def __init__(self, name, age, salary, languages):
		Employee.__init__(self, name, age, salary)
		self.languages = languages
	def get_report(self):
		report = {"Name":self.name, "Salaried":self.is_salaried(), "Languages":self.languages}
		return report

student_001   = Student("Rony", 11, 8.5)
student_002   = Student("Sam", 11, 6.75)
teacher_001   = Teacher("Mr. Rony", 45, 20000, "Math")
teacher_002   = Teacher("Mr. Sam", 35, 30000, "ELA")
developer_001 = Developer("Someone", 45, 150000, ["Python", "Java", "C++"])
people = [student_001, student_002, teacher_001, teacher_002, developer_001]

for i, p in enumerate(people):
	print(f"{i + 1} - {p.get_report()}")
	print("Adult?", p.is_adult())
