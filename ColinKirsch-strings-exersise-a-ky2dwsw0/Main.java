class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    String s = "Computer Science";
    System.out.println(s.charAt(3));
    System.out.println(s.length());
    System.out.println(s.charAt(0));
    System.out.println(s.substring(8));
    System.out.println(s.indexOf('A'));
    System.out.println(s.substring(1,4));
    System.out.println(s.substring(1));
    System.out.println(s.indexOf('m',4));
    System.out.println(s.charAt(4));
    System.out.println(s.substring(4,5));
    System.out.println(String.valueOf(2*4));
    System.out.println(String.valueOf(27%7));
    System.out.println(String.valueOf((char)('A'+4)));
    System.out.println(String.valueOf(3<4&&5<6));

    String name = "Buckaroo Banzai";
    System.out.println(name.toLowerCase().indexOf('a'));
    System.out.println(name.toUpperCase().charAt(5));
    System.out.println(name.substring(3).indexOf('i'));
    System.out.println(name.substring(2).toUpperCase());
    System.out.println(name.toUpperCase().indexOf('A',1));
    System.out.println(name.substring(name.indexOf(' ')+1).length());



    

  }
}