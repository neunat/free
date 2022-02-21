public class Attraction
{


  private int maxRiders;
  private double ticketCost;
  private int attendantsNeeded;
  private double utilityCost;
  private int rideLength;
  private int ridersPerHour;


  public Attraction(int theCapacity, int theLength, double theTicketCost, double theRideCost)
  {
    maxRiders = theCapacity;
    rideLength = theLength;
    ticketCost = theTicketCost;
    utilityCost = theRideCost;
  }

  public int getMaxRiders()
  {
    return maxRiders;
  }
  public double getTicketCost()
  {
    return ticketCost;
  }
  public int getAttendantsNeeded()
  {
    return attendantsNeeded;
  }
  public double getUtilityCost()
  {
    return utilityCost;
  }
  public int getRideLength()
  {
    return rideLength;
  }
  public int getRidersPerHour()
  {
    return ridersPerHour;
  }

  public String toString()
  {
    return "This attraction has a max capacity of " + maxRiders + ". Each ticket for this attraction costs $" + ticketCost + ". The cost to run this attraction is $" + utilityCost + " per year. The length of the attraction is approximately " + rideLength + " minutes and needs 2-3 attendants to run the attraction and keep the amount of riders per hour at " + ridersPerHour + "."; 
  }
}
