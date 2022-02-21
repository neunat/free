use crate::bootboot::ColorType::*;
use crate::frame_buffer::FB;
use core::sync::Lazy;
static FONT: &[u8] = include_bytes!("../../u_vga16.sfn");

#[repr(C)]
struct Buf {
  ptr: *mut u32,
  width: i16,
  height: i16,
  scan_line: u16,
  x: i16,
  y: i16,
  text_color: u32,
  background_color: u32,
}
#[repr(i32)]
#[allow(dead_code)]
pub enum SsfnResult {
  Ok = 0,
  AllocErr = -1,
  BadFile = -2,
  NoFace = -3,
  BadInput = -4,
  BadStyle = -5,
  BadSize = -6,
  NoGlyph = -7,
}
#[link(name = "ssfn")]
extern "C" {
  #[allow(improper_ctypes)]
  fn ssfn_putc(c: char) -> SsfnResult;
  fn set_buf(src:*const u8, dest:Buf);
  fn get_buf() -> Buf;
}
static INIT: Lazy<(), fn()> = Lazy::new(|| unsafe {
  let ssfn_src = FONT as *const _ as _;
  let mut lock = FB.lock();
  let buf = Buf {
    ptr: &mut*lock.buf as *mut _ as _,
    width: lock.width as i16
      * match lock.color_type {
        Argb => 1,
        Abgr => -1,
        _ => 1,
      },
    height: lock.height as _,
    scan_line: lock.scan_line as _,
    x: 0,
    y: 0,
    text_color: 0xFFFFFFFF,
    background_color: 0x00000000,
  };
  let ssfn_dest = buf;
  set_buf(ssfn_src, ssfn_dest);
  
});
pub fn puts(c: char) {
  let _ = &*INIT;
  let lock = FB.lock();
  bounds_check();
  unsafe { ssfn_putc(c) };
  lock.unlock();
}
pub fn put_str(s:&str){
  let _ = &*INIT;
  let lock = FB.lock();
  for c in s.chars(){
    bounds_check();
    unsafe{ ssfn_putc(c) };
  }
  lock.unlock();
}
use core::fmt::*;

pub fn put_num<N:IntToStr>(n:N){
  let mut arr = [0u8; 42];
  let ptr = &mut arr as *mut _ as _;
  unsafe{
    let size = n.write_to_ptr(ptr);
    let str = str::from_raw_parts(ptr, size);
    put_str(str);
  }
}




fn bounds_check(){
  let buf = unsafe{ get_buf() };
  if buf.x >= buf.width - 1{
    unsafe{ ssfn_putc('\n') };
  } 
}