use crate::ops::*;
macro_rules! assign_traits{
  ($($name:ident, $lang:literal, $op:tt, $op_trait:ident, $method:ident);*) =>{
    $(
      #[lang = $lang]
      pub trait $name<T = Self>{
        fn $method(&mut self, other:T);
      }
      impl<A:$op_trait<B, Output = A> + Copy, B> $name<B> for A{
        fn $method(&mut self, other:B){
          *self = *self $op other;
        }
      }
    )*
  }
}
assign_traits! {
  AddAssign, "add_assign", +, Add, add_assign;
  SubAssign, "sub_assign", -, Sub, sub_assign;
  MulAssign, "mul_assign", *, Mul, rem_assign;
  DivAssign, "div_assign", /, Div, div_assign;
  RemAssign, "rem_assign", %, Rem, rem_assign;
  ShlAssign, "shl_assign", <<, Shl, shl_assign;
  ShrAssign, "shr_assign", >>, Shr, shr_assign;
  BitOrAssign, "bitor_assign", |, BitOr, bitor_assign;
  BitAndAssign, "bitand_assign", &, BitAnd, bitand_assign;
  BitXorAssign, "bitxor_assign", ^, BitXor, bitxor_assign
}
