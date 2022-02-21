
class Puzzle {
  final int NUMBER_OF_ENTRIES = 5;

  public Puzzle() {
    int counter = 0;
    while (counter < NUMBER_OF_ENTRIES) {
      System.out.println(perfectCubeOrSquare(UserInput.getInt()));
      counter++;
    }
  }

  public String perfectCubeOrSquare(int num) {
    String endm = "";
    if (num > 1) {
      for (int i = 1; i < 50; i++) {
        if (Math.pow(i, 2) == num) {
          endm += "Perfect Square";
        }
        if (Math.pow(i, 3) == num) {
          endm += " Perfect Cube";
        }
      }
      if (endm.equals("")) {
        endm += "Not a cube or square";
      }
    } else {
      endm += "Eroor value less than 1";
    }
    return endm;
  }
}
