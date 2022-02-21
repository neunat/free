class Person:
	def __init__(self, name, age):
		self.name = name
		self.age = age
	def display(self):
		return f"{self.name}, {self.age}"
	def age(self):
		return self.age

class Employee(Person):
	def __init__(self, name, age, salary):
		super().__init__(name, age)
		self.salary = salary
	def eDisplay(self):
		print(f"{super().display()}: {self.salary}")

employee  = Employee("A", 30, 5000)
employee1 = Employee("B", 35, 4500)
employee2 = Employee("C", 32, 4000)
employee3 = Employee("D", 37, 4700)
employee4 = Employee("E", 28, 3700)
employees = [employee.salary, employee1.salary, employee2.salary, employee3.salary, employee4.salary]
employees.sort(reverse = True)
print(employees)
