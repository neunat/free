#include <ctime>
#include <chrono>
#include <thread>

using namespace std;

int health = 100;

void initialize()
{
	srand(time(NULL));
}

void slow_print(const string message, int milPerChar = 60) {
  for (const char c : message) {
    cout << c << flush;
    this_thread::sleep_for(chrono::milliseconds(milPerChar));
  }//end of delay for
}//end of slow print function

void ran(int &a, int high = 10, int low = 1)
{
  a = rand() % high + low;
}

void color(string color = "NA")
{
	if(color == "NA")
		cout << "\033[0m";
	else if(color == "black")
		cout << "\033[30m";
	else if(color == "red")
		cout << "\033[31m";
	else if(color == "green")
		cout << "\033[32m";
	else if(color == "gold")
		cout << "\033[33m";
	else if(color == "blue")
		cout << "\033[34m";
	else if(color == "purple")
		cout << "\033[35m";
	else if(color == "cyan")
		cout << "\033[36m";
}