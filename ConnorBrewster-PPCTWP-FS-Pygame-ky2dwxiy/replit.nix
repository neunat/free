{ pkgs }: {
	deps = [
		pkgs.python38
        pkgs.strace
        pkgs.SDL
        pkgs.SDL_gfx
        pkgs.SDL_gpu
        pkgs.SDL_ttf
        pkgs.SDL_mixer
        pkgs.SDL_image
	];
    
  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath ([
      # Neded for pandas / numpy
      pkgs.stdenv.cc.cc.lib
      pkgs.zlib
      # Needed for pygame
      pkgs.glib
    ] ++ (with pkgs.xlibs; [ libX11 libXext libXinerama libXcursor libXrandr libXi libXxf86vm ]));
      
    PYTHONBIN = "${pkgs.python38}/bin/python3.8";
  };
}