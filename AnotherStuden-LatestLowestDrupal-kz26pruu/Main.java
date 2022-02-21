class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    System.out.println(Puzzle("a", "gac"));
  }


public static String Puzzle(String letter, String key) { 
  String answer = "";
  int i = key.indexOf(letter);
  int len = key.length();
  if(key.indexOf(letter) >= 0) {
    answer =  key.substring(len - i) + key.substring(i, i); 
  }
  return answer;

  

} }