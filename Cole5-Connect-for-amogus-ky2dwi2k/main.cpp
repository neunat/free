
#include <iostream>
using namespace std;
bool end = false;
int pieces[6][7];

         



void display(){
  for(int i = 0; i <= 5; i++){
    for(int j = 0; j <= 6 ; j++){
      cout << "|" << pieces[i][j];
    }
    cout << "|" << endl;
  }

}
bool gameitself(int a, int b){
int vertical = 1;
	int horizontal = 1;
	int diagonal1 = 1;
	int diagonal2 = 1;
	int i;
	int ii;
	for(i = a +1;pieces[i][b] == pieces[a][b] && i <= 5;i++,vertical++);
	for(i = a -1;pieces[i][b] == pieces[a][b] && i >= 0;i--,vertical++);
	if(vertical >= 4)return false;

	for(ii = b -1;pieces[a][ii] == pieces[a][b] && ii >= 0;ii--,horizontal++);
	for(ii = b +1;pieces[a][ii] == pieces[a][b] && ii <= 6;ii++,horizontal++);
	if(horizontal >= 4) return false;

	for(i = a -1, ii= b -1;pieces[i][ii] == pieces[a][b] && i>=0 && ii >=0; diagonal1++, i--, ii--);
	for(i = a +1, ii = b+1;pieces[i][ii] == pieces[a][b] && i<=5 && ii <=6;diagonal1++, i++, ii++);
	if(diagonal1 >= 4) return false;

	for(i = a -1, ii= b +1;pieces[i][ii] == pieces[a][b] && i>=0 && ii <= 6; diagonal2 ++, i--, ii++);
	for(i = a +1, ii= b -1;pieces[i][ii] == pieces[a][b] && i<=5 && ii >=0; diagonal2 ++, i++, ii--);
	if(diagonal2 >= 4) return false;
	return true;
}
void drop(int j, int i, int rowg, int turn){
  i= 5;
  j= 5;

  while(pieces[i][rowg] != 0){
    i = i - 1;
    turn = turn + 1;
  }
  while (pieces[j][rowg] != 0){
    j = j - 1;
    turn = turn - 1;
  }


  if (turn == 0){
  pieces[i][rowg] = 1;  
  }
  if (turn == 1){
  pieces[j][rowg] = 2;  
  }


}
int main(){

  int x, j, a, n, b, i, rowg;
  int turn = 0;
  display();
  do{
  cout << "Place red piece: ";
  cin >> rowg;
  drop(x, i, rowg, turn);
  turn = turn + 1;
  gameitself(a, b);
  display();
  cout << "Place yellow piece: ";
  cin >> rowg;
  drop(x, i, rowg, turn);
  turn = turn - 1;
  gameitself(a, b);
  display();    
  } while(gameitself(a, b) != false);


 




}



 