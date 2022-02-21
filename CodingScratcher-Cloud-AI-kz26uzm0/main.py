from mltext import classifyText, storeText
from mlmodel import trainModel, checkModel
from cloud_server import startServer
import scratch2py
import os

s2py = scratch2py.s2py(os.environ["USERNAME"], os.environ['PASSWORD'])

while True:
  Loves = s2py.getStats('556033956', 'loves')
  Faves = s2py.getStats('556033956', 'faves')
  Views = s2py.getStats('556033956', 'views')
  Remixes = s2py.getStats('556033956', 'remixes')
  startServer(Loves, Faves, Views, Remixes)

# Go to cloud_server.py for the servers code.

