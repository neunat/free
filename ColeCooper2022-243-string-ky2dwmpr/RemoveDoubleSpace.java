/*
 * Activity 2.4.3
 */
import java.util.Scanner;

public class RemoveDoubleSpace
{
  public RemoveDoubleSpace(){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine();
    String output = "input";
    while (input.indexOf("  ")!=-1){
      input= input.substring(0,input.indexOf("  "))+input.substring(input.indexOf("  ")+2,input.length());
    }
      System.out.println(input);
    }
  }
  
