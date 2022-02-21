class StringPractice {
  private String stringField;
  public StringPractice(String stringIn){
  stringField = stringIn;

  }
  public void cutString(){
    System.out.println("Length of String: "+stringField.length());
    System.out.println(stringField.substring(0,stringField.indexOf(" ")));
    System.out.println(stringField.substring(stringField.lastIndexOf(" ")+1,stringField.length()-1));
    System.out.println(stringField.replace("Texas", "Missouri"));
  }
}