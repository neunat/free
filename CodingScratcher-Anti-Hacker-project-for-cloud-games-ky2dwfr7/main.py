import os
cmd = 'pip install scratch2py && pip install --force-reinstall websocket-client'
os.system (cmd)
from scratch2py import Scratch2Py
#pip install scratch2py && pip install --force-reinstall websocket-client

my_secret = os.environ['PASSWORD']
s2py = Scratch2Py('Mast_Scratch', my_secret)

cloudproject = s2py.scratchConnect('594305397')
#Demo project ID 594305397

hacker_username = input ("Hackers Username? ")
while True:
  cloud1 = str(cloudproject.readCloudVar('Cloud1'))
  decoded_cloud1 = s2py.decode(cloud1)

  cloud2 = str(cloudproject.readCloudVar('Cloud2'))
  decoded_cloud2 = s2py.decode(cloud2)
  
  cloud3 = str(cloudproject.readCloudVar('Cloud3'))
  decoded_cloud3 = s2py.decode(cloud3)

  cloud4 = str(cloudproject.readCloudVar('Cloud4'))
  decoded_cloud4 = s2py.decode(cloud4)

  cloud5 = str(cloudproject.readCloudVar('Cloud5'))
  decoded_cloud5 = s2py.decode(cloud5)

  cloud6 = str(cloudproject.readCloudVar('Cloud6'))
  decoded_cloud6 = s2py.decode(cloud6)

  cloud7 = str(cloudproject.readCloudVar('Cloud7'))
  decoded_cloud7 = s2py.decode(cloud7)

  cloud8 = str(cloudproject.readCloudVar('Cloud8'))
  decoded_cloud8 = s2py.decode(cloud8)

  cloud9 = str(cloudproject.readCloudVar('Cloud9'))
  decoded_cloud9 = s2py.decode(cloud9)

  cloud10 = str(cloudproject.readCloudVar('Cloud10'))
  decoded_cloud10 = s2py.decode(cloud10)
  

  if hacker_username in decoded_cloud1:
    print ("1")
    cloudproject.setCloudVar('Cloud1', '0')

  elif hacker_username in decoded_cloud2:
    print ("2")
    cloudproject.setCloudVar('Cloud2', '0')

  elif hacker_username in decoded_cloud3:
    print ("3")
    cloudproject.setCloudVar('Cloud3', '0')

  elif hacker_username in decoded_cloud4:
    print ("4")
    cloudproject.setCloudVar('Cloud4', '0')
  elif hacker_username in decoded_cloud5:
    print ("5")
    cloudproject.setCloudVar('Cloud5', '0')
  elif hacker_username in decoded_cloud6:
    print ("6")
    cloudproject.setCloudVar('Cloud6', '0')
  elif hacker_username in decoded_cloud7:
    print ("7")
    cloudproject.setCloudVar('Cloud7', '0')

  elif hacker_username in decoded_cloud8:
    print ("8")
    cloudproject.setCloudVar('Cloud8', '0')

  elif hacker_username in decoded_cloud9:
    print ("9")
    cloudproject.setCloudVar('Cloud9', '0')

  elif hacker_username in decoded_cloud10:
    print ("10")
    cloudproject.setCloudVar('Cloud10', '0')

  else:
   print ("Username not found in server")