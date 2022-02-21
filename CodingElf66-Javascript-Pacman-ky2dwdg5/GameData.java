public class GameData implements Comparable<GameData>
{
  private final String Initial;
  private final Integer Score;

  public GameData(final String Initial, final Integer Score) 
  {
    this.Initial = Initial;
    this.Score = Score;
  }

  public String getInitial() 
  {
    return(Initial);
  }
  
  public Integer getScore() 
  {
    return(Score); 
  }

  public String toString() 
  {
    return(Score+", "+Initial); 
  }

  //comparison by number
  public int compareTo(final GameData other) 
  {
    return(Score.compareTo(other.Score));
  }
}