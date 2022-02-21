word = input("enter a word: ")
i = 0
while len(word)>=i:
  if "a" in word:
    i=i+1
  if "e" in word:
    i=i+1
  if "i" in word:
    i=i+1
  if "o" in word:
    i=i+1
  if "u" in word:
    i=i+1
print("Number of vowels in ",word,"is",i)  
  