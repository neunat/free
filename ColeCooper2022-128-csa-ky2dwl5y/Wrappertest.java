class Wrappertest {
  public  Wrappertest(){
  Integer intObject = new Integer(17);
  Double doubleObject = new Double(18.5);
  System.out.println(intObject.intValue()+"\n"+doubleObject.doubleValue());

  System.out.println("Max Double "+Double.MAX_VALUE);
  System.out.println("Min Double "+Double.MIN_VALUE);
  Double d = 3.6; // autoboxing
  double dd = d;// unboxing
  Integer i = 55; // autoboxing

  
  }

  

}