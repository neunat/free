public class ChallengeReplace  {
    public ChallengeReplace()  {
        String message = "I love cats! I have a cat named Coco. My cat's very smart!";

        // Write a while loop here that replaces every occurrence of "cat"
       
        while (message.indexOf("cat") !=-1){
          message = message.substring(0,message.indexOf("cat"))+"dog"+message.substring(message.indexOf("cat")+3,message.length());
          
        }
        // in the message replace cat with "dog", using indexOf() and substring().

        System.out.println(message);
    }

    public void printEvenNumbers(){
        int counter  = 0;
        while (counter !=101){
          counter ++;
          if ((counter%2)==0){
            System.out.println(counter);
          }
        }
    }
   
}