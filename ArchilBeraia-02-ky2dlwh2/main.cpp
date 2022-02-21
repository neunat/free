#include <iostream>
#include <vector>
#include <string>
using namespace std;

void function() {
  vector <string> v;
  string word;
  int n, m[10];
  cin >> n;
  for(int i = 0; i < n; i++) {
    cin >> m[i];
    for (int l = 0; l < m[i]; l++) {
      cin >> word;
      v.push_back(word);
    }
  }
  for(int i = 0; i < n; i++) {
    for (int l = 0; l < m[i]; l++) {
      for (int p = 0; p < l; p++) {
        if (v[l] == v[p])
      }
    }
  }
}
int main() {
  function();
}