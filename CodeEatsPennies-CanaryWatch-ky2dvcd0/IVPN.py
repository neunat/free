import hashlib
import bs4
import requests


r = requests.get('https://www.ivpn.net/resources/canary.txt')
#https://www.ivpn.net/resources/canary.txt

m = hashlib.sha256()
m.update(bytes(r.content))
h = (m.digest())



#f = open('Getridofthis.txt', 'w')
#f.write(str(r.content))
#f.close()


q = open('canaries/IVPN.txt')

n = hashlib.sha256()
a = q.read()
n.update(bytes(a, 'utf-8'))
d = (n.digest())


print(r.content)
print("\n\n\n")
print(q.read())





if (h==d):
  print("They are the same")
elif (h!=d):
  print('Not the same')
