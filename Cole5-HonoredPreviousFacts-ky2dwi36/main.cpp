#include <iostream>
using namespace std;

void amogus(double matrix[][3], double row, double col){
  int sum = 0;
  for(int i = 0; i < row; i++){
    for(int j = 0; j < col; j++){
  sum = sum + matrix[i][j];
    cout << sum << endl;
  }
}

}





int main() {
double matrix[3][3]{{1, 2, 4},
                    {1, 7, 10},        
                    {1, 3, 68}};
int row = sizeof(matrix)/ sizeof(matrix[0]);
int col = sizeof(matrix[0])/ sizeof(matrix[0][0]);
amogus(matrix, row, col);
} 