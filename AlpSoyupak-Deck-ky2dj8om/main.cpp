// main.cpp
//
// @brief This program simulates the shuffling, sorting and dealing of a set of cards.
//
// @details
// 
//
#include <iostream>
#include "deck.h"

using namespace std;

int main() 
{
  Deck deck;

  cout << "\n=== Shuffle Deck ==============================\n";
  deck.shuffle(15);  // use a seed value of 15
  deck.print_deck();

  cout << "\n=== Sorted Deck ==============================\n";
  deck.sort();
  deck.print_deck();

  cout << "\n=== Shuffled Again ==============================\n";
  deck.shuffle(34);  // use a seed value of 34
  deck.print_deck();

  cout << "\n=== Deal 3 sets of 5 cards ==============================\n";
  deck.deal_hand(3,5);

  cout << "\n=== Deal again ==============================\n";
  deck.deal_hand(3,5);

  cout << "\n=== Suffle and deal again ==============================\n";
  deck.shuffle(99);  // use a seed value of 99
  deck.deal_hand(3,5);

  cout << "\n";

  cout << "\n=== test second Shuffled Again ==============================\n";
deck.shuffle(34);  // use a seed value of 34
deck.print_deck();

cout << "\n=== test deal other cards ==============================\n";
deck.deal_hand(3,6);

cout << "\n=== test deal too many cards 1==============================\n";
deck.deal_hand(30,5);

cout << "\n=== test deal too many cards 2==============================\n";
deck.deal_hand(3,60);
}