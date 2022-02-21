#include <iostream>
#include <string>
using namespace std;
int main() {
	int x,t;
  cout << "Enter anumber: ";
	cin >> x;
	int o=x;
	for(int i=0;i<x;i++,o--){
		for( t=0;t<i;t++){
			cout << " ";
		}
		t=0;
		for(int k=0;k<o*2-1;k++){
			cout << "*";
		}
		cout << endl;
	}
}