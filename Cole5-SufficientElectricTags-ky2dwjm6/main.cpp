#include <iostream>
#include <math.h>
using namespace std;


double joe(int fu, int n, int y){
fu = 1 + pow((n),n - y);
cout << fu;
return joe(fu, n, y);
}






int main(){
int n, y, fu;
cout << "Amogus imposter sussy: ";
cin >> n;
cout << "Number 1 less than that: ";
cin >> y;
joe(fu, n, y);
} 