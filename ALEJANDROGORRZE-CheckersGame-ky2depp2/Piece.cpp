#include <iostream>
#include <iomanip>
#include "Piece.h"
#include "Game.h"
using namespace std;
using namespace sf;

Piece::Piece() {}

Piece::Piece(checkertype col, int pos, Board &ref, Game &gref)
{
	// Create a Game Piece with Red or White Team at a Position Index
	color = col;
	position = pos;
	boardref = &ref;
	gameref = &gref;
	if (color == whiteteam) 
	{
		checkerShape.setFillColor(Color::White);
	}
	else 
	{
		checkerShape.setFillColor(Color::Red);
	}
	checkerShape.setOutlineColor(Color::Green);
	checkerShape.setOutlineThickness(0.f);
	checkerShape.setRadius(boardref->tileW * 0.4); // Sets Radius to 40% (0.4) of a Tile's Width
	checkerShape.setOrigin(-boardref->tileW * 0.1, -boardref->tileH * 0.1);
}

void Piece::drawPiece(RenderWindow &window) 
{
	checkerShape.setPosition(boardref->getTilePos(position));
	window.draw(checkerShape);
}

void Piece::outputStatus(vector<Piece> &checkerz)
{
	cout << endl;
	for (int i = 0; i < checkerz.size(); i++)
	{
		// Output Checker Values to Debug Console when Ran
		// Output Format is [Checker Position in Vector]:[Checker Index on Board](Team Color Initial)
		cout << setw(2) << setfill('0') << i << ":";
		cout << setw(2) << setfill('0') << checkerz[i].position;
		if (checkerz[i].color == redteam)
		{
			cout << "(R) ";
		}
		if (checkerz[i].color == whiteteam)
		{
			cout << "(W) ";
		}
		if (i % 4 == 3 && i + 1 != checkerz.size())
		{
			cout << endl;
		}
	}
	cout << endl << endl;
}

void Piece::update(vector<Piece*> &checkers, vector<Piece> &checkerz, Game &GameHandler, bool &declareWinner)
{
	// Update Function Is A Series of Functions that Organizes What Happens Each Game Loop
	selectPiece(checkerz);
	placePiece(checkers, checkerz, GameHandler, declareWinner);
}

void Piece::checkRedKing(vector<Piece> &checkerz)
{
	// King a Piece if Reaches Other Side
	if (position >= boardref->tileCount - boardref->tilesPerRow)
	{
		kinged = true;
		checkerShape.setFillColor(Color(165, 25, 75));
		cout << "Piece " << position << " KINGED!" << endl;
	}
}

void Piece::checkWhiteKing(vector<Piece> &checkerz)
{
	// King a Piece if Reaches Other Side
	if (position <= boardref->tilesPerRow - 1)
	{
		kinged = true;
		checkerShape.setFillColor(Color(200, 200, 255));
		cout << "Piece " << position << " KINGED!" << endl;
	}
}

void Piece::selectPiece(std::vector<Piece> &checkerz) 
{
	// Select Piece
	if (color == gameref->turnColor && boardref->pieceJumping == false && boardref->clickPos == position && selected == false && boardref->newClick == true) 
	{
		selected = true;
		checkerShape.setOutlineThickness(8.f);
		cout << "Piece " << position << " Selected" << endl;
	}
	// Deselect Piece
	else if (boardref->clickPos == position && selected == true && boardref->newClick == true) 
	{
		// Clicked on Piece Again
		selected = false;
		checkerShape.setOutlineThickness(0.f);
		cout << "Piece " << position << " Deselected" << endl;
		if (boardref->pieceJumping == true) 
		{
			// Player Ended Turn After Jumping By Deselect
			outputStatus(checkerz);
			gameref->changeTurn();
		}
		boardref->pieceJumping = false;
	}
}

