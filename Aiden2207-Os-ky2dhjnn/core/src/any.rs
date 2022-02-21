#[derive(Copy, Clone, PartialEq, Eq)]
pub struct TypeId(u64);

impl TypeId {
  pub fn of<T: ?Sized + 'static>() -> Self {
    TypeId(type_id::<T>())
  }
}
impl<T: 'static + ?Sized> Any for T {
  fn type_id(&self) -> TypeId {
    TypeId::of::<T>()
  }
}

pub trait Any: 'static {
  fn type_id(&self) -> TypeId;
}
impl dyn Any {
  pub fn is<T: 'static>(&self) -> bool {
    self.type_id() == TypeId::of::<T>()
  }
  pub fn downcast_ref<T: 'static>(&self) -> Option<&T> {
    if self.is::<T>() {
      Some(unsafe { &*(self as *const _ as *const _) })
    } else {
      None
    }
  }
  pub fn downcast_mut<T: 'static>(&mut self) -> Option<&mut T> {
    if self.is::<T>() {
      Some(unsafe { &mut *(self as *mut _ as *mut _) })
    } else {
      None
    }
  }
}
extern "rust-intrinsic" {
  pub fn type_id<T: ?Sized + 'static>() -> u64;
}
