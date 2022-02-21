import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    Scanner scan=new Scanner(System.in);  
    System.out.println("Enter a grade");
    char grade = scan.next().charAt(0);
    if (80<= grade && grade <=100)
    System.out.println("your grade is an A");
    if (70<=grade && grade <=80)
    System.out.println("your grade is an B");
    if (60<=grade && grade <=70);
    System.out.println("your grade is an C");
    if (50 <=grade && grade <=60)
    System.out.println("your grade is an D");
    if (grade== 0 && grade <=50)
    System.out.println("your grade is an F");
    else
    System.out.println("goodbye");
  }
}