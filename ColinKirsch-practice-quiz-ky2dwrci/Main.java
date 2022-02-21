class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    int grade=96;
    if (80<= grade && grade <=100)
    System.out.println("your grade is an A");
    else if (70<=grade && grade <=80)
    System.out.println("your grade is an B");
    else if (60<=grade && grade <=70)
    System.out.println("your grade is an C");
    else if (50 <=grade && grade <=60)
    System.out.println("your grade is an D");
    else if (grade== 0 && grade <=50)
    System.out.println("your grade is an F");
    else 
    System.out.println("you entered an invalid mark");
  }
}