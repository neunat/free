#include <iostream>

int main() {
  
  double weight;
  int x;

  std::cout << "What is your earth weight?\n";
  
  std::cin >> weight;

  std::cout << "Which planet would you like to vist?\n [1] Mercury\n [2] Venus\n [3] Mars\n [4] Jupiter\n [5] Saturn\n [6] Uranus\n [7] Neptune\n";
  std::cin >> x;


  if (x == 1) {
    
   weight =  weight * 0.78;
   }

   else if (x == 2) { 
     weight = weight * 0.39;
   }

   else if (x == 3) {
    weight = weight * 2.65;
   }

   else if (x == 4) { 
     weight = weight * 1.17;
   }

   else if (x == 5) { 
     weight = weight * 1.05;
   }

   else if (x == 6) { 
     weight = weight * 1.23;
   }

   std::cout << "\nYour weight: " << weight << "\n"; 
}

