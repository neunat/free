//////////////////////////////////////
// CREATED BY AIDAN LATNO						//
// 2D WORLD CREATION CONECEPTS			//
//////////////////////////////////////
/*
	{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'},
	{'|','p','g',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
	{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'}
*/
#include <iostream>
#include <string>
#include <ctime>

using namespace std;

bool life = true;
char i;
int xAxis = 0, yAxis = 0;
int enemyX = 0, enemyY = 0;
int tempX = 0, tempY = 0;
int gold = 0, goldAmount = 0, enemyAmout = 0;
const int levelAmount = 3;
int levelNum = 0, levelEnemyAmount[levelAmount];
int direction = 0, directionChase = 0;

// "." = empty space
// "p" = player
// "|" = wall
// "g" = gold
// "e" = enemy
char levels[levelAmount][20][20] =
{
	{//level 0
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'},
		{'|','p',' ','|',' ',' ',' ',' ',' ','|',' ','g','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ','|','|','|',' ','|',' ',' ','|',' ','|','|','|',' ',' ','|'},
		{'|',' ',' ','|',' ','|','g','|',' ','|',' ',' ','|',' ',' ','g','|',' ',' ','|'},
		{'|',' ',' ','|',' ','|',' ','|',' ','|',' ',' ','|','|','|','|','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ','|',' ','|',' ',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|','|','|','|','|',' ','|',' ',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ','|',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ','|','|','|','|','|',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ','g','|',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|','|','|','|',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|','g',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|',' ',' ','|'},
		{'|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|','g','g','|'},
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'}
	},
	{//level 1
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'},
		{'|','p','|',' ',' ',' ',' ',' ','|','g',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|','|','|',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|','g','|',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ',' ',' ','|','g','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ',' ','|',' ',' ','|','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|','|',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ',' ','|',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|','|',' ','|',' ',' ','|',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|','|','|','|',' ','|',' ','|','|','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ',' ',' ',' ','|',' ','|',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ',' ',' ','|',' ','|',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|','|','|',' ','|','g','|',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|',' ',' ',' ','|','|','|',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ','|','|',' ','|','|','g','|',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|',' ',' ','|',' ',' ',' ',' ','|',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','|','|',' ','|','|','|','|','|','|',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ','g','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'}
	},
	{
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'},
		{'|','p',' ','|',' ',' ',' ',' ',' ','g',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ',' '},
		{' ',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'},
		{'|',' ',' ','|',' ',' ',' ',' ',' ',' ',' ',' ','|',' ',' ',' ',' ',' ',' ','|'},
		{'|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|','|'}
	}
};

void enemyRandomGeneration(int loops = 1){
	for(int index = 1; index <= loops;){
		tempX = rand() % 20;
		tempY = rand() % 20;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][tempX][tempY] = 'e';
			index++;
		}
	}
}

void goldRandomGeneration(int loops = 1){
	for(int index = 1; index <= loops;){
		tempX = rand() % 20;
		tempY = rand() % 20;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][tempX][tempY] = 'g';
			index++;
		}
	}
}

void playerLocate(){
	for(int x = 0; x < 20; x++){
		for(int y = 0; y < 20; y++){
			if(levels[levelNum][x][y] == 'p'){
				xAxis = x;
				yAxis = y;
				break;
			}
		}
	}
}

void print(){
	cout << "|**************-LEVEL " << levelNum + 1 << "-**************|" << endl;
	for(int x = 0; x < 20; x++){
		for(int y = 0; y < 20; y++){
			cout << levels[levelNum][x][y] <<  " ";
		}
		cout << endl;
	}
	playerLocate();
	cout << "X: " << xAxis << " Y: " << yAxis << endl << "GOLD: " << gold << endl << "GOLD LEFT: " << goldAmount << endl << "ENEMYS LEFT: " << enemyAmout << endl;
	cout << "\nType /help for help" << endl;
}

