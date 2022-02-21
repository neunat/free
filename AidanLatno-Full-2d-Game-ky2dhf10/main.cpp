#include <iostream>
#include <string>
#include <tgmath.h>
#include "options.h"
#include "menu.h"
#include "initialize.h"
#include "mainheader.h"

int main() {

	initialize();
	color("green");
	while(!GameOver)
	{
		switch(Area)
		{
			case 0:
			switch(MenuMain())
			{
				case 1:
					cout << "LEVELS" << endl;
				break;
				case 2:
					Area = 1;
				break;
				case 3:
					cout << "CHEATS" << endl;
				break;
				case 4:
					cout << "\033[31mAn error has occured!\nError code: 4 \nOccured in file \"menu.h\" >> \"MenuMain()\".\nAn incorrect input was given!" << endl;
					cout << "----Program terminating----" << endl;
					return 0;
				break;
				default:
					cout << "\033[31mUnexpected error occured in file \"menu.h\" >> \"MenuMain()\"." << endl;
					cout << "----Program terminating----" << endl;
					return 0;
				break;
			}
			break;
			case 1:
				OptionsMain();
			break;
		}
	}
	int lolX, lolY;
	cout << "PROGRAM RUN SUCCESSFULLY";
	return 0;
}
