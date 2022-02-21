import os
cmd = 'pip install scratch2py && pip install --force-reinstall websocket-client'
os.system(cmd)
from scratch2py import Scratch2Py
s2py = Scratch2Py('Mast_Scratch',os.environ['PASSWORD'])

#pip install scratch2py && pip install --force-reinstall websocket-client

#install ^_^ in shell before running this project you will get an error


cloudproject = s2py.scratchConnect('417561335')
cloudproject.setCloudVar('CloudVar', 'Value')
print(cloudproject)

user = s2py.user('griffpatch')
var = user.exists()
print(var)

var = user.getMessagesCount()
print(var) #and here it says griffpatch has 0 msgs I was like :O

#var = user.getMessages()
#print(var) and if u check this out it says
#{'code': 'Unauthorized', 'message': ''}

var = user.getStatus()
print (var)

var = user.getBio()
print (var)

var = user.getProjects()
print(var)


#Ah! Thanks!
#and do I need to join the teams pro?
#I got an ad when I opened replit well not ad saying wanna join teams pro.

# Do I need to run the command all the time?
# I did not even know that teams pro was a thing but no...
#Also what command?
#the pip install and the other stuff