#include <iostream>

using namespace std;

/*
Define a struct computerType to store the following data about a computer: Manufacturer (string), model type (string), processor type (string), ram (int) in GB, hard drive size (int) in GB, year (int), and price (double).
*/
struct computerType{
  string manufacturer;
  string model;
  string processorType;
  int ram;
  int hardDriveSize;
  int year;
  double price;
};

int main() {
  computerType computer1;

  cout << "Enter the name of the manufacturer: ";
  getline(cin, computer1.manufacturer);
  cout << endl;
  cout << computer1.manufacturer;
} 