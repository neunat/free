import java.util.Scanner;

public class Dyslexia {
  public Dyslexia() {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine().toLowerCase();
    String output = "";
    char[] bintput = input.toCharArray();
    int counter = 0;
    for (char ch : bintput) {
      if ((ch == 'p') || (ch == 'd') || (ch == 'q') || (ch == 'd')) {
        switch (((int) (Math.random() * 3)+1 )) {
          case 1:
            output += "p";
            break;
          case 2:
            output += "d";
            break;
          case 3:
            output += "b";
            break;
          case 4:
            output += "q";
            break;

        }
      } else {
        output += Character.toString(ch);
      }

      counter++;
    }
    System.out.println(output);
  }

}