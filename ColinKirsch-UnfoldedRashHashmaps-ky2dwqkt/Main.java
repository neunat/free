import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    int salary; 
    double taxrate = 0.13;
    if (0<= salary && salary >=10000);
    taxrate = 0.00;
    if (10001<=salary && salary >= 25000);
    taxrate=0.20;
    if (25001<=salary && salary >= 50000);
    taxrate=0.25;
    if (50000<=salary && salary >= 100000);
    taxrate=0.30;
    if (100001<=salary);
    taxrate=0.35;
    String taxpayable;

    Scanner keyboard = new Scanner(System.in);;
    System.out.print("Enter your salary"); 
		double totalsalary=salary+taxrate;
    taxpayable= keyboard.nextLine(); 
		System.out.print("Enter your tax rate");
		taxpayable = keyboard.nextDouble();    
		System.out.println("Your salary is: $" + salary);
    System.out.println("Your tax rate is " + taxrate);
		System.out.println("Your total salary is $" + totalsalary);
		System.out.println("The tax payable is $" + taxpayable);
  }
}