#![no_std]
#![compiler_builtins]
#![no_builtins]
#![feature(compiler_builtins)]
use core::hint::unreachable;
extern crate core;
///# Safety
///see core::ptr::write_bytes
#[no_mangle]
pub unsafe extern "C" fn memset(mut ptr: *mut u8, byte: i32, count: usize) -> *mut u8 {
  let end = ptr.add(count);
  while (ptr as usize) < end as usize {
    *ptr = byte as u8;
    ptr = ptr.add(1);
  }
  ptr
}

#[no_mangle]
pub unsafe extern "C" fn memcpy(dst: *mut u8, src: *const u8, mut size: usize) {
  let mut i = 0;
  while size > 0 {
    *dst.add(i) = *src.add(i);
    size = size - 1;
    i = i + 1;
  }
}
#[no_mangle]
#[allow(improper_ctypes_definitions)]
pub unsafe extern "C" fn __udivti3(num: u128, denom: u128) -> u128 {
  if num < denom{
    return 0;
  } else if denom == 1{
    return num;
  } else if denom == 0{
    unreachable()
  }
  let mut q = 0;
  let mut r = 0;
  let mut i = 128;
  while i > 0{
    i = i - 1;
    r = r << 1;
    r = r | ((num & (1 << i))>> i);
    if r >= denom {
      r = r - denom;
      q = q | (1 << i)
    }
  }
  q
}
