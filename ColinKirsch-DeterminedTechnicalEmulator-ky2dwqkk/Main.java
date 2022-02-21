class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    int count=20;
    double speed=123.46;
    if (count==20)
  {
    System.out.println("Match");
  }
    if (speed<=150)
  {
    System.out.println("Slow");
  }
    if (count>25)
  {
    System.out.println(count);
  }
    int count1=20;
    double speed1=123.46;
    if ((count1<10)||(count1>15))
  {
    System.out.println(count1);
  }
    if ((100<speed1)&&(count1%2==0))
  {
    System.out.println("Executed");
  }
    int count2=20;
    double speed2=123.46;
    if (speed2<0)
  {
    System.out.println("negative");
  }
    else
  {
    System.out.println("positive");
  }
    int number=2;
    if (number<1000)
  {
    System.out.println("option1");
  }
    else if (number<100)
  {
    System.out.println("option2");
  }
    else if (number<10)
  {
    System.out.println("option3");
  }
    else
  {
    System.out.println("option4");

  }
  }
}