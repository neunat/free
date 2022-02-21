class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
     int count5=0,base,power=1;
    base =2;
    while(++count5 <= 6)
      System.out.println((power*=base)+" ");
      System.out.println();

   

    int f1=1,f2=1;
    System.out.println(f1+" ");
    do{
      System.out.print(f2+" ");
      f2=f1+f2;
      f1=f2-f1;
    }while(f2<100);
    System.out.println();
    

    for(short index=11; index <=25; index++){
      System.out.print(index+ " ");
      if (index%5==0)
      System.out.println();


    escape:
      for (int a=3;a<=6;a++)
        for (int b=2; b<=3;b++){
          if ((a+b)>7)
          break escape;
      System.out.println(a+","+b+"a x b="+a*b);
  }
}
    int x=48,y=20;
    while (x!=y)
      if (x>y)x-=y;
      else 
        y-=x;
      System.out.println("the HCF of x and y is "+x);

    int number,inputData;
    boolean prime;
    number = 2;
    inputData=17;
    while ((inputData%number!=0)&&(number<inputData));
    number++;
    prime = (number == inputData);
    if (prime==true)
    System.out.println(inputData+ " is a prime number");
    else
    System.out.println(inputData+ " is not a prime number");
}
}
