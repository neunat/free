inputints = input().split()
N = int(inputints[0])
P = int(inputints[1])
if N == P:
  print(N*2)
else:
  result = P*2
  for i in range(1, N-P+1):
    result+=P+i
  print(result)