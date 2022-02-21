#include <iostream>
using namespace std;


int joe(int n){
if(n == 0){
  return 1;
} else{
  return n*joe(n - 1);
}
}


int main() {
int n;
cout << "Amogusk: ";
cin >> n;
cout << joe(n);
} 