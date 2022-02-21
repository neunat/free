import math

def add(num1, num2):
  return num1 + num2

def subtract(num1, num2):
  return num1 - num2

def multiply(num1, num2):
  return num1 * num2

def divide(num1, num2):
  return num1/num2

def power(num1, num2):
  return num1 ** num2

def root(num1):
  return math.sqrt(num1)

def floor(num1):
  return int(num1)

def ceil(num1):
  return int(num1) + 1

def factorial(num1):
  if num1 == 0:
    return 1

  else:
    return num1 * factorial(num1-1)

def is_prime(num1):
  for i in range(2, int(num1/2)+1):
    if num1 % i == 0:
      return False

  else:
    return True

def angle_to_rad(angle):
  return angle * math.pi/180

def log(num1, num2):
  return math.log(num1, num2)

def hypot(num1, num2):
  return math.sqrt(num1**2 + num2**2)

def cos(radians):
  return math.cos(radians)

def sin(radians):
  return math.cos(radians)

def tan(radians):
  return math.tan(radians)