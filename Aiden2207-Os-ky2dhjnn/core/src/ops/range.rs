use crate::cmp::PartialOrd;
use crate::mem;
use crate::prelude::*;
#[lang = "Range"]
#[derive(Clone, Copy)]
pub struct Range<T> {
  pub start: T,
  pub end: T,
}
#[lang = "RangeFrom"]
#[derive(Clone, Copy)]
pub struct RangeFrom<T> {
  pub start: T,
}
#[derive(Clone, Copy)]
#[lang = "RangeFull"]
pub struct RangeFull;

#[derive(Clone, Copy)]
#[lang = "RangeTo"]
pub struct RangeTo<T> {
  pub end: T,
}
#[derive(Clone, Copy)]
#[lang = "RangeInclusive"]
pub struct RangeInclusive<T> {
  pub start: T,
  pub end: T,
}
impl<T> RangeInclusive<T> {
  #[lang = "range_inclusive_new"]
  pub const fn new(start: T, end: T) -> Self {
    RangeInclusive { start, end }
  }
}

#[derive(Clone, Copy)]
#[lang = "RangeToInclusive"]
pub struct RangeToInclusive<T> {
  pub end: T,
}
impl<T: Step> Iterator for Range<T> {
  type Item = T;
  fn next(&mut self) -> Option<T> {
    let next = self.start.clone().forward();
    if self.start >= self.end {
      None
    } else {
      Some(mem::replace(&mut self.start, next))
    }
  }
}
impl<T: Step> Iterator for RangeInclusive<T> {
  type Item = T;
  fn next(&mut self) -> Option<T> {
    let next = self.start.clone().forward();
    if self.start > self.end {
      None
    } else {
      Some(mem::replace(&mut self.start, next))
    }
  }
}
impl<T: Step> Iterator for RangeFrom<T> {
  type Item = T;
  fn next(&mut self) -> Option<T> {
    let next = self.start.clone().forward();

    Some(mem::replace(&mut self.start, next))
  }
}

pub trait Step: Clone + Sized + PartialOrd {
  #[must_use]
  fn forward(self) -> Self;
  #[must_use]
  fn backward(self) -> Self;
}
macro step_impl($($t:ty, $val:literal);*){
  $(
    impl Step for $t{
      fn forward(self) -> Self{
        self + $val
      }
      fn backward(self) -> Self{
        self - $val
      }
    }
  )*
}
step_impl! {
  u8,1;
  u16,1;
  u32,1;
  u64,1;
  u128,1;
  usize,1;
  i8,1;
  i16,1;
  i32,1;
  i64,1;
  i128,1;
  isize,1;
  f64,1.0;
  f32,1.0
}
#[derive(Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub enum Bound<T> {
  Included(T),
  Excluded(T),
  Unbounded,
}
pub trait RangeBounds<T> {
  fn start_bound(&self) -> Bound<&T>;

  fn end_bound(&self) -> Bound<&T>;

  fn contains<U>(&self, item: &U) -> bool
  where
    T: PartialOrd<U>,
    U: ?Sized + PartialOrd<T>,
  {
    (match self.start_bound() {
      Bound::Included(start) => start <= item,
      Bound::Excluded(start) => start < item,
      Bound::Unbounded => true,
    }) && (match self.end_bound() {
      Bound::Included(end) => item <= end,
      Bound::Excluded(end) => item < end,
      Bound::Unbounded => true,
    })
  }
}

impl<T> RangeBounds<T> for Range<T> {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Included(&self.start)
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Excluded(&self.end)
  }
}
impl<T> RangeBounds<T> for RangeFrom<T> {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Included(&self.start)
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Unbounded
  }
}
impl<T> RangeBounds<T> for RangeFull {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Unbounded
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Unbounded
  }
}
impl<T> RangeBounds<T> for RangeTo<T> {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Unbounded
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Excluded(&self.end)
  }
}
impl<T> RangeBounds<T> for RangeInclusive<T> {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Included(&self.start)
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Included(&self.end)
  }
}
impl<T> RangeBounds<T> for RangeToInclusive<T> {
  fn start_bound(&self) -> Bound<&T> {
    Bound::Unbounded
  }
  fn end_bound(&self) -> Bound<&T> {
    Bound::Included(&self.end)
  }
}
