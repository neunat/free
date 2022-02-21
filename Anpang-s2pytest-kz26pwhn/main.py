import time
from scratch2py import Scratch2Py

s2py = Scratch2Py('RobloxianMinecraft', 'thisisnotmypassword')
cloudproject = s2py.scratchConnect('620628699')
cloudproject.readCloudVar('aha' '1000')
thistuple = (cloudproject.readCloudVar('aha' '1000'))
print(thistuple)
time.sleep(1)