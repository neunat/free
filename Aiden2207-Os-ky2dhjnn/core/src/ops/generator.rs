#[lang = "generator_state"]
#[derive(Copy, Clone)]
pub enum GeneratorState<Y, R> {
  Yielded(Y),
  Complete(R),
}

#[lang = "generator"]
#[fundamental]
pub trait Generator<R = ()> {
  type Yield;
  type Return;
  fn resume(self: Pin<&mut Self>, arg: R) -> GeneratorState<Self::Yield, Self::Return>;
}
