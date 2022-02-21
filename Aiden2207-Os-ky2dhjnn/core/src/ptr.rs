impl<T: ?Sized> !Send for *mut T {}
impl<T: ?Sized> !Sync for *mut T {}
impl<T: ?Sized> !Send for *const T {}
impl<T: ?Sized> !Sync for *const T {}

#[lang = "const_ptr"]
impl<T: ?Sized> *const T {
  ///# Safety
  /// Pointer over/underflow is undefined
  #[inline(always)]
  #[must_use]
  pub unsafe fn offset(self, dst: isize) -> Self {
    offset(self, dst)
  }
  ///# Safety
  /// Pointer over/underflow is undefined
  #[inline(always)]
  #[must_use]
  pub unsafe fn add(self, dst: usize) -> Self {
    offset(self as _, dst as _) as _
  }

  pub fn cast<U>(self) -> *const U {
    self as _
  }
}

#[lang = "mut_ptr"]
impl<T: ?Sized> *mut T {
  ///# Safety
  /// Pointer over/underflow is undefined
  #[inline(always)]
  #[must_use]
  pub unsafe fn offset(self, dst: isize) -> Self {
    offset(self as _, dst) as _
  }
  ///# Safety
  /// Pointer over/underflow is undefined
  #[inline(always)]
  #[must_use]
  pub unsafe fn add(self, dst: usize) -> Self {
    offset(self as _, dst as _) as _
  }
  ///# Safety
  /// Pointer must be valid for count * size_of::<T>() bytes
  #[inline(always)]
  pub unsafe fn write_bytes(self, val: u8, count: usize) {
    write_bytes(self, val, count);
  }

  pub fn cast<U>(self) -> *const U {
    self as _
  }
}
///# Safety
/// ptr must be valid for reads
pub unsafe fn read_volatile<T>(ptr: *const T) -> T {
  volatile_load(ptr)
}
///# Safety
/// ptr must be valid for writes
pub unsafe fn write_volatile<T>(ptr: *mut T, t: T) {
  volatile_store(ptr, t)
}
extern "rust-intrinsic" {
  pub fn offset<T: ?Sized>(ptr: *const T, offset: isize) -> *const T;
  pub fn write_bytes<T: ?Sized>(ptr: *mut T, val: u8, count: usize);
  pub fn copy_nonoverlapping<T>(src: *const T, dst: *mut T, count: usize);
  pub fn volatile_load<T>(ptr: *const T) -> T;
  pub fn volatile_store<T>(ptr: *mut T, t: T);
}
pub macro addr_of_mut($place:expr) {
  &raw mut $place
}
pub macro addr_of($place:expr) {
  &raw const $place
}
#[lang = "pointee_trait"]
pub trait Pointee {
  #[lang = "metadata_type"]
  type Metadata: Copy;
}
#[repr(C)]
struct PointerRepr<T> {
  ptr: *const (),
  meta: T,
}
impl<T: Clone + ?Sized> Clone for PointerRepr<T> {
  fn clone(&self) -> Self {
    PointerRepr {
      meta: self.meta.clone(),
      ptr: self.ptr,
    }
  }
}
impl<T: Copy + ?Sized> Copy for PointerRepr<T> {}

pub fn from_parts<T: ?Sized>(addr: *const (), meta: <T as Pointee>::Metadata) -> *const T {
  unsafe {
    PtrUnion {
      p: PointerRepr { ptr: addr, meta },
    }
    .t
  }
}
pub fn metadata<T: ?Sized>(ptr: *const T) -> <T as Pointee>::Metadata {
  unsafe { PtrUnion { t: ptr }.p.meta }
}
#[repr(C)]
union PtrUnion<T: ?Sized, U: Copy> {
  t: *const T,
  p: PointerRepr<U>,
}
