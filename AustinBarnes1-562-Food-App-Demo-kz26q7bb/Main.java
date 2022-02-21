import java.util.Scanner;
class Main {
  public static void main(String[] args) {
   Scanner input = new Scanner(System.in);
  int amountWanted = 0;
  int totalCalories=0;
   Food itemOne = new Food("Hamburger", 550);
   System.out.println(itemOne);
   System.out.println("How many do you want?");
    amountWanted = input.nextInt();
    totalCalories += (550*amountWanted);
    Food itemTwo = new Food("Fries", 304);
    System.out.println(itemTwo);
    System.out.println("How many do you want?");
    amountWanted = input.nextInt();
    totalCalories += (304*amountWanted);
    Food itemThree = new Food("Lemonade", 120);
    System.out.println(itemThree);
    System.out.println("How many do you want?");
    amountWanted = input.nextInt();
    totalCalories += (120*amountWanted);
    System.out.print("Your meal contains " +totalCalories + " calories.");
  }
}