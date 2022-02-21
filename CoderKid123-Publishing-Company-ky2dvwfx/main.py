class Product:
	def __init__(self, price, title):
		self.price  = price
		self.title  = title
	def set_price(self, new_price):
		self.price = new_price
	def set_title(self, new_title):
		self.title = new_title
	def get_price(self):
		return self.price
	def get_title(self):
		return self.title

class Book(Product):
	def __init__(self, price, title, pages):
		Product.__init__(price, title)
		self.pages = pages
	def get_pages(self):
		return self.pages
	def get_data(self):
		return f"{self.title} (Book) - Pages: {self.pages}"

class Tape(Product):
	def __init__(self, price, title, playing_time, author):
		Product.__init__(price, title, author)
		self.playing_time = playing_time
	def get_time(self):
		return self.playing_time
	def get_data(self):
		return f"{self.title} (Movie) - Playing Time: {self.playing_time}"

The_Wizard_of_Oz = Book(2.50, "The Wizard of Oz", 92)
Hatchet = Book(2.50, "Hatchet", 195)
The_Lion_Witch_Wardrobe = Book(2.50, "The Lion, the Witch, and the Wardrobe", 208)
Jurassic_Park = Tape(10, "Jurassic Park", "2h 7m")
Coraline = Tape(10, "Coraline", "1h 40m")

products = [The_Wizard_of_Oz, Hatchet, The_Lion_Witch_Wardrobe, Jurassic_Park, Coraline]

for i, p in enumerate(products):
	print(f"{i + 1} - {p.get_data()}")