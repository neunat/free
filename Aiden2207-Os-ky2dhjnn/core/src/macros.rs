pub use crate::assert;
pub use crate::include_bytes;
pub use crate::matches;
pub use crate::panic;
pub use crate::ptr::{addr_of, addr_of_mut};

#[rustc_builtin_macro]
pub macro global_asm("assembly template", $(operands,)* $(options($(option),*))?) {}
#[rustc_builtin_macro]
pub macro asm("assembly template", $(operands,)* $(options($(option),*))?) {}
#[rustc_builtin_macro]
#[macro_export]
macro_rules! compile_error {
  ($msg:expr $(,)?) => {
    /* magic */
  };
}
#[macro_export]
macro_rules! matches {
  ($expression:expr, $(|)? $( $pattern:pat_param )|+ $( if $guard: expr )? $(,)?) => {
    match $expression {
      $( $pattern )|+ $( if $guard )? => true,
      _ => false
    }
  }
}
#[macro_export]
macro_rules! assert {
  ($cond:expr $(,)?) => {{
    if $cond {
      panic!("assertion failed")
    }
  }};
  ($cond:expr, $($arg:tt)+) => {{
    if $cond {
      panic!()
    }
  }};
}

#[rustc_builtin_macro]
pub macro Clone($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro Copy($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro PartialEq($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro Ord($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro PartialOrd($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro Eq($i:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro derive($item:item) {
  //magic
}
#[rustc_builtin_macro]
pub macro cfg($l:literal) {
  //magic
}
#[rustc_builtin_macro]
#[macro_export]
macro_rules! include_bytes {
  ($file:expr $(,)?) => {{ /* magic */ }};
}
