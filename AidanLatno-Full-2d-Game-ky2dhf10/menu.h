using namespace std;

char MenuArray[10][10] =
{
	{'|','|','|','|','|','|','|','|','|','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|','>','L','e','v','e','l','s',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','O','p','t','i','o','n','s','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','C','h','e','a','t','s',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|','|','|','|','|','|','|','|','|','|'}
};



void LocateChoiceMenu(int& X,int& Y)
{
	for(int x = 0; x < 10; x++)
	{
		for(int y = 0; y < 10; y++)
		{
			if(MenuArray[x][y] == '>')
			{
				X = x;
				Y = y;
				return;
			}
		}
	}
}



void PrintMenu()
{
	system("clear");
	cout << "  DUNGEON GAME 2D" << endl;
	for(int x = 0; x < 10; x++)
	{
		for(int y = 0; y < 10; y++)
		{
			cout << MenuArray[x][y] << " ";
		}
		cout << endl;
	}
	cout << "Type W or S then enter to move\ntype A then enter to select\n> " << endl;
}

int MenuMain()
{
	int ChoiceLocationX, ChoiceLocationY;
	string Input;
	while(true)
	{
		LocateChoiceMenu(ChoiceLocationX,ChoiceLocationY);
		PrintMenu();
		cin >> Input;
		if((Input == "S" || Input == "s"))
		{
			if(ChoiceLocationX == 6)
			{
				MenuArray[ChoiceLocationX][ChoiceLocationY] = ' ';
				ChoiceLocationX -= 4;
				MenuArray[ChoiceLocationX][ChoiceLocationY] = '>';
			}
			else
			{
				MenuArray[ChoiceLocationX][ChoiceLocationY] = ' ';
				ChoiceLocationX += 2;
				MenuArray[ChoiceLocationX][ChoiceLocationY] = '>';
			}
		}
		else if((Input == "W" || Input == "w"))
		{
			if(ChoiceLocationX == 2)
			{
				MenuArray[ChoiceLocationX][ChoiceLocationY] = ' ';
				ChoiceLocationX += 4;
				MenuArray[ChoiceLocationX][ChoiceLocationY] = '>';
			}
			else
			{
				MenuArray[ChoiceLocationX][ChoiceLocationY] = ' ';
				ChoiceLocationX -= 2;
				MenuArray[ChoiceLocationX][ChoiceLocationY] = '>';
			}
		}
		else if(Input == "A" || Input == "a")
		{
			switch(ChoiceLocationX)
			{
				case 2:
					//Levels
					return 1;
				break;
				case 4:
					//Options
					return 2;
				break;
				case 6:
					//Cheats
					return 3;
				break;
				default:
					return 4;
				break;
			}
		}
	}
	return 5;
}
