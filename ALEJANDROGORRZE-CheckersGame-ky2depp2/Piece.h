#pragma once
#include <SFML/Graphics.hpp>
#include "Board.h"
#include "Game.h"

class Piece 
{
	public:
		Board* boardref;
		Game* gameref;
		int position;
		bool alive = true;
		bool selected = false;
		checkertype color;
		bool kinged = false;
		sf::CircleShape checkerShape;

		Piece();
		Piece(checkertype col, int pos, Board &ref, Game &gref);
		void drawPiece(sf::RenderWindow &window);
		void outputStatus(std::vector<Piece> &checkerz);
		void update(std::vector<Piece*> &checkers, std::vector<Piece> &checkerz, Game &GameHandler, bool &declareWinner);
		void checkRedKing(std::vector<Piece> &checkerz);
		void checkWhiteKing(std::vector<Piece> &checkerz);
		void selectPiece(std::vector<Piece> &checkerz);
		void placePiece(std::vector<Piece*> &checkers, std::vector<Piece> &checkerz, Game &GameHandler, bool &declareWinner);
};