#include "header.h"

void PrintAges()
{
	cout << "   ";
	for(int Index = 1; Index < 29; Index++)
	{
		if(Index < 10)
			cout << Index << " ";
		else
			cout << Index;
	}
	cout << endl << "1  ";
	for(int x = 1; x < 24; x++)
	{
		for(int y = 1; y < 29; y++)
		{
			cout << Ages[x][y] << " ";
		}
		if(x + 1 < 10)
			cout << endl << x + 1 << "  ";
		else if(x + 1 < 24)
			cout << endl << x + 1 << " ";
	}
	cout << endl;
}

void PrintDiseaseAges()
{
	cout << "   ";
	for(int Index = 1; Index < 29; Index++)
	{
		if(Index < 10)
			cout << Index << " ";
		else
			cout << Index;
	}
	cout << endl << "1  ";
	for(int x = 1; x < 24; x++)
	{
		for(int y = 1; y < 29; y++)
		{
			cout << DiseaseAges[x][y] << " ";
		}
		if(x + 1 < 10)
			cout << endl << x + 1 << "  ";
		else if(x + 1 < 24)
			cout << endl << x + 1 << " ";
	}
	cout << endl;
}

void PrintDiseasesBinaries()
{
	cout << "   ";
	for(int Index = 1; Index < 29; Index++)
	{
		if(Index < 10)
			cout << Index << " ";
		else
			cout << Index;
	}
	cout << endl << "1  ";
	for(int x = 1; x < 24; x++)
	{
		for(int y = 1; y < 29; y++)
		{
			cout << Diseases[x][y] << " ";
		}
		if(x + 1 < 10)
			cout << endl << x + 1 << "  ";
		else if(x + 1 < 24)
			cout << endl << x + 1 << " ";
	}
	cout << endl;
}

void PrintResistanceBinaries()
{
	cout << "   ";
	for(int Index = 1; Index < 29; Index++)
	{
		if(Index < 10)
			cout << Index << " ";
		else
			cout << Index;
	}
	cout << endl << "1  ";
	for(int x = 1; x < 24; x++)
	{
		for(int y = 1; y < 29; y++)
		{
			cout << Resistance[x][y] << " ";
		}
		if(x + 1 < 10)
			cout << endl << x + 1 << "  ";
		else if(x + 1 < 24)
			cout << endl << x + 1 << " ";
	}
	cout << endl;
}

int FindOldest(string Return = "x")
{
	int OldestAge = 0;
	int OldestX = 0, OldestY = 0;
	for(int x = 0; x < 25; x++)
	{
		for(int y = 0; y < 30; y++)
		{
			if(Ages[x][y] > OldestAge)
			{
				OldestAge = Ages[x][y];
				OldestY = y;
				OldestX = x;
			}
		}
	}
	if(Return == "x")
		return OldestX;
	else if(Return == "y")
		return OldestY;
	else
		return OldestAge;
}

int ran(int high = 10, int amplifier = 1)
{
	int RandomNum = rand() % high + amplifier;
	return RandomNum;
}

void CountPopulation(int MinAge = 0)
{
	Population = 0;
	InfectedNum = 0;
	ResistanceNum = 0;
	NormalNum = 0;
	for(int x = 0; x < 25; x++)
	{
		for(int y = 0; y < 30; y++)
		{
			if(Ecosystem[x][y] == 'O' && Ages[x][y] >= MinAge)
			{
				Population++;
			}
			if(Diseases[x][y] == true)
			{
				InfectedNum++;
			}
			else if(Resistance[x][y] == true)
			{
				ResistanceNum++;
			}
			else if(Ecosystem[x][y] == 'O')
				NormalNum++;
		}
	}
}

void PrintEcosystem()
{
	CountPopulation();
	system("clear");
	for(int x = 0; x < 25; x++)
	{
		for(int y = 0; y < 30; y++)
		{
			if(Diseases[x][y])
				Color("red");
			if(Resistance[x][y])
				Color("gold");
			cout << Ecosystem[x][y] << " ";
			Color("green");
		}
		cout << endl;
	}
	cout << "Current Population: " << Population << endl;
	cout << "Current Amount Infected: " << InfectedNum << endl;
	cout << "Current Amount Clean: " << NormalNum << endl;
	cout << "Total Deaths: " << DeathsTotal << endl;
}

