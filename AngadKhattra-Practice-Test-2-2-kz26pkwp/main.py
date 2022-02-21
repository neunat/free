import random
todaysbatch = ("chocolate","plain","honey cruller") #these are the donuts you'll be receiving
supplystock = (10,10,15) #these are the quantities you'll receive whose index matches the batch flavours
donuts = {} #this represents donuts you have in the storefront
donutstock = {"chocolate":10, "plain":10, "honey cruller":15}

print("Today, the donut stock is ", donutstock)

x = random.randrange(0,10)
y = random.randrange(0,10)
z = random.randrange(0,15)
print("Today we made the following sales: \n" + str(x) + " chocolate donuts \n" + str(y) + " plain donuts \n" + str(z) + " honey cruller donuts\n")
new_stock1 = donutstock["chocolate"] - int(x)

new_stock2 = donutstock["plain"] - int(y) 

new_stock3 = donutstock["honey cruller"] - int(z)



donuts = {"chocolate":new_stock1, "plain":new_stock2, "honey cruller":new_stock3}
print("Our current donut stock is: \n", donuts)