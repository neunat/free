class TwoWayStatements {
  
  public boolean isEven(int value){
    if ((value %2) == 0)
      return true;
    else return false;
  }
  public int maxOfThree(int n1, int n2, int n3){
    if (n1 == n2 || n2 == n3 || n3 == n1){
      System.out.println("Error two numbers are the same");
      return -1;
    }
    else{
      int a = Math.max(n1,n2);
      System.out.println(Math.max(a,n3));
      return Math.max(a,n3);
    }
  }
  public boolean divisibleBy(int num,int de){
    if (de!=0){
      System.out.println("true");
      return true;
    }
    else{
      System.out.println("false");
      return false;
    }
  }
  public double windchill(double temp, double windSpeed){
    if ((windSpeed >3 && windSpeed<110)&&(temp<50 && temp>-50)){
      System.out.println((temp-(windSpeed*.7)));
      return (temp-(windSpeed*.7));
    }
    else{
      System.out.println("Error windspeed or temp wrong");
      return -1;
    }
  }
}