class Player:
	def __init__(self, name, country, goals):
		self.name = name
		self.country = country
		self.goals = goals
	def get_name(self):
		return self.name
	def get_country(self):
		return self.country
	def get_goals(self):
		return self.goals
	def __str__(self):
		return f"{self.name}, {self.country}, {self.goals}"
data = [("Andrew", "USA", 3), 
		("Ryan", "West Bengal", 5), 
		("Rony", "West Bengal", 8), 
		("Albert", "USA", 6), 
		("Micheal", "Taiwan", 2), 
		("Angela", "Taiwan", 4), 
		("Max", "USA", 11), 
		("Tom", "New Zealand", 1), 
		("Micheala", "Iceland", 2)]
players = []
for i in data:
	players.append(Player(i[0], i[1], i[2]))
for p in players:
	print(p)
print("\n")
countries = {}
for p in players:
	if p.get_country() in countries:
		countries[p.get_country()] += p.get_goals()
	else:
		countries[p.get_country()] = p.get_goals()
for c in countries:
	print(f"Country: {c} | Goals: {countries[c]}")