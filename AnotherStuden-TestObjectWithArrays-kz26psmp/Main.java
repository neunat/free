import java.util.Arrays;

class Main {
// array of Test Objects for ... testing...
  private Test[] tests = {
     new MathTest("abe", 96),null,new MathTest("brenda", 98),null,null};
     /*,
     new MathTest("carl", 5),null,new MathTest("dani", 87),
     new MathTest("erik", 49),null, null, null, new MathTest("fred", 7),
     new MathTest("arjun", 27),new MathTest("bill", 97),
     new MathTest("vik", 99),null,new MathTest("aditya", 98),
     new MathTest("max", 88),new MathTest("jo", 99)};
*/

  public static void main(String[] args) {
    Main m = new Main();
    m.testMean();
    // m.testHighScoreIndex();
    // m.testFindMode();
    // m.testRemoveHighest();
    // m.testSort();
  }

  public void testMean(){
     System.out.println("Testing the find mean functionality");
    // makes a copy of the global array called tests. 
    // the way I refer to the global variable is by 
    // using the keyword - this
    //Test[] tests = Arrays.copyOf(this.tests, this.tests.length);

    //System.out.println(tests);
    //System.out.println(this.tests);
    double avg = mean(tests);
    System.out.println(avg);
    // for(Test t: tests){
    //   if(t==null){
    //     System.out.println("Empty!");
    //     continue;
    //   }
    //    t.setClassAverage(avg);
    //    System.out.println(t);
   // }

    // for(int i = 0; i< tests.length; i++){
    //   System.out.println(i+" "+tests[i].hashCode()+"  "+this.tests[i].hashCode());
    // }

  }
 
  public double mean(Test[] tests){
    int count = 0; 
    for(int i = 0; i < tests.length; i++){
      if(tests[i] == null){
        continue; 
      }
      else{
        count += tests[i].getScore();
      }
    }
    



    return count / tests.length; 
  }

  public void testHighScoreIndex(){
     System.out.println("Testing the high score index functionality");
    int index = highScoreIndex(tests);
    if(index < 0){
      System.out.println("No Tests in the list!");
    }
    else{
       System.out.println("Highest scoring Test found at: "+index);
       System.out.println("The test object is: "+tests[index]);
    }
   

  }
  public int highScoreIndex(Test[] tests){


    return -1;
  }

  public void testFindMode(){
    System.out.println("Testing the find mode functionality");
    int scoreMode = modeScore(tests);
    int numModes = 0;
    for(Test t:tests){
      if(t==null)
        continue;// skip to the end of the loop
      if(t.getScore()==scoreMode){
        numModes ++;
      }
    }
    System.out.println("There were "+numModes+" Tests with a score of "+scoreMode);
  }
  
  public int modeScore(Test[] tests){

    return -1;
  }

  public void testRemoveHighest(){
    Test[] tests = Arrays.copyOf(this.tests, this.tests.length);
    System.out.println("Testing RemoveHIghest.  Removing the 5 highest scoring tests and printing out");
     for(int i = 0; i < 5; i++){
       Test removed = removeHighest(tests);
       System.out.println("Just removed "+i+" "+removed);
     }
  }

  public Test removeHighest(Test[] tests){

    return null;
  }
  public void testSort(){
    Test[] tests = Arrays.copyOf(this.tests, this.tests.length);
    System.out.println("Testing sort...");
    for(Test t:tests){
      System.out.println(t);
    }
    sort(tests);
    for(Test t:tests){
      System.out.println(t);
    }
  }
  public void sort(Test[] tests){

  }

  public Test[] createRandomTests(int numTests){
    Test[] tests = null;// this line would change, of course!


    return tests;
  }
}