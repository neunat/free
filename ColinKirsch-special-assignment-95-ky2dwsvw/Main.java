class Main {
  public static void main(String[] args) {
    System.out.println("for question 2 exersise 4, i kept on getting errors so i got rid of it, i also got that for example 3 as well. so got rid of them. mind helping me with them?");
    System.out.println("Example 1");
    char alpha='C';
    if (alpha == 'C')
    System.out.println("You got the right one=>"+alpha+".");
    
    
    System.out.println("Example 2");
    int x1,x2,larger;
    x1=100;
    x2=200;
    if (x1>=x2)
    larger=x1;
    else
    larger=x2;
    System.out.println("The large number is "+larger+".");
    
    
    System.out.println("Example 4");
    short lucky=7,number1=7;
    if (number1 ==lucky)
    { 
    System.out.println("Bingo! ");
    System.out.println("You got the lucky number->"+lucky);
    }
    else
    System.out.println("Wrong number. Try again");
    
    
    System.out.println("Example 5");
    char alpha2;
    alpha2 = 'Q';
    switch (alpha2)
   {
    case 'M':
    System.out.println("Menu requested."); 
    break;
    case 'Q':
    System.out.println("Quit program"); 
    break;
    case 'S':
    System.out.println("Save file");
    break;
    default: System.out.println("Wrong code"+alpha2);
  }
    System.out.println("Test completed");
    
    
    System.out.println("Example 6");
    byte x=10, y=4;
    char op;
    op='D';
    if (op=='A')
    System.out.println(x+"+"+y+"="+(x+y));
    else if (op=='S')
    System.out.println(x+"-"+y+"="+(x-y));
    else if (op=='M')
    System.out.println(x+"x"+y+"="+(x*y));
    else if (op=='D')
    System.out.println(x+"/"+y+"="+(x/y));
    else 
    System.out.println("Wrong operater");
    System.out.println("Example 7");
    int number2 = -1000;
    number2 =(number2 >=0) ? number2 :-number2;
    System.out.println("the absolute value is "+number2); 
    System.out.println("Example 8");
    int p=25, q=10, a=6, b=9;
    assert (p>q)&&(a<b);
    assert (p<=q)||(a==b);
    assert (p<=q)||(b>a)&& !(b==a);
    assert (p==q)&&(b>=a)||(p>0);
    assert !(p>-q)&& !(a<=b);
    System.out.println("Example 9");
    int x3=9;
    if (x3 >= 1 && x3<=10)
    System.out.println("this number between 1 and 10 is"+x3);
    else
    System.out.println("the number is out of range");
    System.out.println("Example 10");
    char responce ='Q';
    if ((responce=='Q')||(responce=='q'))
    System.out.println("Exit program");
    else
    System.out.println("Carry on");
    
    
    System.out.println("Exersise 4 Q1");
    short p11=30, q1=10, r=40;
    boolean b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=(p>r);
    b2=(q1<=p11);
    b3=(r!=q);
    b4=((p11>q1)&&(q1<r));
    b5=((q1>r)||(p11>r));
    b6=((q1+=20)<=p11);
    b7=((p11*=5)>(r-=10));
    b8=((r/q1)!=(r%p11));
    b9=((p11+q1)==(r++));
    System.out.println("b1->"+b1);
    System.out.println("b2->"+b2);
    System.out.println("b3->"+b3);
    System.out.println("b4->"+b4);
    System.out.println("b5->"+b5);
    System.out.println("b6->"+b6);
    System.out.println("b7->"+b7);
    System.out.println("b8->"+b8);
    System.out.println("b9->"+b9);
  }
}