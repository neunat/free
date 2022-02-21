#include <iostream>
#include "Game.h"
#include "Board.h"
#include "Piece.h"
using namespace std;
using namespace sf;

Game::Game(int startingPieces) 
{
	for (int i = 0; i < playerCount; i++)
	{
		pieceTotal[i] = startingPieces;
	}
		
	victoryFont.loadFromFile("Assets/arial.ttf");
	victoryText.setFont(victoryFont);
	victoryText.setFillColor(Color::Green);
	victoryText.setCharacterSize(60);
	victoryMsg[0] = "WHITE WINS!";
	victoryMsg[1] = "RED WINS!";

	turnIndicator.setFillColor(Color::Red);
	turnIndicator.setSize({40, 40});
	turnIndicator.setPosition({10, 10});
	turnIndicator.setOutlineColor(Color::Black);
	turnIndicator.setOutlineThickness(3.f);
	turnColor = redteam;
}

void Game::changeTurn() 
{
	// Increment Turn and Loop when Player Count Passed
	playerTurn++;
	if (playerTurn >= playerCount) 
	{
		playerTurn = 0;
	}
	switch (playerTurn) 
	{
		case 0:
			turnColor = redteam;
			cout << endl << "RED TEAM'S TURN" << endl;
			turnIndicator.setFillColor(Color::Red);
			break;
		case 1:
			turnColor = whiteteam;
			cout << endl << "WHITE TEAM'S TURN" << endl;
			turnIndicator.setFillColor(Color::White);
			break;
	}
}

void Game::drawTurn(RenderWindow &window) 
{
	window.draw(turnIndicator);
}

void Game::drawVictory(RenderWindow &window) 
{
	window.draw(victoryText);
}

bool Game::losePiece(checkertype color) 
{
	// Remove Piece from the Player's Total and Check if that Total becomes Zero
	pieceTotal[color]--;
	if (pieceTotal[color] == 0) 
	{
		victoryText.setString(victoryMsg[color]);
		return true;
	}

	return false;
}