from base64 import b64encode
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
from Crypto.Signature import pkcs1_15

user = '1'
username = 'Bob'








# create a message
message = b'hello'



#This is all creating the transaction json file-----
# load private key
with open('1-bob-private.pem', 'r') as f:
    private_key = RSA.import_key(f.read())

# hash the message
digest = SHA256.new(message)

# sign the digest
signature = pkcs1_15.new(private_key).sign(digest)

print ("\n\nsignature-")
print (type(signature))
print ("\n\ndigest-")
print (type(digest))

# load public key
with open('1-bob-public.pem', 'r') as f:
    public_key = RSA.import_key(f.read())

# verify the digest and signature
pkcs1_15.new(public_key).verify(digest, signature)

print("\n")
print(signature)
g = open('signature.txt', 'wb')
g.write(signature)
g.close()



#---------------------------------------------------------



