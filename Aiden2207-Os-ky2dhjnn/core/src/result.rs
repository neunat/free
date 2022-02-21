pub enum Result<T, E> {
  #[lang = "Ok"]
  Ok(T),
  #[lang = "Err"]
  Err(E),
}
use crate::result::Result::*;
use crate::macros::*;
impl<T, E> Result<T, E> {
  pub fn is_err(&self) -> bool {
    matches!(self, Err(_))
  }
}
