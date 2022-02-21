/**
 * Objects of the Time class hold a time value for
 * a European‐style 24 hour clock.
 * The value consists of hours, minutes and seconds.
 * The range of the value is 00:00:00 (midnight)
 * to 23:59:59 (one second before midnight).
 */
public class Time
{
   // The values of the three parts of the time
   private int hours;
   private int minutes;
   private int seconds;

   /**
    * Creates a new Time object set to 00:00:00
    * Do not change this constructor.
    */
   public Time()
   {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
   }

   /**
    * Constructor for objects of class Time.
    * Creates a new Time object set to h:m:s.
    * Assumes, without checking, that the parameter values are
    * within bounds.
    * For this task, you don't need to worry about invalid parameter values.
    * Do not change this constructor.
    */
   public Time(int h, int m, int s)
   {
      this.hours = h;
      this.minutes = m;
      this.seconds = s;
   }

   /**
    * Add one second to the current time.
    * When the seconds value reaches 60, it rolls over to zero.
    * When the seconds roll over to zero, the minutes advance.
    * So 00:00:59 rolls over to 00:01:00.
    * When the minutes reach 60, they roll over and the hours advance.
    * So 00:59:59 rolls over to 01:00:00.
    * When the hours reach 24, they roll over to zero.
    * So 23:59:59 rolls over to 00:00:00.
    */
   public void tick()
   {
      if (this.seconds <59){
        this.seconds +=1;
      }
      else {
        this.seconds =0;
        if (this.minutes <59){
          this.minutes +=1;
        }
        else{
          this.minutes = 0;
          if (this.hours <23){
            this.hours +=1;
          }
          else{
            this.hours = 0;
          }
          }
        }
        }
        
      
      
   

   /**
    * Add an offset to this Time.
    * Rolls over the hours, minutes and seconds fields when needed.
    */
   public void add(Time offset)
   {
        if (((this.seconds+offset.seconds)>=60)){
         this.seconds = (this.seconds%59);
         this.minutes +=1;
       }
        else{
          this.seconds +=offset.seconds;
        }
        // adding minutes
        if (((this.minutes+offset.minutes)>=60)){
         this.minutes = (this.minutes%59);
         this.hours +=1;
        }
        else{
          this.minutes +=offset.minutes;
        }
        //adding hours
        if (((this.hours+offset.hours)>=24)){
         
         this.hours=0;
         this.hours += (this.hours%24);
        }
        else{
          this.hours +=offset.hours;
        }


   }

   public String toString()
   {
      return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
   }

   /**
    * Returns a string representing the argument value, adding a leading
    * "0" if needed to make it at least two digits long.
    * Do not change this.
    */
   private String pad(int value)
   {
      String sign = "";
      if (value < 0)
      {
         sign = "‐";
         value = -1 * value;
       }
       if (value < 10) {
          return sign + "0" + value;
       } else {
          return sign + value;
       }
    }
 }