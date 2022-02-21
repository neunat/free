use crate::mem::MaybeUninit;
use crate::ptr;
pub trait IntToStr: private::SealedFmt + Copy {
  const MAX_SIZE: usize;
  const BITS: usize;
  ///# Safety
  ///ptr must be valid for MAX_SIZE bytes
  unsafe fn write_to_ptr(self, ptr: *mut u8) -> usize;
}
mod private {
  pub trait SealedFmt {}
}

static DEC_DIGITS_LUT: &[u8; 200] = b"0001020304050607080910111213141516171819\
  2021222324252627282930313233343536373839\
  4041424344454647484950515253545556575859\
  6061626364656667686970717273747576777879\
  8081828384858687888990919293949596979899";
macro_rules! impl_int{
  ($($t:ty:$s:literal:$b:literal),*) =>{$(
    impl private::SealedFmt for $t{}
    impl IntToStr for $t{
      const MAX_SIZE:usize = $s;
      const BITS:usize = $b;
      #[allow(unused_comparisons)]
      unsafe fn write_to_ptr(mut self, ptr:*mut u8) -> usize{
        let mut arr:[MaybeUninit<u8>; $s] = MaybeUninit::uninit().assume_init();
        let arr_ptr:*mut u8 = &mut arr as *mut _ as _;
        let lut_ptr:*const u8 = DEC_DIGITS_LUT as *const _ as _;
        let mut count = 0;
        let (abs, sign) = if self < 0 {(-self as $t, true)} else {(self, false)};
        self = abs;
        while self >= 100{
          let rem = self % 100;
          self = self / 100;
          ptr::copy_nonoverlapping(lut_ptr.add(rem as usize * 2), arr_ptr.add($s - count - 2), 2);
          count = count + 2;
        }
        if self < 10{
          let tiny_lut = b"0123456789";
          let tiny_lut_ptr:*const u8 = tiny_lut as *const _ as _;
          *arr_ptr.add($s - count - 1) = *tiny_lut_ptr.add(self as usize);
          count = count + 1;
        } else {
          ptr::copy_nonoverlapping(lut_ptr.add(self as usize * 2), arr_ptr.add($s - count - 2), 2);
          count = count + 2;
        }
        if sign{
          *arr_ptr.add($s - count - 1) = b'-';
          count = count + 1;
        }
        ptr::copy_nonoverlapping(arr_ptr.add($s - count),ptr, count );
        count
      }
    })*
  }
}
impl_int! {
  u8:3:8,
  i8:4:8,
  i16:5:16,
  u16:6:16,
  u32:10:32,
  i32:11:32,
  u64:20:64,
  i64:21:64,
  usize:20:64,
  isize:21:64,
  u128:40:128,
  i128:41:128
}