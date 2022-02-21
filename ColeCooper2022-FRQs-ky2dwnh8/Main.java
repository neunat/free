class Main {
  public static void main(String[] args) {
    Time time = new Time(0,0,0);
time.tick();
System.out.println("For (0,0,0) and tick() you got " + time + " which should be 00:00:01");

time = new Time(0,0, 58);
time.tick();
System.out.println("For (0,0,58) and tick() you got " + time + " which should be 00:00:59");

time = new Time(0,0, 59);
time.tick();
System.out.println("For (0,0,59) and tick() you got " + time + " which should be 00:01:00");

time = new Time(0,58, 59);
time.tick();
System.out.println("For (0,58,59) and tick() you got " + time + " which should be 00:59:00");

time = new Time(0,59, 59);
time.tick();
System.out.println("For (0,59,59) and tick() you got " + time + " which should be 01:00:00");

time = new Time(23,59, 59);
time.tick();
System.out.println("For (23,59,59) and tick() you got " + time + " which should be 00:00:00");
  }
}