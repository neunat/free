import java.util.Scanner;
class MovieList{
  Scanner scan = new Scanner(System.in);
  public  MovieList(){
  String input = "";
  int counter = 0;
  while (!(input.equals("end"))){
    System.out.println("Please enter your favorite movies one at a time, type \"end\" when finished");
    input = scan.nextLine();
    if (!(input.equals("end"))){
      System.out.println(input);
      counter +=1;
    }
    
  }
  System.out.println("You have entered: "+counter+" Movies. Thank you for your Respones");
  }
}