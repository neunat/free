class Stringpractice {
  private String myString;
  public String spain = "Spain";
  public Stringpractice(String stringIn){
    myString = stringIn;

  }
  public void testString(){
    int l = myString.indexOf(spain);
    String gspain = myString.substring(myString.indexOf(spain),(myString.indexOf(spain)+5));
    String lword = myString.substring((myString.lastIndexOf(" ")));
    System.out.println("Location of the word spain: "+l+"\nThe keyword form the exercise is: "+gspain+"\nLast word in myString: "+lword);
  }
  public void sliceString(){
    String message = "Please logoff at the end of the block";
    System.out.println("The first word of the String message in lowercase letters: "+(message.substring(0,message.indexOf(" ")).toLowerCase())
    );
    System.out.println("The last word of the string message"+(message.substring(message.lastIndexOf(" "))).toLowerCase());
    message = "I am king pete";
    String target = "king";

    System.out.println("messsage with king removed "+message.substring(0,message.indexOf(target))+message.substring(message.lastIndexOf(" ")));

     message = "That was great - lol.";
     target = "lol";
    String replaceText = "Laugh out loud";
    System.out.println("Message after lol has been replaced: "+(message.substring(0,message.indexOf(target)))+replaceText);
  }
  
}