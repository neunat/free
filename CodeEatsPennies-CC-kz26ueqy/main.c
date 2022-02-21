#include <stdio.h>

int main(void) {
  char str1[20], str2[30];
  int test = 50, a=6, b=2, c=6, d=7;
  int mult = a*b*c*d*d;

  printf("\n");
  printf("%d", test);
  printf("\n%d", mult);

  int numbers[10];
  numbers[1] = 6;
  numbers[2] = 646;
  numbers[3] = 3466;

  int sum = numbers[1]+numbers[2]+numbers[3];
  printf("\n%d", sum);
  

  char vowels[][5] = {
    {'A', 'E', 'I', 'O', 'U'},
    {'a', 'e', 'i', 'o', 'u'}
  };
  printf("\n\n%c", vowels[1][3]);

  int num[][9] = {
    {0, 1, 2, 3, 4, 5, 6, 7, 8},
    {1, 1, 1, 1, 1, 1, 1, 1, 1},
    {6, 3, 2, 4, 5, 7, 3, 9, 2},
    {11, 22, 33, 44, 55, 66, 77, 88, 99}
  };

  printf("\n");
  if (num[1][3]>num[2][4]) {
    printf("woah man");
  };
  if (num[1][3]<num[2][4]) {
    printf("Dude. Wicked.");
  }

  printf("\n\n");
  int thisisnumber = 37;
  
  char * name = "John Smith";
  int age = 27;

  /* prints out 'John Smith is 27 years old.' */
  printf("%s is %d years old.\n", name, age);

  int i;
  for (i=0; i<5; i++) {
    printf("%d", i);
    printf("\n");
  }

  int arr[] = {8, 7, 3, 5, 6, 78, 8, 12, 42, 56, 67, 87, 23, 54, 65, 6};

  int o;
  for (o=0; o<4; o++) {
    printf("%d", arr[o]);
    printf("\n");
  };


  int ay = 5;
  while (ay<9) {
    printf("%s", "ay");
    printf("\n");
    ay++;
  }


  int n;
  int yy = 3;
  while (1){
    n++;
    if (n>8){
      printf("Wowwers");
      break;
    }
  }










  return(0);
}