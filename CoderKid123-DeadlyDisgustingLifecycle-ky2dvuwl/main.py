class Collection:
	def __init__(self):
		self.a = []
	def add(self, val):
		self.a.append(val)
	def remove_(self, val):
		if val in self.a:
			self.a.remove(val)
	def sum_(self):
		return sum(self.a)
	def avg(self):
		return len(self.a)/sum(self.a)
	def product(self):
		result = 1
		for i in self.a:
			result *= i
		return result
	def size(self):
		return len(self.a)

c = Collection()
number = int(input("Enter a number:\n--> "))

for i in range(1, number + 1):
	c.add(i)
print(c.product())