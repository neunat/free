import java.util.Scanner;

public class UserInput {
  private static Scanner sc = new Scanner(System.in);

  public static String getString() {
    return sc.nextLine();
  } 

  public static int getInt() {
    return sc.nextInt();
  }

  public static int getCheckedInt() {
    String userIn;
    while (true) {
      userIn = sc.nextLine();
      try {
        Integer.parseInt(userIn);
        break;
      } catch(Exception e) {
        System.out.print("That is not an int, Try again --> ");
      }
    }
    return Integer.parseInt(userIn);
  }

  public static double getDouble() {
    return sc.nextDouble();
  }

  public static double getCheckedDouble() {
    String userIn;
    while (true) {
      userIn = sc.nextLine();
      try {
        Double.parseDouble(userIn);
        break;
      } catch(Exception e) {
        System.out.print("That is not an double, Try again --> ");
      }
    }
    return Double.parseDouble(userIn);
  }

  public static boolean getBoolean() { //True, true, t, f, false, False
    String userIn;
    while (true) {
      userIn = sc.nextLine();
      if(userIn.contains("True") || userIn.contains("true") || (userIn.contains("T") && userIn.length() == 1) || (userIn.contains("t") && userIn.length() == 1)) {
        return true;
      }
      else if(userIn.contains("False") || userIn.contains("false") || (userIn.contains("F") && userIn.length() == 1) || (userIn.contains("f") && userIn.length() == 1)) {
        return false;
      }
      else System.out.print("That is not an boolean, Try again --> ");
    }
  }
}