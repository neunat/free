pub use crate::cmp::{Eq, Ord, PartialEq, PartialOrd};
pub use crate::iter::{IntoIterator, Iterator};
pub use crate::macros::*;
pub use crate::marker::PhantomData;
pub use crate::marker::{Clone, Copy, Send, Sync, Unpin};
pub use crate::ops::{Fn, FnMut, FnOnce};
pub use crate::option::Option::{self, *};
pub use crate::pin::Pin;
pub use crate::result::Result::{self, *};
pub use crate::Sized;

pub mod v1 {
  pub use super::*;
}
pub mod rust_2021 {
  pub use super::v1::*;
}
pub mod rust_2018 {
  pub use super::v1::*;
}
pub mod rust_2015 {
  pub use super::v1::*;
}
