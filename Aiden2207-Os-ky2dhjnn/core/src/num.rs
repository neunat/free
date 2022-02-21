extern "rust-intrinsic" {
  pub fn ctlz_nonzero<T: Copy>(t: T) -> T;
  pub fn unchecked_div<T: Copy>(a: T, b: T) -> T;
  pub fn unchecked_rem<T: Copy>(a: T, b: T) -> T;
  pub fn unchecked_add<T: Copy>(a: T, b: T) -> T;
  pub fn unchecked_sub<T: Copy>(a: T, b: T) -> T;
}
