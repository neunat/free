#include <iostream>
#include <string>

using namespace std;

int main() {
	srand(time(NULL));
  string color[6] = {"\033[41m", "\033[43m", "\033[42m", "\033[44m", "\033[46m", "\033[45m"};
  bool choice;
  int randomIndex = 3;

  cout << "Random or organized(1 for random and 0 for organized): ";
  cin >> choice;

  if(!choice)
    for(int counter = 0; counter < 1000; counter++)
      for(int count = 0; count < 6; count++)
        cout << color[count] << "                                                                                    \033[0m" << endl;
  else if(choice){
    for(int index = 0; index < 100000000; index++){
      randomIndex = rand() % 6;
      cout << color[randomIndex] << " ";
    }
  }

  return 0;
}
/*
\033[31m  -  red
\033[32m  -  green
\033[33m  -  orange
\033[34m  -  blue
\033[35m  -  purple
\033[36m  -  cyan

*/