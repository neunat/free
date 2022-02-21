import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    int x=7;
    int y=4;
    x = y;
    y = x;
    System.out.println(8754%10);
    System.out.println("Bob is " + 2 + 5 + " years old.");
    System.out.println(25%4);
    int age = 16;
    int height = 175;
    int weight = 70;
    char sex = 'M';
    boolean healthy = true;
    if (age >= 16 && height == 175)
    System.out.println("true");
    else 
    System.out.println("false");
    int num1= 0, num2 = 0, num3 = 0;
    int average = 0;
    Scanner userInput = new Scanner(System.in); System.out.println("Enter three real numbers to find out their average.");
    num1 = userInput.nextInt();
    num2 = userInput.nextInt();
    num3 = userInput.nextInt();
    average = (num1 + num2 + num3 / 3);
    System.out.println("The average of the three numbers is: " + average);
    int TEST=0;
    TEST=1;
    System.out.println(TEST);
    int i = 7; 
    int j = 3;
		System.out.print("Smaller is " + i);
		System.out.println(" Larger is " + j);
  }
}