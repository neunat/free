def ordena(vetor):
  cont = 0
  for x in range(len(vetor)-1):
    for y in range(x+1,len(vetor)):
      if vetor[x] > vetor[y]:
        aux = vetor[x]
        vetor[x] = vetor[y]
        vetor[y] = aux
      cont += 1
  print(cont)
  return vetor


lista = [3,7,5,9,0,8,2,1,4,6,15,6,7,8,9,3,8,0,1]
print(ordena(lista))