use crate::marker::Unsize;
mod assign;
mod generator;
mod range;
pub use assign::*;
pub use generator::*;
pub use range::*;
#[lang = "add"]
pub trait Add<T = Self> {
  type Output;
  fn add(self, other: T) -> Self::Output;
}
#[lang = "sub"]
pub trait Sub<T = Self> {
  type Output;
  fn sub(self, other: T) -> Self::Output;
}
#[lang = "mul"]
pub trait Mul<T = Self> {
  type Output;
  fn mul(self, other: T) -> Self::Output;
}
#[lang = "div"]
pub trait Div<T = Self> {
  type Output;
  fn div(self, other: T) -> Self::Output;
}
#[lang = "rem"]
pub trait Rem<T = Self> {
  type Output;
  fn rem(self, other: T) -> Self::Output;
}
#[lang = "bitor"]
pub trait BitOr<T = Self> {
  type Output;
  fn bitor(self, other: T) -> Self::Output;
}
#[lang = "bitxor"]
pub trait BitXor<T = Self> {
  type Output;
  fn bitxor(self, other: T) -> Self::Output;
}
#[lang = "bitand"]
pub trait BitAnd<T = Self> {
  type Output;
  fn bitand(self, other: T) -> Self::Output;
}

macro_rules! add_like_impl{
  ($($traits:ty: $op:tt $func:ident),*; $t:tt) =>{
    $(add_like_impl!{@ $traits: $op $func, $t})*
  };
  (@ $traits:ty: $op:tt $func:ident, [$($t:ty),*])=>{
    $(
      impl $traits for $t{
        type Output = $t;
        fn $func(self, other:$t) -> $t{
          self $op other
        }
      }
      impl $traits for &$t{
        type Output = $t;
        fn $func(self, other:&$t) -> $t{
          *self $op *other
        }
      }
    )*
  }
}
add_like_impl! {
  Add: + add,
  Sub: - sub,
  Mul: * mul,
  Div: / div,
  Rem: % rem;
  [u8, u16, u32, u64, u128, usize, i8, i16, i32, i64, i128, isize, f32, f64]
}
add_like_impl! {
  BitOr: | bitor,
  BitAnd: & bitand,
  BitXor: ^ bitxor;
  [bool, u8, u16, u32, u64, u128, usize, i8, i16, i32, i64, i128, isize]
}
#[lang = "neg"]
pub trait Neg {
  type Output;
  fn neg(self) -> Self::Output;
}
#[lang = "not"]
pub trait Not {
  type Output;
  fn not(self) -> Self::Output;
}
macro_rules! neg_impl{
  ($($u:ty, $s:ty);*) => {
    $(impl Neg for $s{
      type Output = Self;
      fn neg(self) -> Self::Output{
        -self
      }
    }
    impl Neg for $u{
      type Output = $s;
      fn neg(self) -> Self::Output{
        -(self as $s)
      }
    })*
  }
}
neg_impl! {
  u8, i8;
  u16, i16;
  u32, i32;
  u64, i64;
  u128, i128;
  usize, isize
}
macro_rules! not_impl{
  ($($u:ty),*) => {
    $(impl Not for $u{
      type Output = Self;
      fn not(self) -> Self::Output{
        !self
      }
    }
    impl Not for &$u{
      type Output = $u;
      fn not(self) -> Self::Output{
        !*self
      }
    })*
  }
}
not_impl! {
  u8, i8, u16, i16, u32, i32, u64, i64,
  usize, isize, u128, i128, bool
}

#[lang = "shl"]
pub trait Shl<T = Self> {
  type Output;
  fn shl(self, other: T) -> Self::Output;
}
#[lang = "shr"]
pub trait Shr<T = Self> {
  type Output;
  fn shr(self, other: T) -> Self::Output;
}
macro_rules! impl_bitshift{
  ($($t:ty),*) =>{
    impl_bitshift!{$($t),*; [$($t),*] }
  };
  ($($t:ty),*; $r:tt) =>{
    $( impl_bitshift!{@ $t $r })*
  };
  (@ $t:ty [$($r:ty),*]) =>{
    $(impl Shr<$r> for $t{
      type Output = $t;
      fn shr(self, other:$r ) -> $t{
        self >> other
      }
    }
    impl Shl<$r> for $t{
      type Output = $t;
      fn shl(self, other:$r ) -> $t{
        self << other
      }
    })*
  }
}
impl_bitshift! {u8, u16, u32, u64, u128, usize, i8, i16, i32, i64, i128, isize }
#[lang = "receiver"]
pub trait Receiver {}

impl<T: ?Sized> Receiver for &T {}
impl<T: ?Sized> Receiver for &mut T {}
impl<T: ?Sized> Receiver for *const T {}
impl<T: ?Sized> Receiver for *mut T {}
impl<P: Receiver> Receiver for Pin<P> {}

#[lang = "deref"]
pub trait Deref {
  #[lang = "deref_target"]
  type Target: ?Sized;
  fn deref(&self) -> &Self::Target;
}
#[lang = "deref_mut"]
pub trait DerefMut: Deref {
  fn deref_mut(&mut self) -> &mut Self::Target;
}

impl<T: ?Sized> Deref for &T {
  type Target = T;
  fn deref(&self) -> &Self::Target {
    *self
  }
}
impl<T: ?Sized> Deref for &mut T {
  type Target = T;
  fn deref(&self) -> &Self::Target {
    *self
  }
}
impl<T: ?Sized> !DerefMut for &T {}
impl<T: ?Sized> DerefMut for &mut T {
  fn deref_mut(&mut self) -> &mut Self::Target {
    *self
  }
}
#[lang = "coerce_unsized"]
pub trait CoerceUnsized<U: ?Sized> {}
#[lang = "dispatch_from_dyn"]
pub trait DispatchFromDyn<T> {}
impl<'a, T: ?Sized + Unsize<U>, U: ?Sized> DispatchFromDyn<&'a U> for &'a T {}
impl<'a, T: ?Sized + Unsize<U>, U: ?Sized> DispatchFromDyn<&'a mut U> for &'a mut T {}

impl<'a, 'b: 'a, T: ?Sized + Unsize<U>, U: ?Sized> CoerceUnsized<&'a U> for &'b T {}
impl<'a, 'b: 'a, T: ?Sized + Unsize<U>, U: ?Sized> CoerceUnsized<&'a mut U> for &'b mut T {}

#[lang = "fn_once"]
#[fundamental]
#[rustc_paren_sugar]
pub trait FnOnce<A> {
  #[lang = "fn_once_output"]
  type Output;
  extern "rust-call" fn call_once(self, args: A) -> Self::Output;
}
#[lang = "fn_mut"]
#[fundamental]
#[rustc_paren_sugar]
pub trait FnMut<A>: FnOnce<A> {
  extern "rust-call" fn call_mut(&mut self, args: A) -> <Self as FnOnce<A>>::Output;
}
#[lang = "fn"]
#[fundamental]
#[rustc_paren_sugar]
pub trait Fn<A>: FnMut<A> {
  extern "rust-call" fn call(&self, args: A) -> <Self as FnOnce<A>>::Output;
}

#[lang = "index"]
pub trait Index<T> {
  type Output: ?Sized;
  #[track_caller]
  fn index(&self, index: T) -> &Self::Output;
}

#[lang = "index_mut"]
pub trait IndexMut<T> {
  type Output: ?Sized;
  #[track_caller]
  fn index_mut(&mut self, index: T) -> &mut Self::Output;
}
