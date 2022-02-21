using namespace std;

	int Area = 0; //0 = main menu; 1 = Options; 2 = cheats; 3 = Level Select;
	int LevelUnlocked = 1;
	int Difficutly = 2; // 1 = easy 2 = normal 3 = hard
	bool GameOver = false;

void pow(int& Num, int power = 2)
{
	int IniNum = Num;
	for(int index = 1; index < power; index++)
		Num *= IniNum;
}
