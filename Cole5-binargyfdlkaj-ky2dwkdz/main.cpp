#include <iostream>
using namespace std;

int Binary(int A[], int val, int low, int high){
  if (low > high){
    return -1;
  }
  int mid = (low + high)/2;
if(A[mid] == val){
  return mid;
} else if (A[mid] < val){
  return Binary(A, val, mid + 1, high);
  } else {
    return Binary(A, val, low, mid - 1);
  }
}





int main() {

} 