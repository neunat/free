/** 11/18/21 Cole Cooper
Choose your path- madlib
**/

import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Welcome to the party,\n based on your choices you will have different interactions and diffrent endings!\n\n    Choose Wisely ");
    Choice hc = new Choice();
    int status =0;
     System.out.print("\033[H\033[2J"); 
    String car = hc.setCar();
     System.out.print("\033[H\033[2J"); 
    String guest = hc.setGuest();
     System.out.print("\033[H\033[2J"); 
    String clothes = hc.setClothes();
     System.out.print("\033[H\033[2J"); 
    // if statements after getting input
    // car
    if (car == "Honda Civic"){
    System.out.println("You roll up to the party in your Yellow 2003 Honda Civic, you have to pay a $30 + tip parking fee for valet before takeing the side entrance in to the mansion");
    status +=1;
    }
    else if (car == "Cybertruck"){
      System.out.println("You drip up to the party in your Freshly cleaned Cybertruck, elon greets you at the front door and takes you inside");
    status +=5;
    }
    else if (car == "Yellow Taxi"){
      System.out.println("Because you care about the envirement you decided to take a cab to the party, you are highly respected and immediately the paparazzi are all over you as you stroll down the red carpet in the entrance");
    status +=1;
    }
    System.out.print("Press enter to continue");
    sc.nextLine();
    System.out.print("\033[H\033[2J");
    //clothes
    if (clothes == "Yellow Tux"){
      System.out.println("You walk into the party in your freshly fitted almost banana looking suit, you realise that everyone else is wearing the same thing and you blend in");
    status +=1;
    }
    else if (clothes == "Goose Costume"){
      System.out.println("You are anxious as you walk in your gucci nike flex goose costume 3000 but you soon realise you are the highlight of the party and you chose the right outfit");
    status +=14;
    }
    else if (clothes == "Subway Hoodie"){
    status +=100;
    System.out.println("After getting lost you walk through a random door and out onto the main stage instantly the crowd cheers as you walk to the podium and begin talking about bringing back the 5 dollar footlong");
    }
    //guest
    System.out.print("Press enter to continue");
    sc.nextLine();
    System.out.print("\033[H\033[2J");
    if (guest == "Mark Zuckerberg"){
      System.out.println("After talking with the waltons you walk over to the android and lizardmen section of the party and find mark charging, you decide to take one for the team and unplug him and walk away");
    status +=20;
    }
    else if (guest == "Mr Stoll"){
      System.out.println("After leasurely walking around and chatting with various other guest you walk over to the food tables and find Mr Stoll snacking on some cheese, he quickly shows you his new algorithm for calculating the cheesiest cheese he just sold to the russians for deep space nuclear probe telemetry");
    status +=3;
    }
    else if (guest == "Walmart Employee"){
      System.out.println("After enjoying your time at the party you get lost and fall through a hole in the floor and find yourself in an underground walmart warehouse, after almost getting run over by a forklift you find a employee who gives you a tour  of the entire facility");
    status +=5;
    }
    System.out.print("Press enter to continue");
    sc.nextLine();
    System.out.print("\033[H\033[2J");
    // endings good status >20 bad<20 normal >30 epic >40 legendary (all best options chosen)
    System.out.println(hc.pleasework(status, guest, car, clothes));
    
  }

}