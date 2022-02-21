# Underground problem:
# Each line on the London underground has several stations. The Victoria line has these stations in the following order: Brixton, Stockwell, Vauxhall, Pimlico, Victoria, Green Park, Oxford Circus, Warren Street, Euston, King's Cross, Highbury & Islington, Finsbury Park, Seven Sisters, Tottenham Hale, Blackhorse Road and Walthamstow Central.
#
# Write a program that allows the user to input two stations. A function should return the number of stops between the two stations. The station names can be input in any order, but you can make the problem easier by only inputting stations in the correct order if you need to.
#
#
# Victoria Line
VictoriaLine=["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus", "Warren Street", "Euston", "King's Cross", "Highbury & Islington", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"]
 
def Print_Stations():
 for station in range(len(VictoriaLine)):
   print(VictoriaLine[station])
 
def stationPosition(station):
 # This should return the number of the station
 # e.g. If station = "Euston" should get 8
 # Linear search
 for stationNumber in range(len(VictoriaLine)):
   if VictoriaLine[stationNumber] == station:
     return stationNumber
 
 
def Check_Station(station):
 # Check the victoria line to see if the station exists
 return station in VictoriaLine
 
# Main program
Print_Stations()
 
# Get starting station
StartingStation = "Wrong"
 
# Check case - brixton v Brixton v BRIXTON
while StartingStation== "Wrong":
 S = input("Where are you starting from? ")
 if Check_Station(S):
   StartingStation=S
 else:
   print("That is not a valid station ")
 
 
# Get desitination
Destination = "Wrong"
while Destination == "Wrong":
 D = input("Where are you going to? ")
 if Check_Station(D) and D != StartingStation:
   Destination=D
 else:
   print("You are already there, you imbecile.")
 
 
 
# Display the route
#print (stationPosition(StartingStation))
#print (stationPosition(Destination))
 
# Display the number of stops
numberOfStops = stationPosition(Destination) - stationPosition(StartingStation)
print ("This will take ", numberOfStops, " stops")