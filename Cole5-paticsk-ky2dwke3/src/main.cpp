#include <iostream>
using namespace std;

void sort(int A){
  for(int j = 2 to A.length;){
   int key = A[j];
   int i = j - 1;
   while(i > 0 && A[i] > key;){
     A[i + 1] = A[i];
     i = i -1;
   }
   A[i + 1] = key;
  }
  

  }


int main() {

	return 0;
}