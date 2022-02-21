class University:
    pass

class NorthCarolina(University):
    state = "NC"

class NCSU(NorthCarolina):
    mascot = "WOLFPACK"
    def chant():
        print("GOPACK")

class UNC(NorthCarolina):
    mascot = "Tarheel"
    def chant():
        print("We are the worst")

class ECU(NorthCarolina):
    mascot = "Pirates"
    def chant():
        print("arghhhh")

class UNCC(NorthCarolina):
    mascot = "49ers"
    def chant():
        print("9erssssssssssss!")

class UNCW(NorthCarolina):
    mascot = "Seahawks"
    def chant():
        print("Cawcaw!")

class APP(NorthCarolina):
    mascot = "Mountaineers"
    def chant():
        print("Climb climb climb!")


n = NCSU
print(n.mascot)
n.chant()