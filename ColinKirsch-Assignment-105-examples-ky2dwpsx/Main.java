class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    for (int count = 1; count <= 5; count++)
    System.out.println("count= " + count);
    

    for (int count = 1; count <4; ++count)
    {
      for(char alpha ='A'; alpha <='Z'; ++alpha)
      System.out.print(alpha +" ");
      System.out.println();
    }


    int count=1;
    for(char alpha ='E'; alpha >= 'A'; --alpha)
    {
      System.out.print("("+ count + ")");
      ++count;
      System.out.println(alpha);
    }


    int count1 = 1;
    while (count1<=10){
      System.out.print(count1 + "");
      count1 +=2;
    }
      System.out.println();


    short countDown=5;
    do{
      System.out.println("Countdown->" +countDown);
      --countDown;
    }
    while(countDown>0);
    System.out.println("Countdown completed"); 
  
  
    int count2=1;
    while (count2<=10){
      System.out.println(count2+ " ");
      count2+=2;
    }
    System.out.println();

    for (int count3=1; count3<4; ++count3)
    {
      for (char alpha ='A'; alpha <= 'Z'; ++alpha)
      System.out.print(alpha+ " ");
    System.out.println();
    }

    int count4=1;
    while (count4 <=10)
    {
      System.out.println(count4+" ");
      count4 +=2;
    }
      System.out.println();
  }
}