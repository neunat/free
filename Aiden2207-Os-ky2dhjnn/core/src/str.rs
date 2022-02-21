use crate::iter::*;
use crate::macros::*;
use crate::mem::transmute;
use crate::option::*;
use crate::ptr::{from_parts, metadata};
#[lang = "str"]
impl str {
  pub fn chars(&self) -> Chars<'_> {
    Chars { string: self }
  }
  pub fn as_ptr(&self) -> *const u8 {
    self as *const _ as _
  }
  pub fn as_mut_ptr(&mut self) -> *mut u8 {
    self as *mut _ as _
  }
  pub fn is_empty(&self) -> bool {
    self.len() == 0
  }
  pub fn len(&self) -> usize {
    metadata(self)
  }
  ///# Safety
  /// ptr must be valid for len, pointed to slice must be utf-8
  pub unsafe fn from_raw_parts<'a>(ptr: *const u8, len: usize) -> &'a Self {
    &*from_parts(ptr as _, len)
  }
}

#[derive(Clone)]
pub struct Chars<'a> {
  pub string: &'a str,
}
impl Iterator for Chars<'_> {
  type Item = char;
  fn next(&mut self) -> Option<char> {
    if self.string.is_empty() {
      return None;
    }
    let ptr = self.string.as_ptr();
    let len = self.string.len();
    let val = unsafe { *ptr };
    if val < 128 {
      self.string = unsafe { str::from_raw_parts(ptr.add(1), len - 1) };
      return Some(val as char);
    }
    if val >> 5u32 == 0b110 {
      self.string = unsafe { str::from_raw_parts(ptr.add(2), len - 2) };
      let high = ((val & 0b11111) as u32) << 6u32;
      let low = unsafe { *ptr.add(1) } & 0b111111;
      return unsafe { Some(transmute(high | low as u32)) };
    }
    if val >> 4u32 == 0b1110 {
      self.string = unsafe { str::from_raw_parts(ptr.add(3), len - 3) };
      let high = ((val & 0b1111) as u32) << 12u32;
      let mid = ((unsafe { *ptr.add(1) } & 0b111111) as u32) << 6u32;
      let low = unsafe { *ptr.add(2) } & 0b111111;
      return unsafe { Some(transmute(high | mid | low as u32)) };
    }
    let high = ((val & 0b111) as u32) << 18u32;
    self.string = unsafe { str::from_raw_parts(ptr.add(4), len - 4) };
    let mid = ((unsafe { *ptr.add(1) } & 0b111111) as u32) << 12u32;
    let low_mid = ((unsafe { *ptr.add(2) } & 0b111111) as u32) << 6u32;
    let low = unsafe { *ptr.add(3) } & 0b111111;
    unsafe { Some(transmute(high | mid | low_mid | low as u32)) }
  }
}
