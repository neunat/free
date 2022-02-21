#include <iostream>
#include <vector>

// Define first_three_multiples() here:

std::vector<int> first_three_multiples(int num)
{
  std::vector<int> multiples;
  for (int ix=1; ix < 11; ix++){
    multiples.push_back(num*ix);
  }
  return multiples;
}

int main() {
  
  for (int element : first_three_multiples(4)) {
    std::cout << element << "\n";
  }
  
}