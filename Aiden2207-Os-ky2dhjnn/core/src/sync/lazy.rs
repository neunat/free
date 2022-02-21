use crate::cell::UnsafeCell;
use crate::hint::spin_loop;
use crate::marker::Sync;
use crate::ops::Deref;
use crate::ops::Fn;
use crate::option::Option;
use crate::sync::atomic::AtomicBool;
use crate::sync::Ordering;
pub struct Lazy<T, F = fn() -> T> {
  init: F,
  needs_init: AtomicBool,
  locked: AtomicBool,
  data: UnsafeCell<Option<T>>,
}
impl<T, F> Lazy<T, F> {
  pub const fn new(f: F) -> Self {
    Lazy {
      init: f,
      needs_init: AtomicBool::new(true),
      locked: AtomicBool::new(false),
      data: UnsafeCell::new(Option::None),
    }
  }
}

unsafe impl<T: Sync, F: Sync> Sync for Lazy<T, F> {}

impl<T, F: Fn() -> T> Deref for Lazy<T, F> {
  type Target = T;
  fn deref(&self) -> &T {
    if !self.needs_init.load(Ordering::Acquire) {
      return unsafe { &*self.data.get() }.as_ref().unwrap();
    }
    let cond = self
      .locked
      .compare_exchange(false, true, Ordering::Acquire, Ordering::Relaxed)
      .is_err();
    if cond {
      while self
        .locked
        .compare_exchange(false, true, Ordering::Acquire, Ordering::Relaxed)
        .is_err()
      {
        spin_loop();
      }
    } else {
      let val = (self.init)();
      unsafe { *self.data.get() = Option::Some(val) };
      self.locked.store(false, Ordering::Release);
      self.needs_init.store(false, Ordering::Release);
    }
    unsafe { &*self.data.get() }.as_ref().unwrap()
  }
}
