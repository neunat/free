#include <iostream>
#include <fstream>

using namespace std;

ifstream Book1;
ifstream Book2;
ifstream Book3;
ifstream Book4;

void readBook(int book_num) 
{
	if (book_num == 1) {
		//change all the Book1's to Book(NumberYouWant)'s

		Book1.open("BlackAir"); // change the text in here to the file you want to read

		string myline;
		if (Book1.is_open()) {
			while (Book1.good()) {
				getline (Book1, myline);
				cout << myline << '\n';
			}
		}
	}
	else if (book_num == 2) {
		Book2.open("TheSniper");
		string myline;
		if (Book2.is_open()) {
			while (Book2.good()) {
				getline (Book2, myline);
				cout << myline << '\n';
			}
		}
	
	}
	else if (book_num == 3) {
		Book3.open("Claws");
		string myline;
		if (Book3.is_open()) {
			while (Book3.good()) {
				getline (Book3, myline);
				cout << myline << '\n';
			}
		}
	
	}
    else if (book_num == 4) {
		Book4.open("none");
		string myline;
		if (Book4.is_open()) {
			while (Book4.good()) {
				getline (Book4, myline);
				cout << myline << '\n';
			}
		}
	
    }
	else {
		cout << "Bro are you okay in the head, that isn't an entry.\n(Are you registered in the mental health hospital?)";
	}
}

int main(int argc, const char* argv[]) 
{
	int choice; 
    printf("\033[0;32m");
  	cout << "What book would you like to read?\n";
    cout << "Black air(Unfinished, 1 page) --- 1\n";
    cout << "The Sniper(3 pages) --------------- 2\n";
    cout << "Claws(10 pages) ----------------- 3\n";
    cin >> choice;
    printf("\033[0;36m");
    readBook(choice);
    
	return 0;
} 