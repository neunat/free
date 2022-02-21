import java.util.Scanner;

class Choice{
  Scanner sc = new Scanner(System.in); // declare scanner

  public String setCar(){ // setcar
  
  System.out.println("Choose your Car\n1.Honda Civic\n2.Cybertruck\n3.Yellow Taxi");
  int input = sc.nextInt();
  if (input == 1){
    return "Honda Civic";
  }
  else if (input == 2){
    return "Cybertruck";
  }
  else if (input == 3){
    return "Yellow Taxi";
  }
  else{
    System.out.println("Invalid choice");
    return setCar();
  }
  }
  public String setGuest(){
    
    System.out.println("Choose your Guest\n1.Mark Zuckerberg \n2.Mr Stoll \n3.Walmart Employee");
    int input = sc.nextInt();
  if (input == 1){
    return "Mark Zuckerberg";
  }
  else if (input == 2){
    return "Mr Stoll";
  }
  else if (input == 3){
    return "Walmart Employee";
  }
  else{
    System.out.println("Invalid choice");
    return setGuest();
  }
  }
  public String setClothes(){
    
    System.out.println("Choose your Clothes\n1.Yellow Tux \n2.Goose Costume \n3.Subway Hoodie");
    int input = sc.nextInt();
  if (input == 1){
    return "Yellow Tux";
  }
  else if (input == 2){
    return "Goose Costume";
  }
  else if (input == 3){
    return "Subway Hoodie";
  }
  else{
    System.out.println("Invalid choice");
    return setClothes();

  }
  }
  public String pleasework(int status, String guest, String car,String clothes){
    if ((car == "Yellow Taxi")&&(guest=="Mr Stoll")&&(clothes=="Subway Hoodie")){
      return ("Legendary Ending\nYou are jared from subway, you own the city and take the subway from subway to subway, you have acknoweledged the precense of the stoll, when finished you hop back in the cab and go and meet joe biden at the yellow house");
       
    }
    //bad
    else if (status<30){
      return ("Bad Ending\nAfter finding out that the party was actually a rally for the banana people yo decided to leave and go home, after arrving you felt a strange precense and decided to go get a cup of water, it came out yellow and tasted like banana, you went to bed and had strange banana dreams "+status);
    }
    //good
    else if (status>=30&&status<80){
      return ("Good Ending\nAfter having an okay time at the party you decide to go to the cheese shop and try out diffrent types of cheese but realised you left your phone at the party, after going back you realise you are now in 1943 moscow, you are in the kremlin and you directly report to joseph stalin, he tells you that he likes your hair. The german offensive is closing in and you must decide if you are going to fight for the union or leave "+status);
    }
    //epic

    else if (status>90)  {
      return ("Epic Ending\nYou have completed the party, you have collected all the studs and minikits, you go back to the homescreen and decide to buy a new batmobile, alfred tells you- you look dashing! you put on your new yellow colored batsuit and go to the streets of texas to defeat the cactus people");
    }
    else{
      return ("error you broke the game"+status);
    }
  }

}