using System;

class MainClass {
  public static void Main (string[] args) 
  {
    Console.WriteLine ("scelect a difficulty: ");
    
    string dif = Console.ReadLine();

    if (dif == "easy" || dif == "Easy")
    {
      //variables
      string[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"};
       
       int left = 11;
      
        
      
        Console.Clear();
        bool restart = true;
      
        while (restart == true)
        {
          //get good UI
          Console.WriteLine("___ ____");
          Console.WriteLine(" ");
          string userInput1 = Console.ReadLine(); 

          Console.Clear();
          if (userInput1 == "g")
          {
            //g (correct)
            Console.WriteLine("Correct");
            Console.WriteLine("G__ G___");

           
            restart = false;

          }
          else if (userInput1 == "e")
          {
            Console.WriteLine("Correct");
            Console.WriteLine("_E_ ____");

            restart = false;

           
          }
          else if (userInput1 == "t")
          {
            Console.WriteLine("Correct");
            Console.WriteLine("__t ____");

            restart = false;
            
          }
          else if (userInput1 == "o")
          {
            Console.WriteLine("___ _OO_");

            restart = false;
            
          }
          else if (userInput1 == "d")
          {
            Console.WriteLine("Correct");
            Console.WriteLine("___ ___D");

            restart = false;
            
          }
          else
          {
            left--;
            restart = true;

            if (left < 0)
            {
              Console.WriteLine("You lose");
              restart = false;
            }
            else
            {
              Console.WriteLine("Wrong");
              Console.WriteLine(left + " trys left");
            }

            
          }
        }
    }
  }
}