public class Main {
  public static void main(String[] args) {
    JSONObject test = JSONParser.parse("{\"test\": [3, 4, 5, \"hi\"], \"test2\": false, \"test3\": \"LOL!\nThis is interesting...\n\tXD\"}");
    System.out.println(test);
  }
}