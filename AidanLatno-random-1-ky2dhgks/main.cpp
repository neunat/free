#include <iostream>
#include <string>

using namespace std;

int main() {
  srand(time(NULL));
	string input;
	int truth = 0;
	int RandNum;

	while(true)
	{
		system("clear");
		if(truth == 0)
		{
			cout << "\033[32mTRUTH AVAILABLE!!!!!\033[0m" << endl << endl;
		}
		RandNum = rand() % 4 + 1;
		cout << "\033[33mAsking:\033[0m" << endl;
		switch(RandNum)
		{
			case 1:
				cout << "\033[34mAidan\033[0m" << endl << endl;
			break;
			case 2:
				cout << "\033[34mRico\033[0m" << endl << endl;
			break;
			case 3:
				cout << "\033[34mIvan\033[0m" << endl << endl;
			break;
			case 4:
				cout << "\033[34mGabby\033[0m" << endl << endl;
			break;
		}
		cout << "\033[31mDoing:\033[0m" << endl;
		RandNum = rand() % 4 + 1;
		switch(RandNum)
		{
			case 1:
				cout << "\033[34mAidan\033[0m" << endl;
			break;
			case 2:
				cout << "\033[34mRico\033[0m" << endl;
			break;
			case 3:
				cout << "\033[34mIvan\033[0m" << endl << endl;
			break;
			case 4:
				cout << "\033[34mGabby\033[0m" << endl;
			break;
		}
		cout << endl << "\033[35m[1] Reroll  [2] Continue\033[0m" << endl << "\033[36m> \033[0m";
		cin >> input;
		if(input == "2")
		{
			if(truth == 2)
				truth = 0;
			else
				truth++;
		}
	}
}

//Fuck you
