pub enum Option<T> {
  #[lang = "Some"]
  Some(T),
  #[lang = "None"]
  None,
}
impl<T> Option<T> {
  pub const fn is_none(&self) -> bool {
    matches!(self, Option::None)
  }
  #[allow(clippy::match_as_ref)]
  pub const fn as_ref(&self) -> Option<&T> {
    match self {
      Option::Some(ref data) => Option::Some(data),
      Option::None => Option::None,
    }
  }
  #[track_caller]
  pub fn unwrap(self) -> T {
    match self {
      Option::Some(t) => t,
      _ => panic!("Called Option::unwrap with a None value"),
    }
  }
  pub fn unwrap_or<F: FnOnce() -> T>(self, f: F) -> T {
    match self {
      Some(t) => t,
      None => f(),
    }
  }
  ///# Safety
  ///self must be Some
  pub unsafe fn unreachable_unchecked(self) -> T {
    let f = || unsafe { crate::unreachable() };
    self.unwrap_or(f)
  }
}
