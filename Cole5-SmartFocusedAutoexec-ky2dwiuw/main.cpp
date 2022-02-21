#include <iostream>
#include <iomanip>
using namespace std;


bool bruhmomento(string str){
  int low = 0;
  int high = str.length() - 1;

while(low < high){
  if(str[low] != str[high]){
    return false;
  }
  low++;
  high--;
}
return true;
}


int main() {
int x, y;
cout << "Joe mama; ";
cin >> x;
string str = "Joe";

if(bruhmomento(str)){
  cout << "My boy.";
}
else {
  cout << "Not my boy...";
}
return 0;
} 