using namespace std;

int ChoiceLocationX, ChoiceLocationY;
char OptionsArray[13][13] =
{
	{'|','|','|','|','|','|','|','|','|','|','|','|','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|','>','D','i','f','f','i','c','u','l','t','y','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','T','e','x','t',' ','s','p','e','e','d','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','S','e','t',' ','N','a','m','e',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','C','o','n','t','r','o','l','s',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ','D','i','s','p','l','a','y',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|','|','|','|','|','|','|','|','|','|','|','|','|'},
};

void PrintOptions()
{
	system("clear");
	for(int x = 0; x < 13; x++)
	{
		for(int y = 0; y < 13; y++)
		{
			cout << OptionsArray[x][y] << " ";
		}
		cout << endl;
	}
}

void LocateChoiceLocationOptions()
{
	for(int x = 0; x < 13; x++)
	{
		for(int y = 0; y < 13; y++)
		{
			if(OptionsArray[x][y] == '>')
			{
				ChoiceLocationX = x;
				ChoiceLocationY = y;
				return;
			}
		}
	}
}

void OptionsMain()
{
	LocateChoiceLocationOptions();
	char Input;
	while(true)
	{
		
		PrintOptions();
		cin >> Input;
		if(Input == 'W' || Input == 'w')
		{
			if(ChoiceLocationX == 2)
				OptionsArray[ChoiceLocationX][ChoiceLocationY] = ' ';
				ChoiceLocationX += 8;
		}
	}
}