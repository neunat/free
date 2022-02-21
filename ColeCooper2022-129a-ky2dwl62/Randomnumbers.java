public class Randomnumbers{
  public Randomnumbers(){
    int b = (int) (Math.random()*9);
    System.out.println("Random number between 0 and 9 inclusive: "+b);
    b = (int) (Math.random()*9)+1;
    System.out.println("Random number between 1 and 10 inclusive: "+b);
    b = (int) (Math.random()*4)+1;
    System.out.println("Random number between 1 and 5 inclusive: "+b);
    b = (int) (Math.random()*51)+37;
    System.out.println("Random number between 37 and 88 inclusive: "+b);
    
  }
}