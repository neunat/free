class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!"); 
    int order = 1;//1pizza, 2 for pop, 3 for chips
    int pizza=3;
    int pop=5;
    int chips=6;
    if (order == 1)
    {
    System.out.println("you ordered pizza");
    pizza=pizza+1;
    }    
    if (order == 2)
    {
    System.out.println("you ordered pop");
    pop=pop+1;
    }
    if (order == 3)
    {
    System.out.println("you ordered chips");
    chips = chips +1;
    }
    System.out.println("You ordered "+ pizza+ " pizzas");
    System.out.println("You ordered "+ pop+ " cans of pop");
    System.out.println("You ordered "+ chips + " chips");
  }
};
  