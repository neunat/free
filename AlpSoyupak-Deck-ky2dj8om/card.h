// card.h
//
// @brief A class that represents a playing card
//
// @details
// This class is responsible for storing, printing and comparing a playing card.
//

#include <string>
#include <iostream>
using namespace std;

class Card 
{

public:

  // Suit enumeration
	enum Suit
	{
		DIAMONDS = 0,
		CLUBS = 1,
		HEARTS = 2,
		SPADES = 3
	};
	
	// value enumeration
	enum Value
	{
		ACE   = 0,
		TWO   = 1,
		THREE = 2,
		FOUR  = 3,
		FIVE  = 4,
		SIX   = 5,
		SEVEN = 6,
		EIGHT = 7,
		NINE  = 8,
		TEN   = 9,
		JACK  = 10,
		QUEEN = 11,
		KING  = 12
	};

	// Constructor
  	Card();
  
	// Destructor
  	~Card();
	
	// Returns the suit of the card.
	//
	// @return	The suit.
	Suit  get_suit()
	{
		return m_suit;
	}

	// Returns the state card is in.
	//
	// @return	The state of having been drawn or not.
  bool get_drawn()
  {
    return m_drawn;
  }

	// Returns the value of the card.
	//
	// @return	The value.
	Value get_value()
	{
		return m_value;
	}

  // Returns the absolute unique value of the card.
	//
	// @return	The absolute value.
  Value get_absoluteValue()
	{
		return m_absoluteValue;
	}

	// Compares if the card face value of two cards are equal.  
	// Does not take suit into consideration.
	//
	// @param[in]	rhs   The right hand side card.
	// @return	  true if equal.
	bool operator== (const Card& rhs);

	// Compares if the card face value of the left card is less than the right.  
	// Does not take suit into consideration.
	//
	// @param[in]	rhs   The right hand side card.
	// @return	  true if less than.
	bool operator< (const Card& rhs);

	// Compares if the card face value of the left card is less than or equal the right.  
	// Does not take suit into consideration.
	//
	// @param[in]	rhs   The right hand side card.
	// @return	  true if less than or equal.
	bool operator<= (const Card& rhs);

	// Compares if the card face value of the left card is greater than the right.  
	// Does not take suit into consideration.
	//
	// @param[in]	rhs   The right hand side card.
	// @return	  true if greater than.
	bool operator> (const Card& rhs);

	// Compares if the card face value of the left card is greater than or equal the right.  
	// Does not take suit into consideration.
	//
	// @param[in]	rhs   The right hand side card.
	// @return	  true if greater than or equal.
	bool operator>= (const Card& rhs);
  
	// Prints a single card to std out.
	void  print();	
  
	// Sets the value of the card.
	//
	// @param[in]	value The value of the card.
	// @param[in]	suit  The suit of the card.
  // @param[in]	absoluteValue  The absolute unique value of the card.
	void  set_value(Value value,Suit suit, Value absoluteValue)
	{
	  m_value = value;
	  m_suit = suit;
    m_absoluteValue = absoluteValue;
	}

	// Sets the value of the card.
	//
	// @param[in]	value The value of the card.
	// @param[in]	suit  The suit of the card.
  // @param[in]	absoluteValue  The absolute unique value of the card.
	void  set_value(int value,int suit, int absoluteValue)
	{
	  m_value = static_cast<Value>(value);
    m_absoluteValue = static_cast<Value>(absoluteValue);
	  m_suit = static_cast<Suit>(suit);
	}

	// Sets the state of the card.
	//
	// @param[in]	isDrawn The state of having been drawn or not.
  void set_drawn(bool isDrawn)
  {
    m_drawn = isDrawn;
  }

private:

	Suit  m_suit;   // The suit of the card
	Value m_value;  // The value of the card
  Value m_absoluteValue; // The absolute unique value of the card
  bool m_drawn; // The state of having been drawn or not.
};
