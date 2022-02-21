#![no_main]
#![no_std]
#![feature(lang_items)]
#![allow(clippy::empty_loop)]
#![feature(abi_x86_interrupt)]
#![feature(extern_types)]
mod bootboot;
mod frame_buffer;
mod ssfn;
mod interrupts;
extern crate core;
#[cfg(target_os = "linux")]
compile_error!("messed up target");


#[no_mangle]
pub extern "C" fn _start() -> ! {
  kernel_main();
  loop {}
}
use core::ptr::metadata;
fn kernel_main() {
  let bootboot = bootboot::get_bootboot();
  for mem in bootboot.mmap{
    ssfn::put_str("\nptr: ");
    ssfn::put_num(mem.ptr as isize);
    ssfn::put_str("\nlen: ");
    ssfn::put_num(mem.size & !0xF);
    ssfn::put_str("\ntype: ");
    ssfn::put_num(mem.size & 0xf);
  }
}


use core::panic::PanicInfo;
use core::any::Any;
#[panic_handler]
fn panic(info: &PanicInfo) -> ! {
  if let Some(str) = info.payload.downcast_ref::<&'static str>(){
    ssfn::put_str(str);
  }
  loop {}
}
