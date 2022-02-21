use crate::bootboot::bootboot_sys::*;
use crate::bootboot::{get_bootboot, ColorType};
use core::ptr::from_parts;
use core::sync::Lazy;
use core::sync::Mutex;
pub struct FrameBuffer<'a> {
  pub buf: &'a mut [u32],
  pub width: usize,
  pub height: usize,
  pub scan_line: usize,
  pub color_type: ColorType,
}
pub static FB: Lazy<Mutex<FrameBuffer>> = Lazy::new(|| {
  let bootboot = get_bootboot();
  let ptr: *mut u32 = BOOTBOOT_FB as _;
  let size = bootboot.fb.size as usize;
  let height = bootboot.fb.height;
  let width = bootboot.fb.width;
  let scan_line = bootboot.fb.scan_line;
  let buf = from_parts::<[u32]>(ptr as _, size / 4) as *mut _;
  let buf = unsafe { &mut *buf };
  Mutex::new(FrameBuffer {
    buf,
    width,
    height,
    scan_line,
    color_type: bootboot.fb_type,
  })
});
unsafe impl Send for FrameBuffer<'_> {}
