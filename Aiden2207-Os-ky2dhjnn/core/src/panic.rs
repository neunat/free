#[macro_export]
#[rustc_builtin_macro(std_panic)]
macro_rules! panic {
  ($($args:tt)*) => {
    //Magic!
  };
}
pub macro panic_2021{
  () => { panic!("explicit panic") },
  ($l:literal $(,)? $($_:expr),* ) =>{{
    #[allow(unused_unsafe)]
    unsafe{ panic($l) };
  }}
}
extern "Rust" {
  #[lang = "panic_impl"]
  pub fn panic_impl(_: &PanicInfo) -> !;
}
#[lang = "panic_location"]
#[allow(unused)]
pub struct Location<'a> {
  file: &'a str,
  line: u32,
  col: u32,
}
#[lang = "panic"]
#[track_caller]
pub fn panic(s: &'static str) -> ! {
  unsafe {
    panic_impl(&PanicInfo {
      payload: &s,
      message: None,
      location: caller_location(),
    })
  };
}
#[lang = "panic_info"]
#[allow(unused)]
pub struct PanicInfo<'a> {
  pub payload: &'a (dyn crate::any::Any + Send),
  pub message: Option<&'a ()>,
  pub location: &'a Location<'a>,
}
extern "rust-intrinsic" {
  pub fn caller_location() -> &'static Location<'static>;
}
