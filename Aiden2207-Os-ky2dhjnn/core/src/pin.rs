#[lang = "pin"]
#[fundamental]
#[repr(transparent)]
#[derive(Copy, Clone)]
pub struct Pin<P> {
  pointer: P,
}

impl<P> Pin<P> {
  ///# Safety
  ///If P is !Unpin then it must not move in memory until dropped
  #[lang = "new_unchecked"]
  pub const unsafe fn new_unchecked(pointer: P) -> Pin<P> {
    Pin { pointer }
  }
}
use crate::ops::{Deref, DerefMut};
impl<P: Deref> Deref for Pin<P> {
  type Target = P::Target;
  fn deref(&self) -> &P::Target {
    &*self.pointer
  }
}

impl<P: DerefMut> DerefMut for Pin<P>
where
  <P as Deref>::Target: Unpin,
{
  fn deref_mut(&mut self) -> &mut P::Target {
    &mut *self.pointer
  }
}
