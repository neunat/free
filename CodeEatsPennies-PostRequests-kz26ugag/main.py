import requests
url = 'http://172.18.0.1'
payload = {'some': 'data'}

r = requests.post(url, json=payload)