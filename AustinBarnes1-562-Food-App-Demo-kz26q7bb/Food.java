public class Food{
private String name;
private int calories;

  public Food(String theName, int theCal){
    name = theName;
    calories = theCal;
  }
  public String getName(){
    return name;
  }
  public void setName(String newName){
    name = newName;
  }
  public int getCalories(){
    return calories;
  }
  public void setCalories(int newCals){
    calories += newCals;
  }
  public String toString(){
  return name + " have " + calories + " calories.";
}
}
