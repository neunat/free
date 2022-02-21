from base64 import b64encode
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
from Crypto.Signature import pkcs1_15
import json

#Signature should be processed first

x = open('transaction.json', 'r')
z = x.read()
y = json.loads(z)


toNumber = (y["toNumber"])
fromNumber = (y["fromNumber"])
to = (y["to"])
fromm = (y["from"])
signature = (y["signature"])
print (signature)
digest = (y["digest"])
key = ()#search users.json for sender's number, retrieve the public key file path
amount = (y["amount"])


#Destroy this after using
message = b'hello'
digest = digest = SHA256.new(message)

s = open('signature.txt', 'rb')
signature = s.read()


print ("\n\nsignature-")
print (type(signature))
print ("\n\ndigest-")
print (type(digest))

# load public key
with open('keys/1-bob-public.pem', 'r') as f:
  public_key = RSA.import_key(f.read())
print (public_key)
# verify the digest and signature
pkcs1_15.new(public_key).verify(digest, signature)

# base64 encode the signature
signature_b64 = b64encode(signature)





s.close()
x.close()