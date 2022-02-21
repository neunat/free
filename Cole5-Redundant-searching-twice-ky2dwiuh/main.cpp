#include <iostream>
using namespace std;
void bruh(int arr[], int n){
int i, key, j;
for (i = 1; i < n; i++){
  key = arr[i];
  j = i - 1;
  while (j >= 0 && arr[j] > key){
    arr[j + 1] = arr[j];
    j = j-1;
  }
  arr[j + 1] = key;
}

for( int j = 0; j < n; j++){

  cout << arr[j] << endl;
}
}

int Binary(int arr[], int val, int low, int high){
  if (low > high){
    return -1;
  }
  int mid = (low + high)/2;
if(arr[mid] == val){
  return mid;
} else if (arr[mid] < val){
  return Binary(arr, val, mid + 1, high);
  } else {
    return Binary(arr, val, low, mid - 1);
  }
}

int bruhmomento2(int arr[], int l, int r, int x){
  if (r >= l){
    int mid = l + (r- l) / 2;
  
  if (arr[mid] == x)
    return mid;
  
  if (arr[mid] > x)
    return bruhmomento2(arr, l, mid - 1, x);
return bruhmomento2(arr, mid + 1, r, x);
}
return -1;
}









int main() {
int arr[] = {2, 3, 4, 6, 1, 5};
int n = sizeof(arr) / sizeof(arr[0]);
bruh(arr, n);
int x;
cout << "Please shearch for value: ";
cin >> x;
int result = bruhmomento2(arr, 0, n - 1, x); 
cout << "Brugh: " << result;


} 