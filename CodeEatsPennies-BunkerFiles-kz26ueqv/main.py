import os
import nacl.secret
import nacl.utils
import nacl.pwhash


toencrypt = ("encryptThis")#The directory where the files are stored


files = os.listdir(toencrypt)

import base64

password = b"I like Python"
secret_msg = b"Actually, I prefer Javascript..."

# Generate the key:
kdf = nacl.pwhash.argon2i.kdf # our key derivation function
salt_size = nacl.pwhash.argon2i.SALTBYTES # The salt musts have a size of 16 bytes
salt = nacl.utils.random(salt_size) # can be sth like: b'3\xba\x8f\r]\x1c\xcbOsU\x12\xb6\x9c(\xcb\x94'
print(salt) # To decrypt the data later, you have to save this salt somewhere.
key = kdf(nacl.secret.SecretBox.KEY_SIZE, password, salt)

# Encrypt the data:
box = nacl.secret.SecretBox(key)
encrypted = box.encrypt(secret_msg)

# Store the data with binary mode:
with open('file.bin', 'wb') as f:
  f.write(encrypted)
f.close()
# Store the data with text mode:
with open('file.txt', 'w') as f:
  content = base64.b64encode(encrypted).decode("ascii")
f.write(content)
f.close()