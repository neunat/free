class Main {
  public static void main(String[] args) {

    Comedian pete = new Comedian("Pete",7);

    Comedian dillion = new Comedian("Dillion",100);
    
    Comedian anthony = new Comedian("Anthony",0);

    System.out.println(pete.tellJoke("Whats stolls favorite fruit", "banana pudding"));

    System.out.println(dillion.tellJoke("how many fruit loops can fit in the ocean", "I dont know"));

    System.out.println(anthony.tellJoke("A horse and a monkey walk into a walmart what do they buy", "some floor mats"));
  }
}