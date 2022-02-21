from hashlib import sha256
import time
import re
def randint(max=2):
  """
  Returns a random integer between the length of 0 and 'max'.

  'max' cannot be above 77.
  """
  if max > 77:
    raise ValueError(f"Can only return numbers with a maximum length of 77. Not {max}")
  time.sleep(time.time()*0.000000000001)
  hash = sha256(f"{time.time_ns()}".encode("utf-8")).hexdigest()
  hash_int = str(int(hash, 16))
  try:
    return int(re.findall("\d{"+str(max)+"}", hash_int) [-1])
  except IndexError:
    return int(hash_int)

def randrange(max=100):
  time.sleep(time.time()*0.000000000001)
  hash = sha256(f"{time.time_ns()}".encode("utf-8")).hexdigest()
  hash_int = "0." + str(int(hash, 16))
  return round(float(hash_int)*max)

if __name__ == "__main__":
  iter = 10000
  start = time.time()
  chance = {}
  for i in range(0, iter):
    j = str(randint(3))
    if j in chance.keys():
      chance[j] += 1 
    else:
      chance[j] = 1
  print("randint:")
  print(time.time()-start)
  print(len(chance.keys()))
  print(max(chance.items(), key=lambda k: k[1]))