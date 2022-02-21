{ pkgs }: {
	deps = [
    pkgs.rust-analyzer
    pkgs.rustup
    pkgs.qemu
    pkgs.clang_12
    pkgs.lld_12
    pkgs.rust-bindgen
	];
}