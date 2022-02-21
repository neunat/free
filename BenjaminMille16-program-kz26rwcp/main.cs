using System;

class MainClass {
  public static void Main (string[] args) 
  {
    Console.WriteLine ("if number is 10 you win");

    //variables
    bool f = true;
    
    int games_played = 0;
    int win = 0;

    //goes forever
    while (f == true)
    {
      Random rnd = new Random();
      int ranNum = rnd.Next();

      Console.WriteLine(" ");

      if (ranNum == 10)
      {
        win++;
        games_played++;

        Console.WriteLine("Games played: " + games_played);
        Console.WriteLine("games Won: " + win);
      }
      else
      {
        games_played++;

        Console.WriteLine("Games played: " + games_played);
        Console.WriteLine("games Won: " + win);
      }
    }
  }
}