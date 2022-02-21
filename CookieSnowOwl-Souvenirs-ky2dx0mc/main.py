from os import system
TheInput = input("How many souvenirs are there in the market and what is Peter Pan's budget? Seperate your answers with a space:\n> ")
TheInputSplit = TheInput.split()
try:
  system("clear")
except:
  system("cls")
TheInput2 = input("What are the base prices of the souvenirs? List in order. Seperate with spaces:\n> ")
TheInput2Split = TheInput2.split()
MarketItems = int(TheInputSplit[0])
PeterBudget = int(TheInputSplit[1])
if PeterBudget < 1 or PeterBudget > 109:
  print("Your budget not be less than 1 or more than 109.")
  continueyn = False
elif MarketItems < 1 or MarketItems > 105:
  print("The number of souvenirs in the market is not less than one or more than 105.")
  continueyn = False
else:
  continueyn = True
print("continueyn is", continueyn)
def FigureOutPrice(indexof, baseprices, itemspurchased):
  return (int(baseprices[indexof])+(int(indexof)+1) * itemspurchased)#remember to subtract one
if continueyn:
  sumofallitems = 0
  for itemspurchased in range(1, len(TheInput2Split)+1):
    sumofallitems = 0
    for theindexof in range(1, itemspurchased):
      thepriceofitem = FigureOutPrice(theindexof-1, TheInput2Split, itemspurchased)
      print("thepriceofitem is", thepriceofitem)
      if sumofallitems + thepriceofitem > PeterBudget:
        print(theindexof, sumofallitems)
        break;
      else:
        sumofallitems += thepriceofitem