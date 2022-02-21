
#[repr(C)]
#[derive(Copy, Clone)]
pub struct InterruptEntry<F> {
  ptr_low: u16,
  gdt: u16,
  options: u16,
  ptr_mid: u16,
  ptr_high: u32,
  _reserved: u32,
  _data: PhantomData<F>,
}

pub type Handler = extern "x86-interrupt" fn(_: InterruptInfo);

#[repr(transparent)]
#[derive(Copy, Clone)]
pub struct InterruptOptions(u16);
impl InterruptOptions{
  pub fn new()-> Self{
    InterruptOptions(0b000011100000000)
  }
  pub fn present(&mut self, b:bool) -> &mut Self{
    let val = self.0 & !(1 << 15);
    self.0 = val | ((b as u16) << 15);
    self
  }
}
extern "C" {
  pub type Instruction;
  pub type Stack;
}
#[derive(Clone, Copy)]
#[repr(C)]
pub struct InterruptInfo {
  pub ip: *const Instruction,
  pub cs: u64,
  pub flags: u64,
  pub stack_pointer: *const Stack,
  pub ss: u64,
}
