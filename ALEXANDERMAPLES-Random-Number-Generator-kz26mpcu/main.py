import random, os, re
os.system("clear")
leng = input("Length of random string?: ")
leng = re.sub("[^0-9]", "", leng)
leng = int(leng)
lengg = leng
apn = []
while leng >= 1:
  apn.append(random.choice(["0","1","2","3","4","5","6","7","8","9","0"]))
  leng = leng-1
apnn = ''.join(apn)
print(apnn)
print(f"Length: {len(apnn)}\nIntended Length: {lengg}")