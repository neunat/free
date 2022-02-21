import time

start = time.time()
i = 0
while i != 1000000:
	i += 1

print(time.time() - start)

start = time.time()
for i in range(0, 1000000):
	hi = 1
print(time.time() - start)