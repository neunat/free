// deck.h
//
// @brief A class that represents a deck of playing cards
//
// @details
// This class is responsible for shuffling and dealing a deck of cards. The deck should
// contain 52 cards 2 - 10, Jack,Queen, King, Ace of four suits, but no jokers.
//

#include <string>
#include <iostream>
#include "card.h"
using namespace std;

class Deck
{

static const int NUMBER_OF_CARDS_IN_DECK = 52; //Number of cards in standard 52-card deck
const int NUMBER_OF_SUITS = 4; //Number of suits in standard 52-card deck
const int NUMBER_OF_CARDS_IN_SUIT= 13; //Number of cards per suite in standard 52-card deck

public:

	// Constructor
	Deck();

	// Destructor
	~Deck();

  // Prints specified number of unique random cards within specified number of sets
  // Two consecutive deals without a shuffle result in the same hand.
  //
	// @param[in]	sets The number of sets to place cards in.
  // @param[in]	cards The total number of unique random cards to be placed in sets.
	void deal_hand(int sets, int cards);

  // Prints the deck to std out.
	void print_deck();

  // Shuffles the deck randomly
	//
	// @param[in]	seed The value to be used for initializing the srand function.
	void shuffle(int seed);

  // Sorts the deck first by suit then by face card value, lowest to highest on both orderings
	// Uses standard bubble sort complexity
	void sort();

  // Sets the deck back into a state where no card is drawn
  void undeal_hand();

private:

	Card* cardsInDeck; // Pointer to card objects
  Card* cardsInPlay[NUMBER_OF_CARDS_IN_DECK]; // An array of pointers for tracking cards which have been dealt
  int numberOfSetsInPlay; // Variable for tracking number of sets in play
  int numberOfCardsPerSetInPlay; // Variable for tracking number of cards per set in play
};