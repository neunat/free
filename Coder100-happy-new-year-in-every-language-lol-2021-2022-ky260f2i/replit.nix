{ pkgs }: {
    deps = [
        pkgs.rustc
        pkgs.ruby
        pkgs.nodejs-16_x
        pkgs.R
        pkgs.zulu
        pkgs.roslyn
        pkgs.mono4
        pkgs.python38
    ];
}