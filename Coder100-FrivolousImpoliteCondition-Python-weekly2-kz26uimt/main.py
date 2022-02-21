'''
get sum of numbers
n = abs(x - 10)
if last > n:
    sub last
else:
    # for example: 51 (46)
    # n = 4
  
    curr_dig = max
    while n > 0:
        dist = abs(n - dig) # <- 
        curr_dig -= 1
'''

x = 59
s = 7

string = input("Your Number: ")

# if int(string) > 1111111111 or int(string) < 19:
    # print(1111111111)
    # you can't get any bigger than this

nums = int(string)

def sum_s(s):
    return sum(list(map(int, list(str(s)))))

while sum_s(nums) != 10:
    nums -= 1

print(nums)