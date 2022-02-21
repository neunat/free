begin = int(input("Starting number > "))
end = int(input("Ending number > "))
power = int(input("Power to increase each number to > "))

result = 0

for i in range(end-begin+1):
    num = i+begin
    result += num**power

print(f"{begin}^{power} + {begin+1}^{power} + ... + {end-1}^{power} + {end}^{power} = {result}")