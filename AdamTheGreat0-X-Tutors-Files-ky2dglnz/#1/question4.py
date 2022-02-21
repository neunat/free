myn=int(input())
prevs = []
prevs.append(1)
myn-=1
for n in range(1, myn):
  ls = []
  for i in range(0, n):
    ls.append(prevs[i]*prevs[n-i-1])
  prevs.append(sum(ls))
  print(prevs[-1])