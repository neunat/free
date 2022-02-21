use crate::mem::DiscriminantKind;
extern "rust-intrinsic" {
  pub fn discriminant_value<T>(v: &T) -> <T as DiscriminantKind>::Discriminant;
}
