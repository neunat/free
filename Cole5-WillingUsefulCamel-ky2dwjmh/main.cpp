#include <iostream> 
#include <fstream>
using namespace std;
const int NO_OF_JOES = 8;

struct menuItemType
{
    string menuItem;
    double menuPrice;
};


void readfile(ifstream& inFile, menuItemType mList[], int listSize);

int main()
{

  menuItemType menulist[NO_OF_JOES];
  ifstream inFile;

inFile.open("Ch9_EX4Data.txt");

if(!inFile){
  cout << "Joe is currently away." << endl;
}

readfile(inFile, menulist, NO_OF_JOES);
    return 0;
}

void readfile(ifstream& inFile, menuItemType mList[], int listSize){
  char ch;
for (int i =0; i < listSize; i++){
  getline(inFile, mList[i].menuItem);
  inFile >> mList[i].menuPrice;
  inFile.get(ch);
}
}

void display(ifstream& inFile, menuItemType mList[], int listSize){

}
