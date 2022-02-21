from json import dumps
from nosleep import *
from httplib2 import Http
import os

def send(text):
    url = os.environ['URL']
    bot_message = {
        'text': text
    }

    message_headers = {'Content-Type': 'application/json; charset=UTF-8'}

    http_obj = Http()

    response = http_obj.request(
        uri=url,
        method='POST',
        headers=message_headers,
        body=dumps(bot_message),
    )

while 1:
    send(input("text to send > "))