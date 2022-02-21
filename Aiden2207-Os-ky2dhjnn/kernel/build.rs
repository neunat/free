fn main() {
  cc::Build::new()
    .file("src/ssfn/ssfn.c")
    .include("src/ssfn")
    .flag("-msoft-float")
    .flag("-ffreestanding")
    .flag("-nostdlib")
    .flag("-mkernel")
    .flag("-c")
    .compile("ssfn");
}
