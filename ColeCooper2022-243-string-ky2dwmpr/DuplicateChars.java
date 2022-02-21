
/*
 * Activity 2.4.3
 */
import java.util.Scanner;

public class DuplicateChars {
  public DuplicateChars() {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine().toLowerCase();
    String output = "";
    char[] bintput = input.toCharArray();
    for (char ch : bintput) {
      if (input.indexOf(Character.toString(ch)+Character.toString(ch))!=-1){
        output+= Character.toString(ch);
      }
      
    }
    System.out.println(output);
  }
}
