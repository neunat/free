
public class Cereal implements Comparable<Cereal>{
	 private String name; 
   private boolean cold; 
   private int calories;
   private int protein; 
   private int fat; 
   private int sodium; 
   private int carbs; 
   private int sugar; 
   private int potassium; 
   private int vitamins; 

	// our constructor(s) should reflect the private instance variables that we use
  public Cereal(String name, boolean cold, int calories, int protein, int fat, int sodium, int carbs, int sugar, int potassium, int vitamins) { 
    name = ""; 
    cold = false; 
    calories = 0; 
    protein = 0; 
    fat = 0; 
    sodium = 0; 
    carbs = 0; 
    sugar = 0; 
    potassium = 0; 
    vitamins = 0; 

  }
	
	
	// add getters (do we need setters?)
  public String getname(){
    return name; 
  }
  public boolean cold(){
    return cold; 
  }
  public int calories(){
    return calories; 
  }
   public int protein(){
    return protein; 
  }
   public int fat(){
    return fat; 
  }
   public int sodium(){
    return sodium; 
  }
   public int carbs(){
    return carbs; 
  }
   public int sugar(){
    return sugar; 
  }
   public int potassium(){
    return potassium; 
  }
   public int vitamins(){
    return vitamins; 
  }

	
	/**
	 * This method inputs a String that represents a Cereal Object 
	 * and converts the 
	 * @param s
	 * @return
	 */
	public Cereal parseCereal(String s) {
    int comma = s.indexOf(","); 
    String name = s.substring(0, comma);
    s = s.substring(comma + 1);
    boolean cold = (s.substring(0, 1).equals("C"));
    s = s.substring(2);
    comma = s.indexOf(",");
    int calories = Integer.parseInt(s.substring(0, comma));
   

		return new Cereal(name, cold, calories, protein, fat, sodium, carbs, sugar, potassium, vitamins);
	}
	
	@Override
	public String toString() {
		String s = " Ceral Name: " + name + "Cold: " + cold + "Nutrition Information" + "Calories:.  " + calories + "Protein: " + protein + "Fat: " + fat + "Sodium: " + sodium + "Fiber: " + "Carbs: " + carbs + "Sugar: " + sugar + "Potassium: " + potassium + "Vitamins " + vitamins;
		
		
		return s;
	}
	
	
	/*
	 * We want to use a strategy similar to the StringFreq class we created
	 * In that class, we had an int that we used to determine the attribute that
	 * we would use to compare a Cereal with another Cereal.
	 * 
	 */
	public int compareTo(Cereal arg0) {

		return 0;
	}

}
