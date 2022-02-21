import java.util.Scanner;
class Madlibstwo {
  String p4;
  String p2;
  String p1;
  String p3;
  Scanner scan = new Scanner(System.in);
  String lib1 = "The placeholder1 placeholder2 placeholder3 placeholder4 over the sleepy cat ";
  String lib2 = "After eating the placeholder1 placeholder2 placeholder3 placeholder4 into the nearest starbucks ";
  String lib3 = "They traveled to the blue planet and the placeholder1 placeholder2 stood where all the aliens  where placeholder3 placeholder4 and would not stop ";
  //calls to generate libs
  public Madlibstwo(){
  getuserinput();
  generatelib(lib1);
  getuserinput();
  generatelib(lib2);
  getuserinput();
  generatelib(lib3);
  }
  //get user input
  public void getuserinput(){
  System.out.println("\nEnter Adjetive");
   p1 = scan.nextLine();
  System.out.println("Enter Noun");
   p2 = scan.nextLine();
  System.out.println("Enter Verb");
  p3 = scan.nextLine();
  System.out.println("Enter Adverb");
  p4 = scan.nextLine();
  }
  // generate the lib
  public void generatelib(String lib){
      System.out.print(lib.substring(0,lib.indexOf("placeholder1"))+p1 +lib.substring(lib.indexOf("placeholder1")+12,lib.indexOf("placeholder2"))+p2+lib.substring(lib.indexOf("placeholder2")+12,lib.indexOf("placeholder3"))+p3+lib.substring(lib.indexOf("placeholder3")+12,lib.indexOf("placeholder4"))+p4+lib.substring(lib.indexOf("placeholder4")+12,(lib.length())));
  }
}