void movementController(){
	string input;
	playerLocate();
	tempX = xAxis;
	tempY = yAxis;
	cin >> input;
	if(input == "/help"){
		cout << "Type in either W, A, S, or D then press enter to move the player(p)\nIf the player runs into an enemy(e), you will die.\nIf an enemy runs into another enemy, it will die.\nTo win you must collect all the gold(g).\n" << endl;
		cout << "Enter any character to continue: ";
		cin >> input;
	}
	if(input == "a" || input == "A"){
		tempY--;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][xAxis][yAxis] = ' ';
			yAxis--;
			levels[levelNum][xAxis][yAxis] = 'p';
		}
		else if(levels[levelNum][tempX][tempY] == 'g'){
			levels[levelNum][xAxis][yAxis] = ' ';
			yAxis--;
			levels[levelNum][xAxis][yAxis] = 'p';
			gold++;
		}
		else if(levels[levelNum][tempX][tempY] == 'e'){
			levels[levelNum][xAxis][yAxis] = ' ';
			life = false;
		}
		else{
			cout << "YOU CANNOT MOVE THAT WAY" << endl;
			cin >> i;
		}
	}
	else if(input == "d" || input == "D"){
		tempY++;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][xAxis][yAxis] = ' ';
			yAxis++;
			levels[levelNum][xAxis][yAxis] = 'p';
		}
		else if(levels[levelNum][tempX][tempY] == 'g'){
			levels[levelNum][xAxis][yAxis] = ' ';
			yAxis++;
			levels[levelNum][xAxis][yAxis] = 'p';
			gold++;
		}
		else if(levels[levelNum][tempX][tempY] == 'e'){
			levels[levelNum][xAxis][yAxis] = ' ';
			life = false;
		}
		else{
			cout << "YOU CANNOT MOVE THAT WAY" << endl;
			cin >> i;
		}
	}
	else if(input == "w" || input == "W"){
		tempX--;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][xAxis][yAxis] = ' ';
			xAxis--;
			levels[levelNum][xAxis][yAxis] = 'p';
		}
		else if(levels[levelNum][tempX][tempY] == 'g'){
			levels[levelNum][xAxis][yAxis] = ' ';
			xAxis--;
			levels[levelNum][xAxis][yAxis] = 'p';
			gold++;
		}
		else if(levels[levelNum][tempX][tempY] == 'e'){
			levels[levelNum][xAxis][yAxis] = ' ';
			life = false;
		}
		else{
			cout << "YOU CANNOT MOVE THAT WAY" << endl;
			cin >> i;
		}
	}
	else if(input == "s" || input == "S"){
		tempX++;
		if(levels[levelNum][tempX][tempY] == ' '){
			levels[levelNum][xAxis][yAxis] = ' ';
			xAxis++;
			levels[levelNum][xAxis][yAxis] = 'p';
		}
		else if(levels[levelNum][tempX][tempY] == 'g'){
			levels[levelNum][xAxis][yAxis] = ' ';
			xAxis++;
			levels[levelNum][xAxis][yAxis] = 'p';
			gold++;
		}
		else if(levels[levelNum][tempX][tempY] == 'e'){
			levels[levelNum][xAxis][yAxis] = ' ';
			life = false;
		}
		else{
			cout << "YOU CANNOT MOVE THAT WAY" << endl;
			cin >> i;
		}
	}
}

bool areaCheck(int object1X = xAxis, int object1Y = yAxis, char object2 = 'e')
{
	tempX = object1X;
	tempY = object1Y;
	if(levels[levelNum][tempX-1][tempY] == object2)
	{
		directionChase = 1;
		return true;
	}
	else if(levels[levelNum][tempX+1][tempY] == object2)
	{
		directionChase = 2;
		return true;
	}
	else if(levels[levelNum][tempX][tempY-1] == object2)
	{
		directionChase = 3;
		return true;
	}
	else if(levels[levelNum][tempX][tempY+1] == object2)
	{
		directionChase = 4;
		return true;
	}
	else
		return false;
}//NOT DONE! WILL CHECK AREA AROUND OBJECT FOR ANOTHER OBJECT

void getGoldAmount(){
	goldAmount = 0;
	for(int x = 0; x <= 19; x++){
		for(int y = 0; y <= 19; y++){
			if(levels[levelNum][x][y] == 'g')
				goldAmount++;
		}
	}
}

void getEnemyAmount(){
	enemyAmout = 0;
	for(int x = 0; x <= 19; x++){
		for(int y = 0; y <= 19; y++){
			if(levels[levelNum][x][y] == 'e')
				enemyAmout++;
		}
	}
}

