class Main {
  public static void main(String[] args) {
    GuessChecker gc = new GuessChecker();
    TwoWayStatements tw = new TwoWayStatements();

    tw.divisibleBy(0, 0);
    tw.divisibleBy(2, -1);
    tw.divisibleBy(2, 9999);
    tw.divisibleBy(3, 2);
    

    tw.maxOfThree(1, 2, 3);
    tw.maxOfThree(1, 3, 3);
    tw.maxOfThree(1, 2, 3);
    tw.maxOfThree(2, 2, 3);

    tw.maxOfThree(1, 2, 0);
    tw.maxOfThree(1, -50, 3);
    tw.maxOfThree(1, 99999, 3);

    tw.windchill(-50, 36);
    tw.windchill(-49, 36);
    tw.windchill(-48, 36);

    tw.windchill(50, 36);
    tw.windchill(49, 36);
    tw.windchill(48, 36);

    tw.windchill(14, 2);
    tw.windchill(14, 3);
    tw.windchill(14, 4);
    
    tw.windchill(14, 109);
    tw.windchill(14, 110);
    tw.windchill(14, 111);

    tw.isEven(0);
    tw.isEven(99999);
    tw.isEven(5);
    tw.isEven(4);
    tw.isEven(-1);
    

  }
}