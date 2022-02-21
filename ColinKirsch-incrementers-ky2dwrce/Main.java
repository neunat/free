class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    int myData1=1200;
    int m = 60;
    myData1 /= m;
    myData1--;
    System.out.println("myData= "+myData1);

    int myData2 = 3000;
    int p=8, q=200;
    myData2/= p*q;
    myData2 ++;
    System.out.println("myData= "+myData2);

    int myData3 =120;
    int e =100,f=87,g=7;
    myData3%=(e-f)*g;
    --myData3;
    System.out.println("myData= "+myData3);
  }
}