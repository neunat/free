public class SciFiName   {
    /**
     * All input that you privide should be at least three letters long
     * or the program may crash (but feel free to test this!)
     * 
     * For best results, use lowercase letters and do not use spaces in your input
     */
    public SciFiName() {
        System.out.println("If you provide me some information I will provide a Science Fiction name for you.");
        System.out.println("Please have all responses be at least three characters long.");
        System.out.println("For best results, user lowercase letters with no spaces.\n");

        // notice this method (print) does not print a newline
        System.out.print("Enter your first name: ");
        String firstName = UserInput.getString();
        System.out.print("Enter your last name: ");
        String lastName = UserInput.getString();
        System.out.print("Enter the city where you or one of your parents were born: ");
        String city = UserInput.getString();
        System.out.print("Enter the name of your grammar school: ");
        String school = UserInput.getString();
        System.out.print("Enter the first name of a sibling or other relative: ");
        String relativeName1 = UserInput.getString();
        System.out.print("Enter the first name of a second sibling or relative: ");
        String relativeName2 = UserInput.getString();

        // ************   generate a sciFi name   **************
        /* 
         * ********** FIRST NAME **********
         * ********** FIRST NAME **********
         * 
         * Sci-Fi first name will be generated using the following algorithm:
         * Using the indexOf and substring methods, get the first three letters of your first name.
         * Similarly, get the first two letters of your last name.
         * Using concatenation, combine these results to generate your Sci-fi first name.
         */
        String sciFirstName = "";
        // ~~~~~~~~ ONE LINE OF CODE GOES BELOW  ~~~~~~~~ 
        
        sciFirstName = firstName.substring(0,3);
        
        // ~~~~~~~~ ONE LINE OF CODE GOES BELOW  ~~~~~~~~ 
        
        sciFirstName += lastName.substring(0,2);
        
        System.out.println("First Name: " + sciFirstName);
        /*
         * 
         * ********** LAST NAME ***********
         * ********** LAST NAME ***********
         * 
         * Sci-fi last name will be generated using a similar algorithm:
         * Get the first two letters of the city you were born in.
         * Get the get the first three letters of your elementary (or previous) school.
         * Using concatenation, combine these results to generate your Sci-Fi last name.
         */
        String sciLastName = "";
        // ~~~~~~~~ ONE LINE OF CODE GOES BELOW  ~~~~~~~~ 
        sciLastName += city.substring(0,2);
        
        
        // ~~~~~~~~ ONE LINE OF CODE GOES BELOW  ~~~~~~~~ 
        
        sciLastName += school.substring(0,4);
        
        System.out.println("Last Name: " + sciLastName);

        /*
         * 
         * ********** PLACE OF ORIGIN ***********
         * ********** PLACE OF ORIGIN ***********
         * Your Sci-Fi place of origin will be more randomly generated and will extract letters from the end of a name:
         * Generate a random number between 1 and (length – 1) of a relative’s first name. For example, the result may be 2 as shown in the table:

         * Get the last letters of your relative’s first name beginning at the random location through to the end of the string.

         * Generate a random number between 1 and (length – 1) of another relative’s name. You may choose to use a friend's name in place of a relative's name.
         * Get the last letters of this name beginning at the random location through to the end of the string.
         * Using concatenation, combine the results from b and d to generate your Sci-Fi place of origin.
         * Print a friendly message such as:
         * "Hello carki chsal of lesomas. Welcome!"
         */
        String sciOrigin = "";
        int randomNbr = (int)(Math.random() * (relativeName1.length() - 1));
        // ~~~~~~~~ COMPLETE THE CODE BELOW  ~~~~~~~~
        sciOrigin = relativeName1.substring(randomNbr,relativeName1.length());

        
        int randomNbr2 = (int)(Math.random() * (relativeName2.length() - 1));
        // ~~~~~~~~ COMPLETE THE CODE BELOW  ~~~~~~~~
        sciOrigin = sciOrigin + relativeName2.substring(randomNbr2,relativeName2.length());

        
        System.out.println("Origin :" + sciOrigin + "\n");

        System.out.println("Hello: " + sciFirstName + " " + sciLastName + " of " + sciOrigin + " Welcome to Earth!");

    }
}