#include <iostream>
using namespace std;
void borg(double bro[][3], int row, int col){
int sum = 0;
for(int i = 0; i < row; i++){
  for(int j = 0; j < col; j++){
    sum = sum + bro[i][j];
 if (sum == 1){
   cout << "da normie da matickz." << endl;
 } else{
   cout << "joe momba " << endl;
 }
  }
}

}



int main() {
double bro[3][3]{{0.3, 0.7, 0},
                 {0.4, 0.3, 1},
                 {0.3, 0, 0}};
int row = sizeof(bro)/ sizeof(bro[0]);
int col = sizeof(bro[0])/ sizeof(bro[0][0]);
borg(bro, row, col);           
} 