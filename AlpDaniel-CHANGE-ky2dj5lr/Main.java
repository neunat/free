import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        //prompts user for change
        System.out.print("Enter the change in cents: ");
        int change = in.nextInt();
        //displays minimum number of each coin necessary to make the change
        System.out.println("The minimum number of coins is: ");
        //calculates number of toonies, updates change
        int numToonies = change / 200;
        change = change - numToonies * 200;
        System.out.println("Toonies: " + numToonies);
        //calculates number of loonies, updates change
        int numLoonies = change / 100;
        change = change - numLoonies * 100;
        System.out.println("Loonies: " + numLoonies);
        //calculates number of quarters, updates change
        int numQuarters = change / 25;
        change = change - numQuarters * 25;
        System.out.println("Quarters: " + numQuarters);
        //calculates number of dimes, updates change
        int numDimes = change / 10;
        change = change - numDimes * 10;
        System.out.println("Dimes: " + numDimes);
        //calculates number of dimes, updates change
        int numNickels = change / 5;
        change = change - numNickels * 5;
        System.out.println("Nickels: " + numNickels);
        //any remaining change is converted to pennies
        System.out.println("Pennies: " + change);
    }
}