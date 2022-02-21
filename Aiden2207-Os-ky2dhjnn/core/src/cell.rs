use crate::marker::Sync;
use crate::Sized;
#[lang = "unsafe_cell"]
#[repr(no_niche)]
pub struct UnsafeCell<T: ?Sized> {
  #[allow(unused)]
  t: T,
}

impl<T: ?Sized> !Sync for UnsafeCell<T> {}

impl<T: ?Sized> UnsafeCell<T> {
  pub fn get(&self) -> *mut T {
    self as *const Self as *mut Self as _
  }
}

impl<T> UnsafeCell<T> {
  pub const fn new(t: T) -> Self {
    UnsafeCell { t }
  }
}
