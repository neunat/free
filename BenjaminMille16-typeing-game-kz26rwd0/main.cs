using System;
using System.IO;

class MainClass 
{
  public static void Main (string[] args) 
  {
    //name
    if (File.Exists("userName.txt"))
    {
      //user has a name already continue with program
    }
    else
    {
      //if no name file found make 1
      
      Console.WriteLine ("whats your name?");
      string userName = Console.ReadLine();

      File.WriteAllText("userName.txt", userName);
      Console.Clear();
    }

    //program start
    string name = File.ReadAllText("userName.txt");
    Console.WriteLine("Hello " + name);

    //exit start
    Console.WriteLine(" ");
    Console.WriteLine("Press Enter to Continue...");
    Console.ReadLine();

    //stats
    bool restart = true;
    int score = 0;
    int streak = 0;
    int games = 0;
    int lose1 = 0;
    
    //list of letters
    string[] letters = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};

    //win / lose message list
    string[] win = {"Nice", "gg", "Good Job", "You Win"};
    string[] lose = {"YOU SUCK", "Your Trash", "noob", "get good", "Imagin losing"};

   
    //repeat
    while (restart == true)
    {
      Console.Clear();

      //random letters
      Random rnd = new Random();
      int ranL1 = rnd.Next(letters.Length);
      int ranL2 = rnd.Next(letters.Length);
      int ranL3 = rnd.Next(letters.Length);
      int ranL4 = rnd.Next(letters.Length);
      int ranL5 = rnd.Next(letters.Length);
      int ranL6 = rnd.Next(letters.Length);

      //display 
      Console.WriteLine("Word : " + letters[ranL1] + letters[ranL2] + letters[ranL3] + letters[ranL4] + letters[ranL5] + letters[ranL6]);

      //varaibles
      string input = Console.ReadLine();
      string correct = letters[ranL1] + letters[ranL2] + letters[ranL3] + letters[ranL4] + letters[ranL5] + letters[ranL6];
     

      //sees if correct
      if (input == correct)
      {
        //corect
        Random rndW = new Random();
        int ranW = rndW.Next(win.Length);
        
        //stat for win
        score++;
        streak++;
        games++;

        //win display
        Console.WriteLine(" ");
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine(win[ranW]);
        Console.WriteLine(" ");
        Console.ForegroundColor = ConsoleColor.White;
        
        //score and streak
        Console.WriteLine("-------------------");
        Console.WriteLine("Score: " + score);
        Console.WriteLine("Streak: " + streak);
        Console.WriteLine("Games Played: " + games);
        Console.WriteLine("-------------------");
        Console.WriteLine(" ");
        
        //exit
        Console.WriteLine("To Play Again Press Enter...");
        Console.ReadLine();
      }
      else if (input == "debug")
      {
        //debug
        Console.Clear();
        Console.WriteLine("\\----------| DEBUG |----------/");
        Console.WriteLine("userName: " + name );
        Console.WriteLine("Games Won: " + score);
        Console.WriteLine("Games Lost: " + lose1);
        Console.WriteLine("Games played: " + games);
        Console.WriteLine("Current Streak: " + streak);
        Console.WriteLine("------------------------------/");
        Console.WriteLine(" ");
        
        //exit
        Console.WriteLine("Press Enter to Return to Game");
        Console.ReadLine();
      }
      else if (input == "3321")
      {
        //corect
        Random rndW = new Random();
        int ranW = rndW.Next(win.Length);
        
        //stat for win
        for (int i = 0; i < 99999999; i++)
        {
          score++;
          streak++;
          games++;
        }
        

        //win display
        Console.WriteLine(" ");
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine(win[ranW]);
        Console.WriteLine(" ");
        Console.ForegroundColor = ConsoleColor.White;
        
        //score and streak
        Console.WriteLine("-------------------");
        Console.WriteLine("Score: " + score);
        Console.WriteLine("Streak: " + streak);
        Console.WriteLine("Games Played: " + games);
        Console.WriteLine("-------------------");
        Console.WriteLine(" ");
        
        //exit
        Console.WriteLine("To Play Again Press Enter...");
        Console.ReadLine();
      }
      else
      {
        //Incorect
        Random rndL = new Random();
        int ranL = rndL.Next(lose.Length);

        //stats for lose
        streak = 0;
        games++;
        lose1++;

        //lose display
        Console.WriteLine(" ");
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(lose[ranL]);
        Console.WriteLine(" ");
        
        //score and streak
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine("-------------------");
        Console.WriteLine("Score: " + score);
        Console.WriteLine("Streak: " + streak);
        Console.WriteLine("Games Played: " + games);
        Console.WriteLine("-------------------");
        Console.WriteLine(" ");
        
        //exit
        Console.WriteLine("To Play Again Press Enter...");
        Console.ReadLine();

      }
      
    
    }
    
  }
}