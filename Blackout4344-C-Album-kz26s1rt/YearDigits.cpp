#include <iostream>
using namespace std;
int main() {
  int x;
  double year = 0.0f;
  std::cout << "What year is it?" << endl;
  std::cin >> x;
  year = (double) x;
  double result = year / 1000.0f;
  if (result > 1) {
    std::cout << "Its a 4 digit number" << endl;
  }
  else {
    std::cout << "Enter a 4 digit number" << endl;
  }


return 0;

}
