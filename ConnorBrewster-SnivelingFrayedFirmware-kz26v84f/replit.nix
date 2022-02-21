{ pkgs }: {
	deps = [
		pkgs.python38
    pkgs.postgresql_14
	];
  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      # Neded for pandas / numpy
      pkgs.stdenv.cc.cc.lib
      pkgs.zlib
      # Needed for pygame
      pkgs.glib
    ];
    PYTHONBIN = "${pkgs.python38}/bin/python3.8";
  };
}