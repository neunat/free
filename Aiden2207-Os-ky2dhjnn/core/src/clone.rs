use crate::marker::PhantomData;
pub use crate::marker::{Clone, Copy};

#[allow(dead_code)]
pub struct AssertParamIsClone<T: Clone> {
  _field: PhantomData<T>,
}
#[allow(dead_code)]
pub struct AssertParamIsCopy<T: Copy> {
  _field: PhantomData<T>,
}
