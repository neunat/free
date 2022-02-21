#include <iostream>
#include <vector>

using namespace std;

int main() {
  
  vector<string> grocery = {"Hot Pepper Jam", "Dragon Fruit", "Brussel Sprouts"};
    
  // Add more 

vector<string> grocery2 = {"Hot Pepper Jam", "Dragon Fruit", "Brussel Sprouts"};

grocery.insert( grocery.end(), grocery2.begin(), grocery2.end() );

//  grocery.push_back("Lettuce");
  //grocery.push_back("Burger");
  //grocery.push_back("Patty");
  //grocery.push_back("Bread");
  
  cout << grocery.size() << "\n";
  
  
}