void Piece::placePiece(std::vector<Piece*> &checkers, std::vector<Piece> &checkerz, Game &GameHandler, bool &declareWinner)
{
	// Check if Click is in Valid Location
	if (selected == true && boardref->clickPos != position) 
	{
		// Check to see if Move Position is Blocked By Another Piece
		bool pieceBlocked = false;
		for (Piece checker : checkerz) 
		{
			if (boardref->clickPos == checker.position && checker.alive) 
			{
				// Location is Blocked
				pieceBlocked = true;
				cout << "Piece " << position << " Blocked By Piece " << checker.position << endl;
				outputStatus(checkerz);
				break;
			}
		}
		// Piece is Not Blocked and the Position Clicked is a Black, Moveable Square
		if (pieceBlocked == false && boardref->tileTypes[boardref->clickPos] == black) 
		{
			if (color == redteam && kinged == false) 
			{
				// Red Moves Down
				if (boardref->pieceJumping == false && (boardref->clickPos == position + boardref->tilesPerRow - 1 || boardref->clickPos == position + boardref->tilesPerRow + 1)) 
				{
					// Valid Position, Move with no Jump
					checkerShape.setOutlineThickness(0.f);
					cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
					position = boardref->clickPos;
					checkRedKing(checkerz);
					selected = false;
					outputStatus(checkerz);
					gameref->changeTurn();
				}
				// Red Jumps Down and Left
				else if (boardref->clickPos == position + (boardref->tilesPerRow - 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos - (boardref->tilesPerRow - 1) == checkerz[i].position && checkerz[i].color == whiteteam) 
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							checkRedKing(checkerz);
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// Red Jumps Down and Right
				else if (boardref->clickPos == position + (boardref->tilesPerRow + 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos - (boardref->tilesPerRow + 1) == checkerz[i].position && checkerz[i].color == whiteteam)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							checkRedKing(checkerz);
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// Set "Else" Error Messages to Help Troubleshooting If Needed
				else
				{
					cout << "ERROR: Red, Unkinged Can't Move To That Position" << endl;
				}
			}
			else if (color == whiteteam && kinged == false) 
			{
				// White Moves Up
				if (boardref->pieceJumping == false && (boardref->clickPos == position - boardref->tilesPerRow - 1 || boardref->clickPos == position - boardref->tilesPerRow + 1)) 
				{
					// Valid Position, Move with no Jump
					checkerShape.setOutlineThickness(0.f);
					cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
					position = boardref->clickPos;
					checkWhiteKing(checkerz);
					selected = false;
					outputStatus(checkerz);
					gameref->changeTurn();
				}
				// White Jumps Up and Left
				else if (boardref->clickPos == position - (boardref->tilesPerRow + 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos + (boardref->tilesPerRow + 1) == checkerz[i].position && checkerz[i].color == redteam)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							checkWhiteKing(checkerz);
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// White Jumps Up and Right
				else if (boardref->clickPos == position - (boardref->tilesPerRow - 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos + (boardref->tilesPerRow - 1) == checkerz[i].position && checkerz[i].color == redteam)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							checkWhiteKing(checkerz);
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// Set "Else" Error Messages to Help Troubleshooting If Needed
				else
				{
					cout << "ERROR: White, Unkinged Can't Move To That Position" << endl;
				}
			}
			else if (kinged == true) 
			{
				// King Moves
				if (boardref->pieceJumping == false && (boardref->clickPos == position - boardref->tilesPerRow - 1 || boardref->clickPos == position - boardref->tilesPerRow + 1 || boardref->clickPos == position + boardref->tilesPerRow - 1 || boardref->clickPos == position + boardref->tilesPerRow + 1)) 
				{
					// Valid Position, Move with no Jump
					checkerShape.setOutlineThickness(0.f);
					cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
					position = boardref->clickPos;
					selected = false;
					outputStatus(checkerz);
					gameref->changeTurn();
				}
				// King Jumps Up and Left
				else if (boardref->clickPos == position - (boardref->tilesPerRow + 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos + (boardref->tilesPerRow + 1) == checkerz[i].position && checkerz[i].color != color)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// King Jumps Up and Right
				else if (boardref->clickPos == position - (boardref->tilesPerRow - 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos + (boardref->tilesPerRow - 1) == checkerz[i].position && checkerz[i].color != color)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// King Jumps Down and Left
				else if (boardref->clickPos == position + (boardref->tilesPerRow - 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos - (boardref->tilesPerRow - 1) == checkerz[i].position && checkerz[i].color != color)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// King Jumps Down and Right
				else if (boardref->clickPos == position + (boardref->tilesPerRow + 1) * 2) 
				{
					// Check Jump is Valid
					for (int i = 0; i < checkerz.size(); i++)
					{
						if (boardref->clickPos - (boardref->tilesPerRow + 1) == checkerz[i].position && checkerz[i].color != color)
						{
							// Check That There's an Enemy Piece to Jump Over
							pieceBlocked = true;
							// Valid Position, Move with Jump
							cout << "Piece " << checkerz[i].position << " Jumped" << endl;
							checkerz[i].alive = false;
							cout << "Piece " << checkerz[i].position << " Moved to Position " << boardref->tileCount << endl;
							checkerz[i].position = boardref->tileCount;
							cout << "Piece " << position << " Moved to Position " << boardref->clickPos << endl;
							position = boardref->clickPos;
							boardref->pieceJumping = true;
						}
						// Delete Any Checkers that Were Jumped from the Vector
						if (i < checkerz.size() && checkerz[i].alive == 0)
						{
							declareWinner = GameHandler.losePiece(checkerz[i].color);
							checkerz.erase(checkerz.begin() + i);
							checkers.erase(checkers.begin() + i);
						}
					}
				}
				// Set "Else" Error Messages to Help Troubleshooting If Needed
				else
				{
					cout << "ERROR: Kinged Can't Move To That Position" << endl;
				}
			}
			else
			{
				cout << "ERROR: Team Color or Kinged is Invalid" << endl;
			}
		}
		else if (boardref->pieceJumping == false)
		{
			checkerShape.setOutlineThickness(0.f);
			selected = false;
		}
		else
		{
			cout << "ERROR: Piece is Blocked or Tile is Invalid" << endl;
		}
	}
}