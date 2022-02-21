#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {
  HMM:
  system("clear");
  float total, increase = 35, start, weeks;

  cout << "Please enter the amount you would like to save for: ";
  cin >> total;
  cout << "Now enter the amount you start with: ";
  cin >> start;

  weeks = (total - start) / increase;
  cout << weeks;

}