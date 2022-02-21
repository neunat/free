import base64
import os
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC


#times = input("how many times do you want to encrypt the file?")
times = 15
password = b"boom shaka laka"
i = 0

salt = os.urandom(64)
kdf = PBKDF2HMAC(
    algorithm=hashes.SHA512(),
    length=32,
    salt=salt,
    iterations=390000,
)
key = base64.urlsafe_b64encode(kdf.derive(password))
f = Fernet(key)
token = f.encrypt(b"Secret message!")
print("Round 1 finished. Length: ",len(token))
i = i+1
while i<times:
  salt = os.urandom(64)
  kdf = PBKDF2HMAC(
      algorithm=hashes.SHA512(),
      length=32,
      salt=salt,
      iterations=390000,
  )
  key = base64.urlsafe_b64encode(kdf.derive(password))
  f = Fernet(key)
  token = f.encrypt(token)
  i = i+1
  print("Round",i,"finished. Length: ",len(token))



print(token)
