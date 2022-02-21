
/**
 * This class encapsulates the row and column of a location
 * in a 2D array.  Write the entire class using appropriate 
 * class design concepts.
 */
public class Location {
  private int row, col;

  public Location(int r, int c) {
    this.row = r;
    col = c;
  }
  public int getRow() {return row;}
  public int getCol() {return col;}

  public boolean isAdjacent(Location other){
    if(this.row == other.row){
      if(this.col == other.col+1 || this.col == other.col -1){
          return true;
      }
    }
    if(this.col == other.col){
      if(this.row == other.row+1 || this.row == other.row -1){
        return true;
      }
    }
    return false;
  }
  
  public String toString() {
    return "Location: " + row + ", " + col;
  }
  public boolean equals(Object o) {
    if(o == null) {
      return false;
    }
    try {
      Location temp = (Location)o;
      return this.row == temp.row && this.col == temp.col;
    } catch(Exception e) {
      
    }
    return false;
  }
}
