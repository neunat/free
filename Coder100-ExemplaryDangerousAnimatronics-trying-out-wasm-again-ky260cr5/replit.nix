{ pkgs }: {
	deps = [
		pkgs.rustc
		pkgs.rustfmt
		pkgs.cargo
		pkgs.cargo-edit
		pkgs.rust-analyzer
		pkgs.rustup
		pkgs.nodejs-16_x
	];
}
