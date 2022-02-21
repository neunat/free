// deck.cpp
//
// @brief A class that represents a 52-card deck


#include <string>
#include <iostream>
#include "deck.h"

// Constructor
Deck::Deck()
{
  numberOfSetsInPlay = 0;
  numberOfCardsPerSetInPlay = 0;
  cardsInDeck = new Card[NUMBER_OF_CARDS_IN_DECK];
  Card* cardPtr = cardsInDeck;
  for(int i=0; i < NUMBER_OF_SUITS; i++) {
    for(int j=0; j < NUMBER_OF_CARDS_IN_SUIT; j++) {
      int cardAbsoluteValue = j + (i * NUMBER_OF_CARDS_IN_SUIT);
      cardsInDeck->set_value(j,i, cardAbsoluteValue);
      cardsInDeck->set_drawn(false);
      cardsInDeck++;
    }
  }
  cardsInDeck = cardPtr;
}

// Destructor
Deck::~Deck()
{
  delete[] cardsInDeck;
}

//
// Deck::deal_hand
//
void Deck::deal_hand(int sets, int cards)
{
  int numberOfCardsToDeal = sets * cards;
  if(numberOfCardsToDeal <= 0 ||  numberOfCardsToDeal > NUMBER_OF_CARDS_IN_DECK ){
      cout << "\n=== Invalid Number Of Cards To Deal =====\n";
  } else if( numberOfSetsInPlay == sets && numberOfCardsPerSetInPlay == cards ) {
    //consecutive deal with same number of sets and cards
    int m = 0;
    for(int i=0;i < sets;i ++){
      for( int j=0; j< cards; j++){
        cardsInPlay[m]->print();
        m++;
      }
      if( i != sets-1)
        cout << ",";
    }
  } else {
    // new deal
    undeal_hand();
    int randomCardIndex = rand() % NUMBER_OF_CARDS_IN_DECK;
    int m = 0;
    for(int i=0;i < sets;i ++){
      for( int j=0; j< cards; j++){
        while(cardsInDeck[randomCardIndex].get_drawn()){
          randomCardIndex = rand() % NUMBER_OF_CARDS_IN_DECK;
        }
        cardsInDeck[randomCardIndex].print();
        cardsInDeck[randomCardIndex].set_drawn(true);
        cardsInPlay[m] = &cardsInDeck[randomCardIndex];
        m++;
      }
      if( i != sets-1)
        cout << ",";
    }
    numberOfSetsInPlay = sets;
    numberOfCardsPerSetInPlay = cards;
  }
}

//
// Deck::print_deck
//
void Deck::print_deck()
{
  for(int i=0;i < NUMBER_OF_CARDS_IN_DECK;i++) {
    cardsInDeck[i].print();
  }
}

//
// Deck::shuffle
//
void Deck::shuffle(int seed)
{
  srand(seed);
  for (int i=0; i < NUMBER_OF_CARDS_IN_DECK ;i++)
  {
    int r = rand() % NUMBER_OF_CARDS_IN_DECK;
    Card tempCard = cardsInDeck[i];
    cardsInDeck[i] = cardsInDeck[r];
    cardsInDeck[r] = tempCard;
  }
  undeal_hand();
}

//
// Deck::undeal_hand
//
void Deck::undeal_hand()
{
  for (int i=0; i < NUMBER_OF_CARDS_IN_DECK ;i++)
  {
    cardsInDeck[i].set_drawn(false);
  }
  numberOfSetsInPlay = 0;
  numberOfCardsPerSetInPlay = 0;
}

//
// Deck::sort
//
void Deck::sort()
{
  Card cardToSwap;
  for(int i = 0; i < NUMBER_OF_CARDS_IN_DECK; i++) {
    for(int j = i+1; j < NUMBER_OF_CARDS_IN_DECK; j++)
    {
      if( cardsInDeck[j] < cardsInDeck[i] ) {
            cardToSwap = cardsInDeck[i];
            cardsInDeck[i] = cardsInDeck[j];
            cardsInDeck[j] = cardToSwap;
      }
    }
  }
}
