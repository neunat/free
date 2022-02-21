import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);

    System.out.println("Hello there player!\n");
    System.out.println("What's ur name?");

    String User_name = in.nextLine();

    System.out.println("I like the name " + User_name);
    
  }
}