import java.util.Scanner;

public class RemoveEveryOther
{
  public   RemoveEveryOther()
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine();
    String output = "";
    
    /* Your Code Here */
    for (int counter = 0; counter <= input.length(); counter++){
      if (counter % 2 == 0) output += input.substring(counter,(counter+1));
    }
    System.out.println(output);
  }
}