void GiveResistanceToAge(int SetAge = LifeExpectancy + 6)
{
	for(int x = 0; x < 25; x++)
	{
		for(int y = 0; y < 30; y++)
		{
			if(DiseaseAges[x][y] == SetAge)
			{
				Resistance[x][y] = true;
				Diseases[x][y] = false;
			}
		}
	}
}

void AgeIncrease(int Amplifier = 1)
{
	for(int x = 0; x < 25; x++)
	{
		for(int y = 0; y < 30; y++)
		{
			if(Ecosystem[x][y] == 'O')
			{
				Ages[x][y] += Amplifier;
			}
		}
	}
}

void OldAgeDeath()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			if(Ecosystem[x][y] == 'O' && Ages[x][y] > LifeExpectancy)
			{
				if(ran(10,1) <= 7)
				{
					Ecosystem[x][y] = ' ';
					Ages[x][y] = 0;
					Diseases[x][y] = 0;
					Died++;
					DeathsTotal++;
				}
			}
		}
	}
}

void DiseaseGiveRandom(int Amount = 1)
{
	int RandX, RandY;
	for(int Index = 0; Index < Amount; Index++)
	{
		RandX = ran(23,1);
		RandY = ran(28,1);
		if(Ecosystem[RandX][RandY] == 'O')
		{
			Diseases[RandX][RandY] = 1;
		}
	}
}

bool CheckForDiseases()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			if(Diseases[x][y] == true)
			{
				return true;
			}
		}
	}
	return false;
}

void ResetResistance()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			Resistance[x][y] = 0;
		}
	}
	ResistanceNum = 0;
}

void ResetAges()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			Ages[x][y] = 0;
		}
	}
}

void ResetDiseaseAges()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			DiseaseAges[x][y] = 0;
		}
	}
}

void ResetDisease()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			Diseases[x][y] = 0;
		}
	}
}

void SpreadDiseases(string Severity = "Sickness")
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			if(Diseases[x][y] == true)
			{
				if(Ecosystem[x - 1][y] == 'O' && !Resistance[x - 1][y])
					Diseases[x - 1][y] = true;
				if(Ecosystem[x + 1][y] == 'O' && !Resistance[x + 1][y])
					Diseases[x + 1][y] = true;
				if(Ecosystem[x][y - 1] == 'O' && !Resistance[x][y - 1])
					Diseases[x][y - 1] = true;
				if(Ecosystem[x][y + 1] == 'O' && !Resistance[x][y + 1])
					Diseases[x][y + 1] = true;
				if(Severity == "Pandemic")
				{
					if(Ecosystem[x + 1][y + 1] == 'O' && !Resistance[x + 1][y + 1])
						Diseases[x + 1][y + 1] = true;
					if(Ecosystem[x - 1][y + 1] == 'O'  && !Resistance[x - 1][y + 1])
						Diseases[x - 1][y + 1] = true;
					if(Ecosystem[x + 1][y - 1] == 'O' && !Resistance[x + 1][y - 1])
						Diseases[x + 1][y - 1] = true;
					if(Ecosystem[x - 1][y - 1] == 'O' && !Resistance[x - 1][y - 1])
						Diseases[x - 1][y - 1] = true;
				}
			}
		}
	}
}

void KillInfected()
{
	int DeathChance;
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			DeathChance = ran(4,1);
			if(Diseases[x][y] == true && DeathChance == 4)
			{
				Ecosystem[x][y] = ' ';
				Diseases[x][y] = 0;
				Ages[x][y] = 0;
				DiseaseAges[x][y] = 0;
				Died++;
				DeathsTotal++;
			}
		}
	}
}

void IncrementDiseaseAges()
{
	for(int x = 0; x < 24; x++)
	{
		for(int y = 0; y < 29; y++)
		{
			if(Diseases[x][y])
				DiseaseAges[x][y]++;
		}
	}
}

