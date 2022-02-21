import java.util.*; 
import java.io.FileInputStream; 
import java.util.HashMap;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.Random;
import java.io.PrintStream;
import java.io.IOException;


class Main 
{
  /*
  private static boolean TestNumIsShortOrNot(int num, boolean plsPrint)
  {
    int length = 1;
    int originalNum = num;

    while (num != 1)
    {
      if (plsPrint)
      {
        System.out.print(num + " ");
      }
      if (num % 2 == 0) 
      {
        // num is EVEN
        num = num / 2;
      } 
      else 
      {
        num = num * 3 + 1;
      }
      length = length + 1;
    }
    if (plsPrint)
    {
      System.out.print(num + " ");
    }
    // System.out.println("\n" + "The length is " + length);

    // let's do part B now
    // System.out.println("length is " + length + " num is " + originalNum);
    if (length < originalNum) 
    {
      if (plsPrint)
      {
        System.out.println("\nfalse");
      }
      return(false);
    } 
    else
    {
      if (plsPrint == true)
      {
        System.out.println("\ntrue");
      }
      return(true);
    }
  }
  */

  public String textToString(String filename)
  {
    String string;
    // command line parameter
    try
    {
      FileInputStream fstream = new FileInputStream(filename);
      Scanner s = new Scanner(fstream).useDelimiter("\\A"); 
      string = s.hasNext() ? s.next() : "";
      fstream.close();
      return string;
    }
    catch (Exception e) {
      e.getStackTrace();
      return ("");
    } 
  }

  public static void main(String[] argv) 
  {
    if(argv.length != 1) 
    {
      System.err.println("Invalid command line, exactly one argument required, instead of " + argv.length);
      System.exit(1);
    }
   // String str = textToString(argv[0]);

    //method myprogram = new method();

//myprogram.start();
    return;
  }
  
}