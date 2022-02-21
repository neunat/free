#![no_std]
#![no_core]
#![feature(prelude_import)]
#![feature(lang_items)]
#![feature(no_core)]
#![feature(unboxed_closures)]
#![feature(intrinsics)]
#![feature(decl_macro)]
#![feature(rustc_attrs)]
#![feature(never_type)]
#![feature(no_niche)]
#![feature(auto_traits)]
#![feature(negative_impls)]
#![feature(fundamental)]
#![feature(raw_ref_op)]
#![feature(no_coverage)]
#![feature(arbitrary_self_types)]
pub mod any;
pub mod cell;
pub mod clone;
pub mod cmp;
pub mod fmt;
pub mod hint;
pub mod intrinsics;
pub mod iter;
pub mod macros;
pub mod marker;
pub mod mem;
pub mod num;
pub mod ops;
pub mod option;
pub mod panic;
pub mod panicking;
pub mod pin;
pub mod prelude;
pub mod ptr;
pub mod result;
pub mod slice;
pub mod str;
pub mod sync;
#[prelude_import]
pub use crate::prelude::v1::*;

#[lang = "sized"]
#[fundamental]
pub trait Sized {
  //leave empty, adding stuff causes an ICE
}

extern "rust-intrinsic" {
  pub fn unreachable() -> !;
}
