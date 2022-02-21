use super::{Formatter, Result, Writable};

pub trait Debug{
  fn fmt(&self, f:&mut Formatter<'_>) -> Result;
}

struct Debugable<'a, T:Debug>(&'a T);
impl<T:Debug> Writable for Debugable<T>{
  fn fmt(&self, f:Formatter<'_>)-> Result{
    self.0.fmt(f)
  }
}
