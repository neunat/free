use crate::macros::asm;
pub fn spin_loop() {
  #[cfg(any(target_arch = "x86_64", target_arch = "x86"))]
  unsafe {
    asm! {"PAUSE" }
  }
}
extern "rust-intrinsic" {
  pub fn unreachable() -> !;
}
