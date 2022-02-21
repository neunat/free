#include <iostream>
#include <algorithm>
#include <climits>
#include <cmath>
#include <numeric>
#include <string>
#include <iomanip>
#include <vector>
#include <stack>
#include <map>
#include <queue>
#include <ctime>
#include <bits/stdc++.h>
using namespace std;
#define LL unsigned long long
#define str string
#define input cin
#define output cout

int sumofdigits(int n) {
  int result = 0;
  while (n != 0) {
    result+=n%10;
    n/=10;
  }
  return result;
}

int main() {
  clock_t time_req = clock();
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    int n, digits=1;
    cin >> n;
    int s = to_string(n).size();
    for (int j = 1; j < s; j++) {
      digits*=10;
    }
    bool found = false;
    for (int j = n-45; j<n; j++) {
      if (j+sumofdigits(j) == n) {
        cout << j << endl;
        found = true;
        break;
      }
    }
    if (!found) {
      cout << 0 << endl;
    }
  }
  // cout << "Total elasped time to calculate and print out " << t << " outputs: " << clock()-time_req << " milliseconds  or " << double((clock()-time_req)/100000.0) << " seconds. Task completed succesfully. Return value: 0" << endl;
  return 0;
}