class Main {
  public static void main(String[] args) {
    //RemoveEveryOther reo = new RemoveEveryOther();
    //RemoveVowels rv = new RemoveVowels();
    //RemoveDoubleSpace rds = new RemoveDoubleSpace();
    //Dyslexia d = new Dyslexia();
  //   DuplicateChars dc = new DuplicateChars();
  // Anagram a = new Anagram();
    StringScramble ss =  new StringScramble();
    String[] scram = { "TAN", "ABRACADABRA", "WHOA", "APPLE", "EGGS" };
    for (String words : ss.scrambleOrRemove(scram)) {
      if (!(words.equals(""))) System.out.println(words);
    
    }
  }
}