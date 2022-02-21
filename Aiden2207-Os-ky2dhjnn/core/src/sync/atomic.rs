use crate::cell::UnsafeCell;
use crate::marker::{Copy, Sync};
use crate::panic;
use crate::result::Result::{self, *};
use crate::sync::Ordering::{self, *};
pub struct AtomicBool {
  b: UnsafeCell<bool>,
}
impl AtomicBool {
  pub const fn new(b: bool) -> Self {
    AtomicBool {
      b: UnsafeCell::new(b),
    }
  }
  pub fn compare_exchange(
    &self,
    current: bool,
    new: bool,
    success: Ordering,
    failure: Ordering,
  ) -> Result<bool, bool> {
    unsafe {
      let res = atomic_compare_exchange(
        self.b.get() as _,
        current as u8,
        new as u8,
        success,
        failure,
      );
      match res {
        Ok(1) => Ok(true),
        Ok(0) => Ok(false),
        Err(1) => Err(true),
        Err(0) => Err(false),
        _ => crate::hint::unreachable(),
      }
    }
  }
  pub fn store(&self, new: bool, order: Ordering) {
    unsafe { atomic_store_ordered(self.b.get() as _, new as u8, order) }
  }
  pub fn load(&self, order: Ordering) -> bool {
    (unsafe { atomic_load_ordered(self.b.get() as *mut u8, order) }) > 0
  }
}
unsafe impl Sync for AtomicBool {}
unsafe fn atomic_compare_exchange<T: Copy>(
  dst: *mut T,
  old: T,
  new: T,
  success: Ordering,
  failure: Ordering,
) -> Result<T, T> {
  // SAFETY: the caller must uphold the safety contract for `atomic_compare_exchange`.
  let (val, ok) = match (success, failure) {
    (Acquire, Acquire) => atomic_cxchg_acq(dst, old, new),
    (Release, Relaxed) => atomic_cxchg_rel(dst, old, new),
    (AcqRel, Acquire) => atomic_cxchg_acqrel(dst, old, new),
    (Relaxed, Relaxed) => atomic_cxchg_relaxed(dst, old, new),
    (SeqCst, SeqCst) => atomic_cxchg(dst, old, new),
    (Acquire, Relaxed) => atomic_cxchg_acq_failrelaxed(dst, old, new),
    (AcqRel, Relaxed) => atomic_cxchg_acqrel_failrelaxed(dst, old, new),
    (SeqCst, Relaxed) => atomic_cxchg_failrelaxed(dst, old, new),
    (SeqCst, Acquire) => atomic_cxchg_failacq(dst, old, new),
    _ => panic!("Invalid combo for orderings"),
  };
  if ok {
    Ok(val)
  } else {
    Err(val)
  }
}

macro_rules! decl_intrinsics{
  ($($n:ident),*; $($i:ident),*;$($l:ident),*) =>{
    $(
      pub fn $n <T:Copy>(dst: *mut T, old:T, src:T) -> (T,bool);
    )*
    $(
      pub fn $i <T:Copy>(dst: *mut T, new:T);
    )*
    $(
      pub fn $l <T:Copy>(src:*const T) -> T;
    )*
  }
}
extern "rust-intrinsic" {
  decl_intrinsics! {
    atomic_cxchg,
    atomic_cxchg_acq,
    atomic_cxchg_rel,
    atomic_cxchg_acqrel,
    atomic_cxchg_relaxed,
    atomic_cxchg_acq_failrelaxed,
    atomic_cxchg_acqrel_failrelaxed,
    atomic_cxchg_failrelaxed,
    atomic_cxchg_failacq;
    atomic_store,
    atomic_store_rel,
    atomic_store_relaxed,
    atomic_store_unordered;
    atomic_load,
    atomic_load_acq,
    atomic_load_relaxed,
    atomic_load_unordered
  }
}
unsafe fn atomic_store_ordered<T: Copy>(dst: *mut T, val: T, order: Ordering) {
  match order {
    Release => atomic_store_rel(dst, val),
    Relaxed => atomic_store_relaxed(dst, val),
    SeqCst => atomic_store(dst, val),
    _ => panic!("Acquire and AcqRel are invalid for stores"),
  }
}
unsafe fn atomic_load_ordered<T: Copy>(dst: *mut T, order: Ordering) -> T {
  match order {
    Acquire => atomic_load_acq(dst),
    Relaxed => atomic_load_relaxed(dst),
    SeqCst => atomic_load(dst),
    _ => panic!("Release and AcqRel are invalid for loads"),
  }
}
