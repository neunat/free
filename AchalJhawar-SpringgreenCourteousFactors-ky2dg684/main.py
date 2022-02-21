perf,palin,ang = [],[],[]
i=2
while True:
  f1,f2,f3 = False,False,False
  l=[]
  i+=1
  perfsum,angsum = 0,0
  for k in range(1,i):
    if i%k == 0:
      l.append(k)
  for j in l:
    perfsum+=j
  if i == perfsum:
    perf.append(i)
    f1 = True
  if str(i) == str(i)[::-1]:
    palin.append(i)
    f2 = True
  for h in str(i):
    angsum += int(h)**3
  if i == angsum:
    ang.append(i)
    f3 = True
  if f1 and f2 and f3:
    print(i)
  
  
  
  
  
