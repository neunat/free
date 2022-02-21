/*
 * Activity 2.4.3
 */
import java.util.Scanner;

public class RemoveVowels
{
  public RemoveVowels(){
  Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine().toLowerCase();
    String output = "";
  char[] bintput = input.toCharArray();
  for (char ch : bintput) {
    if ((ch == 'a')||(ch =='e')||(ch =='i')||(ch =='o')||(ch =='u')) {
    } else{
      output += Character.toString(ch);
    }
  }
  System.out.println(output);
}
}
