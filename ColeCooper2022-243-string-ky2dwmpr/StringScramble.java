class StringScramble {
  public String scrambleWord(String word) {
    // ignore the error it works lol
    String bob = "";

    for (int i = 0; i < word.length() - 1; i++) {
      if (word.substring(i, i + 1).toUpperCase().equals("A")) {
        bob += (word.substring(i + 1, i + 2) + word.substring(i, i + 1));
        i++;
      } else {
        bob += (word.substring(i, i + 1));
      }
    }
    if (word.length() != 3) {
      bob += word.substring(word.length() - 1, word.length());
    }
    return bob;
  }

  public String[] scrambleOrRemove(String[] tim) {
    String[] endl = { "", "", "", "", "", "", "" };
    int counter = 0;
    for (String jim : tim) {
      if (!(scrambleWord(jim).equals(jim))) {
        endl[counter] = ((scrambleWord(jim)));
      }
      counter++;
    }
    return endl;
  }
}
