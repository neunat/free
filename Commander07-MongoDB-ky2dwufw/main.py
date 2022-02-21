import os
os.system('/opt/virtualenvs/python3/bin/python -m pip install "pymongo[srv]"')
from pymongo import MongoClient
from pprint import pprint


mongo_url = os.environ['MONGO']
print(mongo_url)
db_client = MongoClient(mongo_url)
config = db_client.test
db_status = config.command("serverStatus")
pprint(db_status)