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
  public String pleasework(int status, String guest, String car, String clothes){
    if ((car == "Yellow Taxi")&&(guest=="Mr Stoll")&&(clothes=="Subway Hoodie")){
      return ("Legendary Ending\n");
       
    }
    //bad
    else if (status<20){
      return ("Bad Ending\n");
    }
    //good
    else if (status<30){
      return ("Good Ending\n");
    }
    //epic

    else {
      return ("Epic Ending\n");
    }
  }
}