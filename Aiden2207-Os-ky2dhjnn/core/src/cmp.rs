use crate::cmp::Ordering::*;
use crate::matches;
use crate::option::Option::{self, None, Some};
use crate::Sized;
#[lang = "eq"]
pub trait PartialEq<T: ?Sized = Self> {
  fn eq(&self, other: &T) -> bool;
  fn ne(&self, other: &T) -> bool {
    !self.eq(other)
  }
}
impl<T: PartialEq<U> + ?Sized, U: ?Sized> PartialEq<&U> for &T {
  fn eq(&self, other: &&U) -> bool {
    (*self).eq(*other)
  }
  #[allow(clippy::partialeq_ne_impl)]
  fn ne(&self, other: &&U) -> bool {
    (*self).ne(*other)
  }
}
impl<T: Eq<U> + ?Sized, U: ?Sized> Eq<&U> for &T {}
pub trait Eq<T: ?Sized = Self>: PartialEq<T> {
  #[no_coverage]
  fn assert_receiver_is_total_eq(&self) {}
}
pub struct AssertParamIsEq<T: Eq + ?Sized> {
  _field: PhantomData<T>,
}
#[lang = "partial_ord"]
pub trait PartialOrd<T: ?Sized = Self>: PartialEq<T> {
  fn partial_cmp(&self, other: &T) -> Option<Ordering>;
  fn lt(&self, other: &T) -> bool {
    matches!(self.partial_cmp(other), Some(Less))
  }
  fn le(&self, other: &T) -> bool {
    !matches!(self.partial_cmp(other), None | Some(Greater))
  }
  fn gt(&self, other: &T) -> bool {
    matches!(self.partial_cmp(other), Some(Greater))
  }
  fn ge(&self, other: &T) -> bool {
    matches!(self.partial_cmp(other), Some(Greater | Equal))
  }
}
impl<T: PartialOrd<U> + ?Sized, U: ?Sized> PartialOrd<&U> for &T {
  fn partial_cmp(&self, other: &&U) -> Option<Ordering> {
    (*self).partial_cmp(*other)
  }
  fn lt(&self, other: &&U) -> bool {
    (*self).lt(*other)
  }
  fn le(&self, other: &&U) -> bool {
    (*self).le(*other)
  }
  fn gt(&self, other: &&U) -> bool {
    (*self).gt(*other)
  }
  fn ge(&self, other: &&U) -> bool {
    (*self).ge(*other)
  }
}
impl<T: Ord<U> + ?Sized, U: ?Sized> Ord<&U> for &T {
  fn cmp(&self, other: &&U) -> Ordering {
    (*self).cmp(*other)
  }
}
pub trait Ord<T: ?Sized = Self>: Eq<T> + PartialOrd<T> {
  fn cmp(&self, other: &T) -> Ordering;
}
macro_rules! impl_partial_float {
  ($($t:ty),*) => {
    $(
      impl PartialEq for $t{
        fn eq(&self, other:&$t)->bool{
          *self == *other
        }
      }
      impl PartialOrd for $t{
        fn partial_cmp(&self, other: &$t) -> Option<Ordering> {
          match (*self <= *other, *self >= *other) {
            (false, false) => None,
            (false, true) => Some(Greater),
            (true, false) => Some(Less),
            (true, true) => Some(Equal),
          }
        }
        fn le(&self, other:&$t) -> bool{
          *self <= *other
        }
        fn lt(&self, other:&$t) -> bool{
          *self < *other
        }
        fn ge(&self, other:&$t) -> bool{
          *self >= *other
        }
        fn gt(&self, other:&$t) -> bool{
          *self > *other
        }
      }
    )*
  };
}

impl_partial_float! {f32,f64}

macro_rules! impl_cmp_int {
  ($($t:tt),*) => {
    $(
      impl PartialEq for $t{
        fn eq(&self, other:&$t)->bool{
          *self == *other
        }
      }
      impl Eq for $t{}
      impl PartialOrd for $t{
        fn partial_cmp(&self, other: &$t) -> Option<Ordering> {
          Some(self.cmp(other))
        }
        fn le(&self, other:&$t) -> bool{
          *self <= *other
        }
        fn lt(&self, other:&$t) -> bool{
          *self < *other
        }
        fn ge(&self, other:&$t) -> bool{
          *self >= *other
        }
        fn gt(&self, other:&$t) -> bool{
          *self > *other
        }
      }
      impl Ord for $t {
        fn cmp(&self, other: &$t) -> Ordering {
          if *self < *other { Less }
            else if *self == *other { Equal }
            else { Greater }
        }
      }
    )*
  };
}

impl_cmp_int! {u8, u16, u32, u64, u128, i8, i16, i32, i64, i128, usize, isize, char}

pub enum Ordering {
  Greater = 1,
  Equal = 0,
  Less = -1,
}
