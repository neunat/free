import java.util.Scanner;
class Main
{
  public static void main (String[] args)
  {
      Scanner scan=new Scanner(System.in);
      System.out.println("Preferred flavour?");
      char flavour = scan.next().charAt(0);
      System.out.println("Preferred style?");
      char style = scan.next().charAt(0);
      System.out.print("The client preferred ");
      if (flavour == 'B')
        System.out.print("bar-b-que");
      else if (flavour == 'V')
        System.out.print("vinegar");
      else
        System.out.print("other");
      if (style == 'C')
        System.out.print(", crinkled");
      else if (style == 'R')
        System.out.print(", regular");
      System.out.println(" chips. ");
  }
}      
