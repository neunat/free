use crate::cell::UnsafeCell;
use crate::hint::spin_loop;
use crate::marker::{Send, Sync};
use crate::mem::Drop;
use crate::ops::{Deref, DerefMut};
use crate::sync::atomic::AtomicBool;
use crate::sync::Ordering;
pub struct Mutex<T> {
  b: AtomicBool,
  t: UnsafeCell<T>,
}
impl<T> Mutex<T> {
  pub const fn new(t: T) -> Self {
    Mutex {
      b: AtomicBool::new(false),
      t: UnsafeCell::new(t),
    }
  }
  pub fn lock(&self) -> MutexGuard<'_, T> {
    while self
      .b
      .compare_exchange(false, true, Ordering::Acquire, Ordering::Relaxed)
      .is_err()
    {
      spin_loop();
    }
    MutexGuard { mutex: self }
  }
}
unsafe impl<T: Send> Sync for Mutex<T> {}
unsafe impl<T: Send> Send for Mutex<T> {}
pub struct MutexGuard<'a, T> {
  mutex: &'a Mutex<T>,
}
impl<T> MutexGuard<'_, T> {
  pub fn unlock(self) {}
}

impl<T> Deref for MutexGuard<'_, T> {
  type Target = T;
  fn deref(&self) -> &T {
    unsafe { &*self.mutex.t.get() }
  }
}
impl<T> DerefMut for MutexGuard<'_, T> {
  fn deref_mut(&mut self) -> &mut T {
    unsafe { &mut *self.mutex.t.get() }
  }
}
impl<T> Drop for MutexGuard<'_, T> {
  fn drop(&mut self) {
    self.mutex.b.store(false, Ordering::Release);
  }
}
