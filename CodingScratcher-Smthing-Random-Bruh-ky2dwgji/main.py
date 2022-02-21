import os
from scratch2py import Scratch2Py

my_secret = os.environ['PASS']
s2py = Scratch2Py('Mast_Scratch', my_secret)
c = s2py.scratchConnect(607829320)
cloud1 = c.readCloudVar('Cloud 1')
decod = 
print(s2py.decode)