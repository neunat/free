class IterateString{
  String songTitle = "Gone With the Wind";
  int counter = 0;
  public IterateString(){
    while (counter!=songTitle.length()){
      System.out.println(songTitle.substring(counter,counter+1));
      counter++;
    }
    counter = songTitle.length();
    while (counter!=0){
      System.out.println(songTitle.substring(counter-1,counter));
      counter--;
    }
  }
}
