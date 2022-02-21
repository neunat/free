import os

command = 'pip install beautifulsoup4'
os.system (command)

command = 'pip install google'
os.system (command)

command = 'pip install scratch2py && pip install --force-reinstall websocket-client'
os.system (command)

from scratch2py import Scratch2Py


s2py = Scratch2Py('Chatter_Bot',os.environ['BOT_PASS'])
cloudproject = s2py.scratchConnect('598598359')
#The Project 598598359
cloud1 = str(cloudproject.readCloudVar('Search'))
decoded_cloud1 = s2py.decode(cloud1)

try:
  from googlesearch import search
except ImportError:
  print ("No Module Name 'google' found")

#search
search1 = decoded_cloud1

for j in search(search1, tld='co.in', num=10, stop=10, pause=2):
  print(j)

encode = s2py.encode(j)
decode = s2py.decode(encode)

if encode in 'Search':
  cloudproject.setCloudVar('Search', encode)

while True: 
  search = str(cloudproject.readCloudVar("Search"))
  decoding = s2py.decode(search)

  cloudproject.setCloudVar('Search', search)