class SortNumbers:
	def __init__(self):
		self.list_pos = []
		self.list_zero = []
		self.list_neg = []
	def add(self, val):
		if val > 0:
			self.list_pos.append(val)
		elif val == 0:
			self.list_zero.append(val)
		elif val < 0:
			self.list_neg.append(val)
	def number_of_pos(self):
		return len(self.list_pos)
	def number_of_zero(self):
		return len(self.list_zero)
	def number_of_neg(self):
		return len(self.list_neg)
	def sum_of_pos(self):
		return sum(self.list_pos)
	def sum_of_neg(self):
		return sum(self.list_neg)

products = int(input("Enter the number of products:\n--> "))
sort_numbers = SortNumbers()
print()
for i in range(1, products + 1):
	cp = int(input(f"Enter the cost of product {i}:\n--> "))
	sp = int(input(f"Enter the selling price of product {i}:\n--> "))
	sort_numbers.add(sp - cp)
	print()
print("Profit: " + str(sort_numbers.sum_of_pos()))
print("Loss: " + str(-sort_numbers.sum_of_neg()))