package com.chess.engine.board;


public abstract class Main {

 int titleCoordinate;
Main(int titleCoordinate) {
  this.titleCoordinate = titleCoordinate;
}

public abstract boolean isTileOccupied();
public abstract Piece getPiece();
public static final class EmptyTile extends Main{
  EmptyTile(int coordinate) {
    super(coordinate);
  }

@Override
public boolean isTileOccupied() {
  return false;
}

@Override
public Piece getPiece() {
  return null;
}

}

public static final class OccupiedTile extends Main{
  Piece pieceOnTile;

  OccupiedTile(int tileCoordinate, Piece pieceOnTile){
    super (tileCoordinate);
    this.pieceOnTile = pieceOnTile;
  }

  @Override
  public boolean isTileOccupied(){
    return true;
  
  }

  @Override
  public Piece getPiece() {
    return this.pieceOnTile;
  }
}


}