import java.util.Scanner;

class MadLibs{
  Scanner scan = new Scanner(System.in);
  String p1;
  String p2;
  String p3;
  String p4;
 public MadLibs(){
   String lib1 = "placeholder1 walked up to  placeholder2 then they got in the placeholder3 placeholder4 and went to space!";
   String lib2 = "placeholder1 came out of the placeholder2 then continued to placeholder3 at the nearest coffee shop";
   String lib3 = "Stoll ran to  placeholder1 then continued to talk about placeholder2 before finally getting in his placeholder3 placeholder4";
  //lib 1
  System.out.println("Enter best friends name");
  p1 = scan.nextLine();
  System.out.println("Enter president name");
  p2 = scan.nextLine();
  System.out.println("Enter Color");
  p3 = scan.nextLine();
  System.out.println("Enter type of boat");
  p4 = scan.nextLine();
  lib1 = lib1.replace("placeholder1",p1);
  lib1 = lib1.replace("placeholder2",p2);
  lib1 = lib1.replace("placeholder3",p3);
  lib1 = lib1.replace("placeholder4",p4);
  System.out.println(lib1);  

  System.out.println("Enter Aquatic animal");
  p1 = scan.nextLine();
  System.out.println("Enter big brand shop");
  p2 = scan.nextLine();
  System.out.println("Enter rude action");
  p3 = scan.nextLine();
  lib2 = lib2.replace("placeholder1",p1);
  lib2 = lib2.replace("placeholder2",p2);
  lib2 = lib2.replace("placeholder3",p3);
  
  System.out.println(lib2);  

  System.out.println("Enter College");
  p1 = scan.nextLine();
  System.out.println("Enter type of pastry");
  p2 = scan.nextLine();
  System.out.println("Enter shade of red");
  p3 = scan.nextLine();
  System.out.println("Enter type of public transportation");
  p4 = scan.nextLine();
  lib3 = lib3.replace("placeholder1",p1);
  lib3 = lib3.replace("placeholder2",p2);
  lib3 = lib3.replace("placeholder3",p3);
  lib3 = lib3.replace("placeholder4",p4);
  
  System.out.println(lib3);  






 }
}