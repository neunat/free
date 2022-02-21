#pragma once
#include <SFML/Graphics.hpp>
#include <vector>

using namespace std;
using namespace sf;

enum tiletype 
{
	black,
	white
};

class Board 
{
	public:
		RectangleShape tileShape;
		int boardH, boardW;
		int tileH, tileW;
		int tilesPerRow;
		int tilesPerCol;
		int tileCount;
		vector<tiletype> tileTypes;
		int clickPos;
		bool newClick = false;
		bool pieceJumping = false;

		Board(RenderWindow &window, int height, int width, int tilesInRow, int tilesInCol);
		void drawBoard(RenderWindow &window);
		int getTileN(float x, float y);
		Vector2f getTilePos(int N);
};