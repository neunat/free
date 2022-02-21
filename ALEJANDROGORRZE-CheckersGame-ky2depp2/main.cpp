#include <SFML/Graphics.hpp>
#include <iostream>
#include "Board.h"
#include "Game.h"
#include "Piece.h"

using namespace std;
using namespace sf;

const int windowW = 480;
const int windowH = 480;
const int tilesPerRow = 8;
const int tilesPerCol = 8;

int main()
{
	RenderWindow window(VideoMode(windowW, windowH), "Checkers");

	Board GameBoard(window, windowW, windowH, tilesPerRow, tilesPerCol);

	int piecesPerTeam = (tilesPerRow / 2) * 3;
	Game GameHandler(piecesPerTeam);
	bool declareWinner = false;

	// Vector that Contains All Checkers
	vector<Piece> checker;
	// Pointers for Each Checker
	vector<Piece*> checkerPtr;
	// Spawn Checkers
	int spawnPos;
	for (int i = 0; i < piecesPerTeam; i++) 
	{
		spawnPos = (2 * i + 1) - (i / (tilesPerRow / 2)) % 2;
		checker.push_back(Piece(redteam, spawnPos, GameBoard, GameHandler));
		cout << "Red Piece " << spawnPos << " Added" << endl;
		checker.push_back(Piece(whiteteam, (GameBoard.tileCount - 1) - spawnPos, GameBoard, GameHandler));
		cout << "White Piece " << (GameBoard.tileCount - 1) - spawnPos << " Added" << endl;
		
	}
	for (Piece &p : checker) checkerPtr.push_back(&p);
	cout << endl << "LET THE GAME BEGIN!" << endl << endl << "RED TEAM'S TURN" << endl;

	while (window.isOpen())
	{
		window.clear();
		GameBoard.newClick = false;

		Event event;
		while (window.pollEvent(event))
		{
			if (event.type == Event::Closed)
			{
				window.close();
			}
			if (event.type == Event::KeyPressed) 
			{
				if (event.key.code == Keyboard::Escape)
					window.close();
			}
			if (event.type == Event::MouseButtonPressed) 
			{
				if (event.mouseButton.button == Mouse::Left) 
				{
					// Register New Clicks for Piece Select Function
					GameBoard.newClick = true;
					// Find Time That Was Clicked In
					GameBoard.clickPos = GameBoard.getTileN(Mouse::getPosition(window).x, Mouse::getPosition(window).y);
				}
			}
		}

		GameBoard.drawBoard(window);
		GameHandler.drawTurn(window);

		// Update Each Checker Piece
		for (int i = 0; i < checker.size(); i++) 
		{
			checker[i].update(checkerPtr, checker, GameHandler, declareWinner);
		}
		// Draw Checkers in Seperate Loop to Avoid "Subscript Out Of Range" if Checker Jumped
		for (int i = 0; i < checker.size(); i++)
		{
			checker[i].drawPiece(window);
		}
		// Display Victory Message if Game is Over
		if (declareWinner)
		{
			GameHandler.drawVictory(window);
			//if (GameHandler.pieceTotal[redteam] == 0)
			//{
			//	cout << "GAME OVER: WHITE TEAM WINS!!!" << endl;
			//}
			//if (GameHandler.pieceTotal[whiteteam] == 0)
			//{
			//	cout << "GAME OVER: RED TEAM WINS!!!" << endl;
			//}
		}
			
		window.display();
	}

	return 0;
}