

#include <bits/stdc++.h>
using namespace std;
 

void permute(int A[], int P[], int n)
{
    
    for (int i = 0; i < n; i++) {
        int next = i;
 
        
        while (P[next] >= 0) {
 
        
            swap(A[i], A[P[next]]);
            int temp = P[next];
 
          
            P[next] -= n;
            next = temp;
        }
    }
}
 

int main()
{
    int A[] = { 5, 6, 7, 8 };
    int P[] = { 3, 2, 1, 0 };
    int n = sizeof(A) / sizeof(int);
 
    permute(A, P, n);
 
  
    for (int i = 0; i < n; i++)
        cout << A[i] << " ";
 
    return 0;
}