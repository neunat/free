public class Main {
   public static void main(String[] args) {
       String dashLine = "-----------------------------------------";
       String name = "McDonald's Bourke&Russel St";
       String date = "02/11/2021";
       String programName = "Java 17";
       String oneName = "1 coffee";
       String twoName = "1 candy";
       String threeName = "2 burger";
       String fourName = "1 fries";
       String fiveName = "1 wrap";
       String sixName = "1 salad";
       String sevenName = "1 donut";
       double onePrice = 0.25;
       double twoPrice = 0.15;
       double threePrice = 5.05;
       double fourPrice = 1.15;
       double fivePrice = 0.85;
       double sixPrice = 0.55;
       double sevenPrice = 0.25;
       double total = onePrice + twoPrice + threePrice + fourPrice + fivePrice + sixPrice + sevenPrice;
       int orderNumber = 100;
       System.out.println(dashLine);
       System.out.println("\n" + "                  " + orderNumber + "\n");
       System.out.println(dashLine);
       System.out.println(" " + "Welcome to " + name);
       System.out.println("         " + "Restaurant Number 1865" + "\n");
       System.out.println("QTY" + "                                 " + "TOTAL");
       System.out.println("\n" + oneName + "                             " + onePrice);
       System.out.println(twoName + "                              " + twoPrice);
       System.out.println(threeName + "                             " + threePrice);
       System.out.println(fourName + "                              " + fourPrice);
       System.out.println(fiveName + "                               " + fivePrice);
       System.out.println(sixName + "                              " + sixPrice);
       System.out.println(sevenName + "                              " + sevenPrice + "\n");
       System.out.println("TOTAL PRICE" + "                          " + total);
   }
}
