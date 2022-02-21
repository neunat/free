/*
 * Activity 1.3.6
 */
import java.util.Scanner;

public class Main
{
  public static void main(String[] args) 
  {
    Scanner sc = new Scanner(System.in);
    
    System.out.println("Enter 'true' or 'false' for A");
    boolean a = Boolean.parseBoolean(sc.nextLine()); 
    
    System.out.println("Enter 'true' or 'false' for B");
    boolean b = Boolean.parseBoolean(sc.nextLine());
    
    /* your code here */
    if  (!(a) ||!(b)){
      System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluted to false");
    }
    if  (!(a&&b)){
      System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluted to false");
    }
    
    // next one
    if  (!(a) && !(b)){
      System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluted to false");
    }
    if  (!(a||b)){
      System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluted to false");
    }
    //next next one !(a && b) !a || !b
    if (!a){
        System.out.println("evaluated to true");
    }
    else if (!b){
        System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluated to false");
    }
  
   //next next next one !(a || b) !a and !b
   if (!a ){
     if (!b){
        System.out.println("evaluated to true");
     }
     else{
       System.out.println("evaluated to false");
     }
    }
    else{
      System.out.println("evaluated to false");
    }
    // custom one if a !(a==b) !a != !b
    if (!(a==b)){
      System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluated to false");
    }

    if (!a != !b){
        System.out.println("evaluated to true");
    }
    else{
      System.out.println("evaluated to false");
    }
  }
}
