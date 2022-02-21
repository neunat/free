#include "Board.h"

Board::Board(RenderWindow &window, int height, int width, int tilesInRow, int tilesInCol) 
{
	boardH = height;
	boardW = width;
	tilesPerRow = tilesInRow;
	tilesPerCol = tilesInCol;
	tileCount = tilesPerCol * tilesPerRow;
	tileH = boardH / tilesPerCol;
	tileW = boardW / tilesPerRow;
	tileShape = RectangleShape(Vector2f(tileW, tileH));
	// Generate Vector for Tiles
	tileTypes = std::vector<tiletype>(tileCount);
	for (int i = 0; i < tileCount; i++) 
	{
		if ((i % 2 - (i / tilesPerRow) % 2) == 0) 
		{
			tileTypes[i] = white;
		}
		else 
		{
			tileTypes[i] = black;
		}
	}
}

////Left off here during class Aug 6


void Board::drawBoard(RenderWindow &window) 
{
	// Move a Single Rectangle Across the Board to Draw Tiles
	Vector2f tilePos;
	for (int i = 0; i < tileCount; i++) 
	{
		tilePos = getTilePos(i);
		tileShape.setPosition(tilePos);
		if (tileTypes[i] == white) 
		{
			tileShape.setFillColor(Color::White);
		}
		else 
		{
			tileShape.setFillColor(Color::Black);
		}
		window.draw(tileShape);
	}
}

int Board::getTileN(float x, float y) 
{
	// Find the Index Number Starting at (0,0) and Going Right then Down
	int tileX, tileY;
	tileX = int(x / tileW);
	tileY = int(y / tileH);
	return tileX + (tileY * tilesPerCol);
}

Vector2f Board::getTilePos(int N) 
{
	// Return Position of Tile's Origin in Pixels
	float posX, posY;
	posX = (N % tilesPerRow) * tileW;
	posY = (N / tilesPerCol) * tileH;
	return Vector2f(posX, posY);
}