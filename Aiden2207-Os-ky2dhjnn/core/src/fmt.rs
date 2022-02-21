mod int;
mod debug;
pub use int::*;
pub use debug::*;
pub trait Write{
  fn write_str(&mut self, s:&str)->Result;
}

pub type Result = crate::result::Result<(), Error>;
pub struct Error;
pub struct Formatter<'a>{
  writer:&'a mut dyn Write
}
impl Write for Formatter<'_>{
  fn write_str(&mut self, s:&str) -> Result{
    self.writer.write(s)
  }
}

pub(crate) trait Writable{
  fn fmt(&self, f:&mut Formatter<'_>) -> Result;
}

struct Displayable<'a, T:Display>(&'a T);
impl<T:Display> Writable for Displayable<T>{
  fn fmt(&self, f:Formatter<'_>)-> Result{
    self.0.fmt(f)
  }
}
pub trait Display{
  fn fmt(&self, f:&mut Formatter<'_>) -> Result;
}

pub struct Arguments<'a>{
  
}