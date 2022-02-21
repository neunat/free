#include <stdio.h>
#include <unistd.h>
void clear_screen() {
  for (int i = 0; i < 100; i++) {
	printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  }
}
int main(void) {
  void clear_screen();
  int choice;
  printf("\033[0;32m");
  printf("Welcome to my life!\n\n");
  printf ("The fairest and funnest game ever!\n\n");
  printf ("When you are ready, just press 1 then enter.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  printf ("(you have been warned >:D)");
  scanf ("%d" , &choice);
  if (choice == 1){
    clear_screen();
    printf ("Alright! Lets begin!\n\n");
    printf ("Ok, you wake up early in the morning.\n");
    printf ("Press 1 if you want to brush your teeth\n");
    printf ("Press 2 if you want to take a shower\n");
    scanf ("%d", &choice);
    if (choice == 1){
    printf ("you choked LOL don't worry u r still alive\n");
    printf ("Press 9 to continue\n\n");
    scanf ("%d", &choice);
    if (choice == 9){
          clear_screen();
   
    printf ("You are getting dressed for school\n\n");
    printf ("Press 1 to wear a jacket\n");
    printf ("Press 2 to wear a t-shirt\n ");
    scanf ("%d", &choice);
    if (choice == 1){
      clear_screen();
      printf ("LOOL IT IS SUMMER U BURNED TO DEATH\n\n");
      printf ("GAME OVER\n\n\n\n\n");
      printf ("You can still try again tho (:");

    }
    if (choice == 2){
      clear_screen();
      printf ("Good Job!\n\n");
      printf ("Lucky for you, it is summer\n\n");
      printf ("Press 9 to continue");
      scanf ("%d", &choice);
      if (choice == 9){
        clear_screen();
        printf ("You have to go to school\n\n");
        printf ("Press 1 to walk\n");
        printf ("Press 4 to go on the bus\n\n");
        scanf ("%d", &choice);
        if (choice == 1){
          clear_screen();
          printf ("Good Job!\n\n");
          printf ("The bus was full so you had to walk\n\n");
          printf ("Press 9 to continue");
          scanf ("%d", &choice);
          if (choice == 9){
            clear_screen();
            printf ("You didn't do your HW!!!\n\n");
            printf ("Press 1 to do it now\n");
            printf ("Press 3 to ignore and make excuses");
            scanf ("%d", &choice);
            if (choice == 1){
             clear_screen();
             printf ("You are a smart person, good job.\n\n");
             printf ("In fact, since you have made it this far, you get a reward!!\n\n");
             printf ("Press 7 to collect your reward!\n");
             scanf ("%d", &choice);
             if (choice == 7){
               clear_screen();
               printf ("Here is your reward!\n\n");
               printf ("      _______\n");
               printf ("     /       \\ \n");
               printf ("    /_________\\ \n");
               printf ("   |___________|\n");
               printf ("    \\         /\n");
               printf ("     \\_______/\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         | |\n");
               printf ("         |_|\n\n");
               printf ("Enjoy!\n\n");
               printf ("When you are done, press 9");
               scanf ("%d", &choice);
               if (choice == 9){
                 clear_screen();
                 printf ("First class of the day!\n\n");
                 printf ("Second class of the day!\n\n");
                 printf ("Third class of the day!\n\n");
                 printf ("Fourth class of the day!\n\n");
                 printf ("Some more classes!\n\n");
                 printf ("School is over!\n\n");
                 printf ("Press 9 to continue");
                 scanf ("%d", &choice);
                 if (choice == 9){
                  clear_screen();
                  printf ("GOOD JOB YOU WON!\n\n");
                  printf ("PLAY AGAIN AND SEE IF YOU GET ANOTHER ENDING!");
                 }

               }
              

             }
            }
            if (choice == 3){
              printf ("What is wrong with you man?\n");
              printf ("You have to do your HW\n");
              printf ("What im trying to say is..\n\n");
              printf ("GAME OVER ");
            }

          }
          
        }

        }
        if (choice == 4){
          clear_screen();
          printf ("The bus was full\n\n");
          printf ("You have to walk instead so restart and chooose walk\n");
        }
      }
      
    }
    }

    }
    if (choice == 2){
      printf ("You drowned and died \n");
      printf ("GAME OVER\n");
      printf ("You can still try again tho (:");
    }
    }

  


