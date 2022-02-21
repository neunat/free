import requests

file = open("book.pdf", "w+")

r = requests.get("https://swab.zlibcdn.com/dtoken/2ddd0242e61317d3e2ad1991ff5b67ca")
print(r.content, file=file)
file.close()