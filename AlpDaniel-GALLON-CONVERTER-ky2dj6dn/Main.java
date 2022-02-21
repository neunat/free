import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        //prompts user to enter how number of gallons
        System.out.print("Enter the number of gallons: ");
        double gallons = in.nextInt();
        //converts number of gallons to quarts, pints, cups, and tablespoons and displays these new values
        System.out.println("In " + gallons + " gallons there are:");
        //prints out number of quarts
        double quarts = gallons * 4;
        System.out.println(quarts + " quarts");
        double pints = quarts * 2;
        System.out.println(pints + " pints");
        double cups = pints * 2;
        System.out.println(cups + " pints");
        double tablespoons = cups * 16;
        System.out.println(tablespoons + " tablespoons");
    }
}