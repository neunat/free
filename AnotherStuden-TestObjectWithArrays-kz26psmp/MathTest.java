public class MathTest implements Test{
    private int score;
    private String name;
    private double classAverage;

/**
Constructor for a MathTest.  Assigns the name and score
of this MathTest to the specified parameters
**/
    public MathTest(String n, int s){
      this.score = s;
      this.name = n;
    }

    public String getName(){  return name;}

    public int getScore(){  return score; }

    public void setClassAverage(double avg){  this.classAverage = avg;}

    public String toString(){
      String fixName = String.format("%-10s", getName());
      String fixScore = String.format("%5d", getScore());
      String fixAvg = String.format("%6.2f", classAverage)+"%";
      return "MathTest: "+fixName+ ": "+fixScore+" "+fixAvg;
    }

}