void ReproduceBalance()
{
	CountPopulation();
	ReproduceNormals = NormalNum / 2;
	ReproduceResistance = ResistanceNum / 2;
}

void Reproduce()
{
	int RandX, RandY;
	bool LocationFound = false;
	ReproduceBalance();
	while(ReproduceNormals > 0)
	{
		RandX = ran(23,1);
		RandY = ran(28,1);
		if(Ecosystem[RandX][RandY] != 'O')
		{
			Ecosystem[RandX][RandY] = 'O';
			ReproduceNormals--;
		}
		else
		{
			LocationFound = false;
			for(int x = RandX; x < 24 && !LocationFound; x++)
			{
				for(int y = RandY; y < 29 && !LocationFound; y++)
				{
					if(Ecosystem[x][y] != 'O')
					{
						Ecosystem[x][y] = 'O';
						LocationFound = true;
						ReproduceNormals--;
					}
				}
			}
		}
	}
	//Resistances
	while(ReproduceResistance > 0)
	{
		RandX = ran(23,1);
		RandY = ran(28,1);
		if(Ecosystem[RandX][RandY] != 'O')
		{
			Ecosystem[RandX][RandY] = 'O';
			Resistance[RandX][RandY] = 1;
			ReproduceResistance--;
		}
		else
		{
			LocationFound = false;
			for(int x = RandX; x < 24 && !LocationFound; x++)
			{
				for(int y = RandY; y < 29 && !LocationFound; y++)
				{
					if(Ecosystem[x][y] != 'O')
					{
						Ecosystem[x][y] = 'O';
						Resistance[x][y] = 1;
						LocationFound = true;
						ReproduceResistance--;
					}
				}
			}
		}
	}
}

void SimulateGeneration()
{
	Died = 0;
	CountPopulation();
	AgeIncrease();
	Reproduce();
	if(DoOldAge)
		OldAgeDeath();
	if(DoDiseases)
	{
		KillInfected();
		IncrementDiseaseAges();
		GiveResistanceToAge();
		if(!CheckForDiseases() && Years >= 5)
			DiseaseGiveRandom(5);
		else
		{
			if(ran(10,1) == 10)
				SpreadDiseases("Pandemic");
			else
				SpreadDiseases();
		}
	}
	Years++;
}

int main() {
	int ResetYear = 60;
	srand(time(NULL));
	Color("green");
	string Input;
	CountPopulation();
	PrintEcosystem();
	cout << "Years: " << Years << endl << endl;
	cout << "Life expectancy: " << LifeExpectancy << " years" << endl;
	cout << "Oldest age: " << FindOldest("age") << endl;
	cout << "Died of old age: " << Died << endl << endl;
	// PrintAges();
	// PrintDiseasesBinaries();
	// PrintResistanceBinaries();
	cin >> Input;
	while(true)
	{
		if(Years == ResetYear)
		{
			ResetResistance();
			ResetDiseaseAges();
			ResetYear += 60;
		}
		SimulateGeneration();
		CountPopulation();
		PrintEcosystem();
		cout << "Years: " << Years << endl;
		cout << "Life expectancy: " << LifeExpectancy << " years" << endl;
		cout << "Oldest age: " << FindOldest("age") << endl;
		cout << "Died of old age: " << Died << endl;
		// PrintAges();
		// PrintDiseasesBinaries();
		// PrintResistanceBinaries();
		cout << ReproduceNormals << endl;
		cin >> Input;
		if(Input == "1")
			LifeExpectancy = 1;
		else if(Input == "2")
			LifeExpectancy = 2;
		else if(Input == "3")
			LifeExpectancy = 3;
		else if(Input == "4")
			LifeExpectancy = 4;
		else if(Input == "5")
			LifeExpectancy = 5;
		else if(Input == "6")
			LifeExpectancy = 6;
		else if(Input == "7")
			LifeExpectancy = 7;
		else if(Input == "8")
			LifeExpectancy = 8;
		else if(Input == "9")
			LifeExpectancy = 9;
		else if(Input == "10")
			LifeExpectancy = 10;
		else if(Input == "dn")
			DoDiseases = true;
		else if(Input == "df")
			DoDiseases = false;

	}
} 
