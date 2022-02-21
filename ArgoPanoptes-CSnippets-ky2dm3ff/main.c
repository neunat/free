#include <stdio.h>

int my_strlen(char *s);

int main(void) {
  char *s = "test";
  printf("%d\n", my_strlen(s));

  return 0;
}

int my_strlen(char *s){
  int x;
  for(x = 0; *s != 0; s++, x++)
    ;

  return x;
}