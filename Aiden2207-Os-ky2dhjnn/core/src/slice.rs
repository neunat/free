use crate::ptr::*;
#[lang = "slice"]
impl<T> [T] {
  pub fn len(&self) -> usize {
    metadata(self)
  }
  pub fn is_empty(&self) -> bool {
    self.len() == 0
  }
  pub fn as_ptr(&self) -> *const T {
    self as *const _ as _
  }
  pub fn as_mut_ptr(&self) -> *mut T {
    self as *const _ as _
  }
  ///# Safety
  /// ptr must be valid for len
  pub unsafe fn from_raw_parts<'a>(ptr: *const T, len: usize) -> &'a Self {
    &*from_parts(ptr as _, len)
  }
}

impl<'a, T> IntoIterator for &'a [T] {
  type IntoIter = SliceIter<'a, T>;
  type Item = &'a T;
  fn into_iter(self) -> Self::IntoIter {
    SliceIter { slice: self }
  }
}
pub struct SliceIter<'a, T> {
  slice: &'a [T],
}
impl<'a, T> Iterator for SliceIter<'a, T> {
  type Item = &'a T;
  fn next(&mut self) -> Option<&'a T> {
    if self.slice.is_empty() {
      None
    } else {
      let t_ref = unsafe { &*self.slice.as_ptr() };
      self.slice =
        unsafe { <[T]>::from_raw_parts(self.slice.as_ptr().add(1), self.slice.len() - 1) };
      Some(t_ref)
    }
  }
}
use crate::ops::{Index, IndexMut};


impl<T, I: SliceIndex<[T]>> IndexMut<I> for &mut [T] {
  type Output = <I as SliceIndex<[T]>>::Output;
  #[inline]
  fn index_mut(&mut self, index: I) -> &mut Self::Output {
    index
      .get_mut(self)
      .unwrap_or(|| panic!("Index out of bounds."))
  }
}
impl<T, I: SliceIndex<[T]>> Index<I> for &mut [T] {
  type Output = <I as SliceIndex<[T]>>::Output;
  #[inline]
  fn index(&self, index: I) -> &Self::Output {
    index.get(self).unwrap_or(|| panic!("Index out of bounds."))
  }
}
impl<T, I: SliceIndex<[T]>> Index<I> for &[T] {
  type Output = <I as SliceIndex<[T]>>::Output;
  #[inline]
  fn index(&self, index: I) -> &Self::Output {
    index.get(self).unwrap_or(|| panic!("Index out of bounds."))
  }
}
pub trait SliceIndex<T: ?Sized> {
  type Output: ?Sized;
  fn get(self, slice: &T) -> Option<&Self::Output>;
  fn get_mut(self, slice: &mut T) -> Option<&mut Self::Output>;
}

impl<T> SliceIndex<[T]> for usize {
  type Output = T;
  fn get(self, slice: &[T]) -> Option<&T> {
    if self >= slice.len() {
      None
    } else {
      Some(unsafe { &*slice.as_ptr().add(self) })
    }
  }
  fn get_mut(self, slice: &mut [T]) -> Option<&mut T> {
    if self >= slice.len() {
      None
    } else {
      Some(unsafe { &mut *slice.as_mut_ptr().add(self) })
    }
  }
}
