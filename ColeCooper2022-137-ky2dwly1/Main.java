/*
 * Activity 1.3.7
*/
public class Main
{
  public static void main(String[] args) 
  {
    Shape shape1 = new Shape();
    shape1.setShape("Triangle", 3);
  
    Shape shape2 = new Shape();
    shape2.setShape("Square", 4);
  
    Shape shape3 = shape1;
    shape3.setShape("Hexagon", 6);
    Shape shape4 = new Shape();
    System.out.println(shape1.getShape());
    System.out.println(shape2.equals(shape4));
    Shape shape5 = new Shape();
    System.out.println(shape4.equals(shape5));
    System.out.println((shape2 ==shape4));
  }
}
