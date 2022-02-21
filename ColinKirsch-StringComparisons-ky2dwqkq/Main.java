class Main {

  public static void main(String[] args) {
    System.out.println("Hello world!");
    String x="alan";
    String y="alan";
    
    if (x.compareTo(y)<0)
    {System.out.println("hello alan marr");}//x precedes y

    if (x.compareTo(y)==0)
    {System.out.println("hello alan alan");}//x is the same order as y

    if (x.compareTo(y)>0)//boolean condition has compareTo expression that returns int type
    {System.out.println("hello marr alan");}//y precedes x
    
    if (x.equals(y))//boolean condition
    {System.out.println("hello alan alan");}//x is the same value as y
  }
  










}