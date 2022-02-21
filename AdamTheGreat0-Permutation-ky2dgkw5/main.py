def permutation(ls):
  if len(ls) == 0:
    return []
  if len(ls) == 1:
    return [ls]
  result = []
  for i in range(len(ls)):
    temp = ls[i]
    elselist = ls[:i] + ls[i+1:]
    for i in permutation(elselist):
        result.append([temp] + i)
  return result

n = int(input())
ls = []
for i in range(n):
  ls.append(i+1)
result = permutation(ls)
for i in range(len(result)):
  for j in range(len(result[i])):
    print(result[i][j], end="")
  print()