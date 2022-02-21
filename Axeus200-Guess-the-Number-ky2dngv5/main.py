import random

n = random.randint(1,100)
print("\t\tGuess the missing number\n")
count = 1
nums = []
for i in range(100):
  nums.append(count)
  count+=1
nums.remove(n)
count = 0
for i in nums:
  count+=1
  print(end=" " + str(i) + " ")
  if count % 10 == 0:
      print("\n")

while True:
    print("\nNNNNNNNNNNNNNNNNNNNNNNN:", n)
    guess = int(input("Your Guess: "))
    if guess == n:
        print("Welldone you picked correctly!")
        break