int getEnemyPosition(int id = 1, bool StoreCloseToPlayer = false){
	int idCounter = 1;
	for(int x = 0; x <= 19; x++){
		for(int y = 0; y <= 19; y++){
			if(levels[levelNum][x][y] == 'e'){
				if(idCounter == id)
				{
					enemyX = x;
					enemyY = y;
					return 0;
				}
				else
					idCounter++;
			}
		}
	}
	return 0;
}

void enemyAI(){
	if(!areaCheck(enemyX,enemyY,'p'))
	{
		direction = rand() % 4 + 1;
		tempX = enemyX;
		tempY = enemyY;
		if(direction == 1){
			tempX--;
			if(levels[levelNum][tempX][tempY] == ' '){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
			}
			else if(levels[levelNum][tempX][tempY] == 'p'){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
				life = false;
			}
			else if(levels[levelNum][tempX][tempY] == 'e')
				levels[levelNum][enemyX][enemyY] = ' ';
		}
		else if(direction == 2){
			tempX++;
			if(levels[levelNum][tempX][tempY] == ' '){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
			}
			else if(levels[levelNum][tempX][tempY] == 'p'){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
				life = false;
			}
			else if(levels[levelNum][tempX][tempY] == 'e')
				levels[levelNum][enemyX][enemyY] = ' ';
		}
		else if(direction == 3){
			tempY--;
			if(levels[levelNum][tempX][tempY] == ' '){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
			}
			else if(levels[levelNum][tempX][tempY] == 'p'){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
				life = false;
			}
			else if(levels[levelNum][tempX][tempY] == 'e')
				levels[levelNum][enemyX][enemyY] = ' ';
		}
		else if(direction == 4){
			tempY++;
			if(levels[levelNum][tempX][tempY] == ' '){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
			}
			else if(levels[levelNum][tempX][tempY] == 'p'){
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX = tempX;
				enemyY = tempY;
				levels[levelNum][enemyX][enemyY] = 'e';
				life = false;
			}
			else if(levels[levelNum][tempX][tempY] == 'e')
				levels[levelNum][enemyX][enemyY] = ' ';
		}
	}
	else
	{
		switch(directionChase)
		{
			case 1:
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX--;
				if(levels[levelNum][enemyX][enemyY] == 'p')
					life = false;
				levels[levelNum][enemyX][enemyY] = 'e';
				cout << endl << "SUB X/CASE 1" << endl;
			break;
			case 2:
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyX++;
				if(levels[levelNum][enemyX][enemyY] == 'p')
					life = false;
				levels[levelNum][enemyX][enemyY] = 'e';
				cout << endl << "ADD X/CASE 2" << endl;
			break;
			case 3:
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyY--;
				if(levels[levelNum][enemyX][enemyY] == 'p')
					life = false;
				levels[levelNum][enemyX][enemyY] = 'e';
				cout << endl << "SUB Y/CASE 3" << endl;
			break;
			case 4:
				levels[levelNum][enemyX][enemyY] = ' ';
				enemyY++;
				if(levels[levelNum][enemyX][enemyY] == 'p')
					life = false;
				levels[levelNum][enemyX][enemyY] = 'e';
				cout << endl << "ADD Y/CASE 4" << endl;
			break;
			default:
				cout << "ERROR: RAN WITHOUT A CORRECT DIRECTION VALUE" << endl << "DIRECTION CHASE VALUE: " << directionChase << endl;
			break;
		}
	}
}// 1 = up, 2 = down, 3 = left, 4 = right

void gameInitialize(){
	srand(time(NULL));
	system("clear");
	playerLocate();
}

int main() {
	LEVELSTART:
	gameInitialize();
	enemyRandomGeneration(5 + levelNum * 5);
	while(life){
		getEnemyAmount();
		getGoldAmount();
		if(goldAmount == 0){
			system("clear");
			levelNum++;
			goto LEVELSTART;
		}
		for(int index = 1; index <= enemyAmout; index++){
			getEnemyPosition(index);
			enemyAI();
		}
		print();
		cout << endl << "> ";
		movementController();
		system("clear"); 
	}
	cout << "YOU DIED!" << endl;
	return 0;
}