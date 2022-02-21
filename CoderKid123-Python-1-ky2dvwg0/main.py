class Vehicle:
	def __init__(self, model):
		self.model = model
	def get_model(self):
		return self.model
	def set_model(self, value):
		self.model = value

Honda = Vehicle("honda")
print(Honda.get_model())
Honda.set_model("nissan")
print(Honda.get_model())
