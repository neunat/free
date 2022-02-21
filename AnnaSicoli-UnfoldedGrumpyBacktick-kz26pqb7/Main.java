class Main {
  public static void main(String[] args) {
    int[] nums = {1, 3, 2, 5, 8, 7, 0};
    int total = 0;
    for (int k = 0; k < nums.length/2; k++)
      total = total + nums[k];
    System.out.println(total);
  }
}