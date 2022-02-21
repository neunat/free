# Files and exceptions

# Subroutine to write data to a text file
def WriteData():
    FileName = "program data.txt"
    TextFile = open(FileName,"w")
    TextFile.write("This is a simple way to save data...\n")
    TextFile.write("...one line at a time")
    TextFile.close()

# Main program
WriteData()