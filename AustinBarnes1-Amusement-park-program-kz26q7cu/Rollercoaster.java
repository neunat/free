public class Rollercoaster extends Attraction
{
private int speed;
private int height;
private String name;


public Rollercoaster(int theCapacity, int theLength, double theTicketCost, double theRideCost,int theSpeed, int theHeight, String theName)
{
  super(theCapacity, theLength,theTicketCost, theRideCost);
  height = theHeight;
  speed = theSpeed;
  name = theName;
}
public String toString()
{
return super.toString() + "\nThe " + name + " is a rollercoaster that goes " + height + " feet high and " + speed + "mph.";
}
}