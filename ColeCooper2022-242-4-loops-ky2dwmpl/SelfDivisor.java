class SelfDivisor {
  public String selfDivisor(Integer num) {
    char[] nob = num.toString().toCharArray();
    int wok = 0;
    boolean bob = true;
    for (char number : nob) {
      wok = Character.getNumericValue(number);
      // System.out.println(wok);
      if (wok != 0) {
        if ((num % wok) != 0) {
          bob = false;
        }
      } else
        bob = false;
    }
    return (num + " is " + bob);
  }
}
