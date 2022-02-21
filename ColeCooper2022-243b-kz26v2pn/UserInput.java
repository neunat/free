
import java.util.Scanner;
public class UserInput {
    public static int getInt() {
      System.out.println("enter num");
        Scanner input = new Scanner(System.in);
        return input.nextInt();
     }
}