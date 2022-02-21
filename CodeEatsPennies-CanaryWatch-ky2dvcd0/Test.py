import hashlib
import bs4
import urllib.request



m = hashlib.sha256()
m.update(b" the spamish repetition")
h = (m.digest())

f = open("TestCanary.bin", 'wb')
f.write(h)
f.close()

f = open('TestCanary.bin', 'rb')
hash = f.read()
print(h)
print(hash)


if (h==hash):
  print("They are the same")
elif (h!=hash):
  print('Not the same')
f.close()


