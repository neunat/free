#include <iostream>

using namespace std;

int main() {
  int i;
  char x;

RETRY:
	cout << "Please enter a number: ";
  if(!(cin >> i)){
    cin.clear();
    cin.ignore(10000, '\n');
    cout << "\033[31mERROR! ENTER A NUMBER!" << endl;
    cout << "Enter any character to continue: ";
    cin >> x;
    system("clear");
    goto RETRY;
  }
  cout << "\033[32mSuccessful!\n\n\n\n";
  goto RETRY;
}