import os
cmd = 'pip install scratch2py && pip install --force-reinstall websocket-client'
os.system (cmd)
from scratch2py import Scratch2Py
s2py = Scratch2Py('Chatter_Bot',os.environ['BOT_PASS']
)

user = s2py.userSession('Chatter_Bot')

var = user.postComment('Hello World!!')
print(var)
