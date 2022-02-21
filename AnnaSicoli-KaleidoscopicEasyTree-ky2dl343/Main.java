class Main {
  public static void main(String[] args) {
    String x = doubleChar("hello");
    System.out.println(x); 
  }
  public String doubleChar(String str) {
    String newstr = ""; 
    for (int i = 0; i < str.length()-1; i++)
    {
      newstr += str.substring(i, i+1) + str.substring(i, i+1); 
    }
    return newstr; 
}

}