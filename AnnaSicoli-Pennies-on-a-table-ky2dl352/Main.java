//There are 1001 pennies lined up on a table. I come along and replace every second coin with a nickel. Then I replace every third coin with a dime. Finally, I replace every fourth coin with a quarter. How much money is on the table?

class Main {
  public static void main(String[] args) {
    int sum = 0; 
    for (int i = 1; i < 1002; i++)
    {
      if (i % 4 == 0)
        sum += 25; 
      else if (i % 3 == 0)
        sum += 10;
      else if (i % 2 == 0)
        sum += 5; 
      else 
        sum+= 1;
    }
    double dollars = (double)sum/100; 
    System.out.println("Cents: " + sum + "¢");
    System.out.println ("Dollars: $" + dollars);
  }
}