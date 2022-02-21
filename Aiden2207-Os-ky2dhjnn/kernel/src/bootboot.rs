pub mod bootboot_sys;
use bootboot_sys::*;
use core::mem::transmute;
use core::prelude::*;
use core::ptr::from_parts;
pub fn get_bootboot() -> BootBoot {
  let ptr = BOOTBOOT_INFO as *const BOOTBOOT;
  let magic: &str = unsafe { &*from_parts(ptr as _, 4) };
  let size = unsafe { (*ptr).size } as usize;
  let protocol = unsafe { (*ptr).protocol };
  let fb_type = unsafe { transmute((*ptr).fb_type) };
  let num_cores = unsafe { (*ptr).numcores };
  let bspid = unsafe { (*ptr).bspid };
  let time_zone = unsafe { (*ptr).timezone };
  let utc_date_time = unsafe { (*ptr).datetime };
  let disk = {
    let disk_ptr = unsafe { (*ptr).initrd_ptr as usize };
    let len = unsafe { (*ptr).initrd_size as usize };
    RamDisk { ptr: disk_ptr, len }
  };
  let fb = {
    let phys_ptr = unsafe { (*ptr).fb_ptr as _ };
    let size = unsafe { (*ptr).fb_size as _ };
    let width = unsafe { (*ptr).fb_width as _ };
    let height = unsafe { (*ptr).fb_height as _ };
    let scan_line = unsafe { (*ptr).fb_scanline as _ };
    FbInfo {
      phys_ptr,
      size,
      width,
      height,
      scan_line,
    }
  };
  let arch_info = unsafe {
    let arch = (*ptr).arch;
    if cfg!(x86_64) {
      let acpi_ptr = arch.x86_64.acpi_ptr;
      let smbi_ptr = arch.x86_64.smbi_ptr;
      let efi_ptr = arch.x86_64.efi_ptr;
      let mp_ptr = arch.x86_64.mp_ptr;
      ArchInfo::X86(X86Info {
        acpi_ptr,
        smbi_ptr,
        efi_ptr,
        mp_ptr,
      })
    } else {
      let acpi_ptr = arch.aarch64.acpi_ptr;
      let mmio_ptr = arch.aarch64.mmio_ptr;
      let efi_ptr = arch.aarch64.efi_ptr;
      ArchInfo::Aarch64(Aarch64Info {
        acpi_ptr,
        mmio_ptr,
        efi_ptr,
      })
    }
  };

  let mmap_count = (size - 128) / 16;
  let ptr = unsafe { (ptr as *const u8).offset(128) };
  let mmap: &[MMapEnt] = unsafe { &*from_parts(ptr as _, mmap_count) };
  BootBoot {
    magic,
    size,
    protocol,
    fb_type,
    num_cores,
    bspid,
    time_zone,
    utc_date_time,
    disk,
    fb,
    arch_info,
    mmap,
  }
}
pub struct BootBoot {
  pub magic: &'static str,
  pub size: usize,
  pub protocol: u8,
  pub fb_type: ColorType,
  pub num_cores: u16,
  pub bspid: u16,
  pub time_zone: i16,
  pub utc_date_time: [u8; 8],
  pub disk: RamDisk,
  pub fb: FbInfo,
  pub arch_info: ArchInfo,
  pub mmap: &'static [MMapEnt],
}
pub struct FbInfo {
  pub phys_ptr: usize,
  pub size: usize,
  pub width: usize,
  pub height: usize,
  pub scan_line: usize,
}
pub enum ArchInfo {
  X86(X86Info),
  Aarch64(Aarch64Info),
}
pub struct X86Info {
  pub acpi_ptr: u64,
  pub smbi_ptr: u64,
  pub efi_ptr: u64,
  pub mp_ptr: u64,
}
pub struct Aarch64Info {
  pub acpi_ptr: u64,
  pub mmio_ptr: u64,
  pub efi_ptr: u64,
}

pub struct RamDisk {
  pub ptr: usize,
  pub len: usize,
}

#[repr(u8)]
#[allow(dead_code)]
pub enum ColorType {
  Rgba = FB_RGBA as _,
  Argb = FB_ARGB as _,
  Bgra = FB_BGRA as _,
  Abgr = FB_ABGR as _,
}
