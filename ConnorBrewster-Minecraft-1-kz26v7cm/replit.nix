{ pkgs }: {
    deps = [
      pkgs.file
      pkgs.wget
      pkgs.unzip
      #TLauncher Dependencies
      pkgs.hicolor-icon-theme
      # pkgs.xorg.libXrender
      pkgs.jdk
    ];
    # https://replit.com/@ConnorBrewster/Node-Canvas#replit.nix
    env = {
        LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
          pkgs.xorg.libXext
          pkgs.jdk.debug 
          pkgs.xorg.libX11
          pkgs.xlibs.libXrender
          pkgs.xlibs.libXtst
          pkgs.xlibs.libXi
          pkgs.glibc
        ];
      
        LD_PRELOAD = "${pkgs.glibc}/lib/libc.so.6";
        # LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.xorg.libX11];
    };
}