#define SSFN_CONSOLEBITMAP_TRUECOLOR
#include "ssfn.h"
void set_buf(ssfn_font_t* src, ssfn_buf_t dest){
  ssfn_src = src;
  ssfn_dst = dest;
}
ssfn_buf_t get_buf(void){
  return ssfn_dst;
}