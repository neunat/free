use crate::cell::UnsafeCell;
macro_rules! copy_impl{
  ($($t:ty),*) => {
    $(impl Clone for $t{
      fn clone(&self)-> Self{
        *self
      }
    }
    impl Copy for $t{})*
  }
}
copy_impl! {
  u8, u16, u32, u64, u128, usize,
  i8, i16, i32, i64, i128, isize,
  bool, char, f32, f64
}
impl<T: ?Sized> Clone for &T {
  fn clone(&self) -> Self {
    *self
  }
}
impl<T: ?Sized> Copy for &T {}
use crate::mem::MaybeUninit;
impl<T: Copy, const N: usize> Copy for [T; N] {}
impl<T: Clone, const N: usize> Clone for [T; N] {
  fn clone(&self) -> Self {
    let mut uninit = MaybeUninit::<[T; N]>::uninit();
    let ptr = &mut uninit as *mut _ as *mut T;
    let self_ptr = self as *const _ as *const T;
    let mut i = 0;
    while i < N {
      i = i + 1;
      unsafe {
        *ptr.add(i) = (&*self_ptr.add(i)).clone();
      }
    }
    unsafe { uninit.assume_init() }
  }
}

impl<T: ?Sized> Clone for *mut T {
  fn clone(&self) -> Self {
    *self
  }
}
impl<T: ?Sized> Copy for *mut T {}
impl<T: ?Sized> Clone for *const T {
  fn clone(&self) -> Self {
    *self
  }
}
impl<T: ?Sized> Copy for *const T {}

#[lang = "clone"]
pub trait Clone: Sized {
  #[must_use]
  fn clone(&self) -> Self;
  fn clone_from(&mut self, other: &Self) {
    *self = other.clone();
  }
}
#[lang = "copy"]
pub trait Copy: Clone {}

///# Safety
/// &Self must be Send
#[lang = "sync"]
pub unsafe auto trait Sync {}
///# Safety
/// Self must be able to be sent between threads
pub unsafe auto trait Send {}

#[lang = "unpin"]
pub auto trait Unpin {}

impl<'a, T: ?Sized + 'a> Unpin for &'a T {}
impl<'a, T: ?Sized + 'a> Unpin for &'a mut T {}
impl<T: ?Sized> Unpin for *const T {}
impl<T: ?Sized> Unpin for *mut T {}

#[lang = "freeze"]
///# Safety
/// Improper use may cause UnsafeCells to be placed in read only memory
pub unsafe auto trait Freeze {}
impl<T: ?Sized> !Freeze for UnsafeCell<T> {}
unsafe impl<T: ?Sized> Freeze for *const T {}
unsafe impl<T: ?Sized> Freeze for *mut T {}
unsafe impl<T: ?Sized> Freeze for &T {}
unsafe impl<T: ?Sized> Freeze for &mut T {}

#[lang = "structural_peq"]
pub trait StructuralPartialEq {}
#[lang = "structural_teq"]
pub trait StructuralEq {}
#[lang = "unsize"]
pub trait Unsize<T: ?Sized> {}
#[lang = "phantom_data"]
pub struct PhantomData<T: ?Sized>;
impl<T> Clone for PhantomData<T> {
  fn clone(&self) -> Self {
    *self
  }
}
impl<T> Copy for PhantomData<T> {}
