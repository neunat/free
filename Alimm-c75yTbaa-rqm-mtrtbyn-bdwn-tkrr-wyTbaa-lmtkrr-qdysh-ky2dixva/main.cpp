#include <iostream>
#include <set> 
#include <vector>
#include <algorithm>
using namespace std;
int main() {
	vector<int>x;
	int i,m,z[10],p=0;
  cout << "Enter ten number.\n";
	for( i=0;i<10;i++){
		cout << i+1 <<") ";
		cin >> m;
		x.push_back(m);
	}
	sort(x.begin(),x.end());
	cout << x[0] << " ";
	for(i=1;i<10;i++){
		if(x[i]==x[i-1]){
			z[p]=x[i];
			p++;
		}else {
			cout << x[i] << " ";
		}
	}
	cout << "\n------------------\n";
	for(i=0;i<p;i++){
		cout << z[i]<< "\t";
	}
}