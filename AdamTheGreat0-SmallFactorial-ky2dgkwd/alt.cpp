#include <iostream>
#include <algorithm>
#include <climits>
#include <cmath>
#include <numeric>
#include <string>
#include <queue>
#include <ctime>
#include <bits/stdc++.h>
#include <iomanip>
#include <vector>
#include <stack>
using namespace std;
#define LL long long // Stands for Long Long
#define PL unsigned long long // Stands for Positive Long

int main() {
  int n, m;
  cin >> n >> m;
  double lens[n+2];
  for (int i = 0; i < n; i++) {
    cin >> lens[i];
  }
  lens[n] = 0;
  lens[n+1] = m;
  double result = 0.0;
  sort(lens, lens+n, greater<int>());
  for (int i = 0; i < n+1; i++) {
    if (i == 0 || i == n)
      result = max(result, (lens[i]-lens[i + 1]));
    else if ((lens[i]-lens[i + 1])/2 > result) {
      result = (lens[i]-lens[i+1])/2.0;
    }
  }
  cout << fixed << setprecision(10) << result << endl;
}
