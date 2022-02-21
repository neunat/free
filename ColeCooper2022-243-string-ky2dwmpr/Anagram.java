import java.util.Scanner;
import java.util.Arrays;

class Anagram {
  public Anagram() {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine().toLowerCase();
    System.out.println("Enter the anagram: ");
    String input2 = sc.nextLine().toLowerCase();
    String output = "";
    char[] bintput = input.toCharArray();
    char[] cintput = input2.toCharArray();
    boolean bob = true;

    if (bintput.length != cintput.length) {
      System.out.println("error words not the same length, run again");
    }
    for (int ch = 0; ch < bintput.length; ch++) {
      if (!(bintput[ch] == cintput[cintput.length - (ch+1)])) {
        bob = false;
        
      }
      
    }
      if (!bob) {
        System.out.println("They are not the same");
      } else {
        System.out.println("they are the same");
      }
    
  }
}
