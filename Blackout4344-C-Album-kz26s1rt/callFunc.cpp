#include <iostream>

void name_x_times(std::string name, int x);
 
int main() {
  
  std::string my_name = "Add your name here!";
  int some_number = 5; // Change this if you like!
  // Call name_x_times() below with my_name and some_number
  name_x_times("what\r]\n", 3);
  
}


void name_x_times(std::string name, int x) 
 {
  while (x > 0) {
     std::cout << name;
     x--;
   }
 }
