#include <iostream>
#include <set>
#include <utility>
#include <string>
using namespace std;
int main() {
	set < pair <int,string> > z;
	set < pair <int,string> > ::iterator it;
	for(int i=0;i<3;i++){
		pair <int,string> c;
		cout << "Enter your name: ";
		cin >> c.second;
		cout << "Enter your ID: ";
		cin >> c.first;
		z.insert(c);
	}
	for(it=z.begin();it!=z.end();it++){
		cout << (*it).first << "\t....\t" << (*it).second<< endl;
	}
}