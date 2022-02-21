use crate::option::Option;

pub trait Iterator {
  type Item;
  #[lang = "next"]
  fn next(&mut self) -> Option<Self::Item>;
}

pub trait ExactSizeIterator{
  fn len(&self) -> usize;
}

pub trait IntoIterator {
  type IntoIter: Iterator<Item = Self::Item>;
  type Item;
  #[lang = "into_iter"]
  fn into_iter(self) -> Self::IntoIter;
}

impl<I: Iterator> IntoIterator for I {
  type IntoIter = Self;
  type Item = <Self as Iterator>::Item;
  fn into_iter(self) -> Self {
    self
  }
}
