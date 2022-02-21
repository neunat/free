#include <iostream>

int main() {
  // Add your code below  
  double weightOnMars;
  double weight;

  std::cout << "Enter your weight\n";
  std::cin >> weight;
  weightOnMars = (weight/9.81)*3.771;
  std::cout << "Your weight on mars would be " <<  weightOnMars  << "\n";
  
}