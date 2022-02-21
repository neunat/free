import java.util.Scanner;
class Main {
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);

    final String userName = "AusBar47";
    final int PIN = 2368;
    boolean isRunning = true; /*this is key to the program because it makes the menu code reusable using iteration rather than copying and pasting the menu code over and over. When this becomes false the program stops running.*/
    double accountBalance = 0.00;
    double withdrawalAmt = 0;
    int checkCount;
    double subtotal = 0;
    int withdrawController = 1;
    System.out.println("Login:");
    System.out.print("Username: ");
    String userAttempt = input.nextLine();
    System.out.print("PIN: ");
    int pinAttempt = input.nextInt();

    if(userAttempt.equals(userName) && pinAttempt == PIN)
    {
      System.out.println("Login Successful.");
      Menu.menuNav(userName);
    }else{
      System.out.println("Login Failed. Your account is temporarily locked. Contact your bank to unlock your account.");
      isRunning = false;//Stops the program
    }
    while(isRunning == true ){
    System.out.println("What would you like to do? (Input as number on the PIN pad");
    int userChoice = input.nextInt();
    if(userChoice == 1){
      System.out.println("Account Balance: " + accountBalance+"\n");
      Menu.menuNav(userName);
    }else if(userChoice == 2){//deposit checks
      System.out.println("How many checks would you like to deposit?");
      checkCount = input.nextInt();
      for(int i = 0; i < checkCount;i++){
        System.out.print("Amount of Check " + (i+1) + ": ");
         subtotal = subtotal + input.nextDouble();
      }
      System.out.println("Subtotal to deposit: " + subtotal);
      System.out.println("Original Balance: " + accountBalance);
      System.out.println("New Balance: " + (subtotal + accountBalance)+"\n");
      accountBalance += subtotal;
      Menu.menuNav(userName);
    }else if(userChoice == 3){//withdraw money
    withdrawController = 1;
    while(withdrawController == 1){
      System.out.println("How much would you like to withdraw?");
      withdrawalAmt = input.nextDouble();
      if(withdrawalAmt < accountBalance){
      System.out.println("Previous Balance: " + accountBalance);
      accountBalance -= withdrawalAmt;
      System.out.println("New Balance: " + accountBalance+"\n");
      withdrawController = 0;
      }
     if(withdrawalAmt > accountBalance){
      System.out.println("You cannot withdraw more than your account balance.\n");
      withdrawController = 0;
    } 
    }
    Menu.menuNav(userName);
    }else if(userChoice == 4){//logout
      System.out.println("Logging out...");
      System.out.print("Goodbye.");
      isRunning = false; //this stops the program
    }else{
      System.out.println("Invalid Input");
      Menu.menuNav(userName);    
      }
  }
  }
}