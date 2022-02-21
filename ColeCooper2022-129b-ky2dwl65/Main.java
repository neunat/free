class Main {
  public static void main(String[] args) {

   CustomMath cm = new CustomMath();
   double e;
   double c = 3000;
   double mass;

   //Scenario 1
   mass = .033;
   System.out.println("Total Energy is equal to:"+cm.multiply(mass,cm.square(c)));
    mass = 44000;
   System.out.println("Total Energy is equal to:"+cm.multiply(mass,cm.square(c)));
    mass = .00088;
   System.out.println("Total Energy is equal to:"+cm.multiply(mass,cm.square(c)));

   // Scenario 2 
   double v;
   v=40;
   mass =.033;
   System.out.println("The objects density is :"+cm.divide(mass,v)+" kg/m^3");
   v=300;
   mass =400;
   System.out.println("The objects density is :"+cm.divide(mass,v)+" kg/m^3");
   v = .383838;
   mass = 77777;
   System.out.println("The objects density is :"+cm.divide(mass,v)+" kg/m^3");

   
  }
}