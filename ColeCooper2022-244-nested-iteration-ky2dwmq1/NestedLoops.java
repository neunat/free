class NestedLoops {
  public NestedLoops() {
    // nested 1
    for (int i = 0; i < 10; i++) {
      System.out.println();
      for (int b = 0; b < 10; b++) {
        System.out.print("* ");
      }
    }
    System.out.println();
    for (int i = 0; i < 10; i++) {
      System.out.println();
      for (int b = 0; b < 5; b++) {
        System.out.print("* ");
      }
    }

    System.out.println();
    for (int i = 0; i < 5; i++) {
      System.out.println();
      for (int b = 0; b < 20; b++) {
        System.out.print("* ");
      }
    }

    System.out.println();
    for (int i = 0; i < 10; i++) {
      System.out.println();
      for (int b = 0; b < 10; b++) {
        System.out.print(b+" ");
      }
    }
    System.out.println();
    for (int i = 0; i < 10; i++) {
      System.out.println();
      for (int b = 0; b < 10; b++) {
        System.out.print(i+" ");
      }
    }

    System.out.println();
    for (int i = 0; i < 11; i++) {
      System.out.println();
      for (int b = 0; b < i; b++) {
        System.out.print(b+" ");
      }
    }

    System.out.println();
    for (int i = 10; i > 0; i--) {
      System.out.println();
      for (int b = 0; b < i; b++) {
        System.out.print(b+" ");
      }
    }

    System.out.println();
    for (int i = 0; i < 10; i++) {
      System.out.println();
      for (int b = 10; b > i; b--) {
        System.out.print(" ");
      }
      for (int b = 1; b < i; b++) {
        System.out.print(b);
      }
      
    }
  }
  
}