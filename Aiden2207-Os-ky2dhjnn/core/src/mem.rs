use crate::ptr::*;
#[lang = "drop"]
pub trait Drop {
  fn drop(&mut self);
}
#[lang = "drop_in_place"]
unsafe fn drop_in_place<T: ?Sized>(_t: *mut T) {
  //Magic!
}
pub fn replace<T>(ptr: &mut T, new: T) -> T {
  let mut old = MaybeUninit::uninit();
  unsafe {
    copy_nonoverlapping(ptr, addr_of_mut!(old) as _, 1);
    *ptr = new;
    old.assume_init()
  }
}
extern "rust-intrinsic" {
  pub fn transmute<T, U>(t: T) -> U;
  pub fn size_of<T>() -> usize;
}

#[repr(transparent)]
#[lang = "manually_drop"]
#[derive(Copy, Clone)]
pub struct ManuallyDrop<T: ?Sized> {
  t: T,
}

#[lang = "maybe_uninit"]
pub union MaybeUninit<T> {
  uninit: (),
  t: ManuallyDrop<T>,
}
impl<T> MaybeUninit<T> {
  pub const fn new(t: T) -> Self {
    MaybeUninit {
      t: ManuallyDrop { t },
    }
  }
  pub const fn uninit() -> Self {
    MaybeUninit { uninit: () }
  }
  pub fn zeroes() -> Self {
    let mut uninit = MaybeUninit::uninit();
    unsafe { write_bytes(addr_of_mut!(uninit) as _, 0, size_of::<T>()) };
    uninit
  }
  ///# Safety
  ///If T needs initialization, self must be initialized properly
  pub const unsafe fn assume_init(self) -> T {
    self.t.t
  }
}
#[lang = "discriminant_kind"]
pub trait DiscriminantKind {
  #[lang = "discriminant_type"]
  type Discriminant: Clone + Copy + Eq + PartialEq + Send + Sync + Unpin;
}
