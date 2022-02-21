def findstall(temp, used, k):
  RESULT = 0
  if k == n:
    return 1 # Returns.
  # else:
  for i in range(len(cows)):
    # IF COW IS IN THE POOL:
    if used[i]:
      continue
    if stalls[i] < cows[i]:
      continue
    #constraint thing (artificial)
    temp[k] = i
    used[i] = True
    #do something here
    RESULT+=findstall(temp, used, k+1)
    used[i] = False
  return RESULT


n = int(input())
cows = input().split()
for i in range(n):
  cows[i] = int(cows[i])
stalls = input().split()
for i in range(n):
  stalls[i] = int(stalls[i])

print(findstall([0 for i in range(n)], [False for i in range(n)], 0))