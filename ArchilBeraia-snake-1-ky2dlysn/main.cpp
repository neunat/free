#include <iostream>
#include <unistd.h>
#include <vector>
#include <random>
#include <ctime>
using namespace std;

void game() {
	srand(time(0));
	char c[12][40];
	for (int l = 0; l < 12; l++) {
		if (l == 0 || l == 11) {
			for (int i = 0; i < 40; i++) {
				c[l][i] = '_';
			}
		}
		else {
			for (int i = 0; i < 40; i++) {
				if (i == 0 || i == 39) {
					c[l][i] = '|';
				}
				else {
					c[l][i] = '-';
				}
			}
		}
	}
	vector<int> pl;
	pl.push_back(5);
	pl.push_back(19);
	int size = 1, sizel = 1, d = 0;
	bool x = true, y = false;
  char in;

	while (x == true) {
		for (int l = 0; l < 12; l++) {
			for (int i = 0; i < 40; i++) {
				cout << c[l][i];
			}
			cout << endl;
		}
		
		cout << endl;
    cin >> in;
		if (in == 'w') { d = 3; }
		if (in == 'a') { d = 2; }
		if (in == 's') { d = 1; }
		if (in == 'd') { d = 0; }

		if (d == 3) {
			pl.push_back(pl[pl.size() - 2] - 1);
			pl.push_back(pl[pl.size() - 2]);
			if (size == sizel) {
				c[pl[0]][pl[1]] = '-';
				pl.erase(pl.begin());
				pl.erase(pl.begin());
				sizel = size;
			}
		}
		if (d == 2) {
			pl.push_back(pl[pl.size() - 2]);
			pl.push_back(pl[pl.size() - 2] - 1);
			if (size == sizel) {
				c[pl[0]][pl[1]] = '-';
				pl.erase(pl.begin());
				pl.erase(pl.begin());
			}
		}
		if (d == 1) {
			pl.push_back(pl[pl.size() - 2] + 1);
			pl.push_back(pl[pl.size() - 2]);
			if (size == sizel) {
				c[pl[0]][pl[1]] = '-';
				pl.erase(pl.begin());
				pl.erase(pl.begin());
				sizel = size;
			}
		}
		if (d == 0) {
			pl.push_back(pl[pl.size() - 2]);
			pl.push_back(pl[pl.size() - 2] + 1);
			if (size == sizel) {
				c[pl[0]][pl[1]] = '-';
				pl.erase(pl.begin());
				pl.erase(pl.begin());
				sizel = size;
			}
		}
		sizel = size;
		bool X = false;
		while (X == false) {
			int a = rand() % 10 + 1, b = rand() % 38 + 1;
			if (y == false) {
				if (c[a][b] != '=') {
					y = true;
					X = true;
					c[a][b] = '*';
				}
			}
			else {
				X = true;
			}
		}
		if (c[pl[pl.size() - 2]][pl[pl.size() - 1]] == '=') {
			x = false;
			cout << "you lose" << endl;
			cout << "your score: " << size << endl;
		}
		if (c[pl[pl.size() - 2]][pl[pl.size() - 1]] == '-') {
			c[pl[pl.size() - 2]][pl[pl.size() - 1]] = '=';
		}
		if (c[pl[pl.size() - 2]][pl[pl.size() - 1]] == '*') {
			size++;
			y = false;
			c[pl[pl.size() - 2]][pl[pl.size() - 1]] = '=';
		}
		if (c[pl[pl.size() - 2]][pl[pl.size() - 1]] != '=') {
			x = false;
			cout << "you lose" << endl;
			cout << "your score: " << size << endl;
		}
		
	}
}

int main() {
	game();
}