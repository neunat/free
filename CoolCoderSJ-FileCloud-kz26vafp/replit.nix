{ pkgs }: {
    deps = [
        pkgs.bashInteractive
        pkgs.nodePackages.npm
        pkgs.yarn
        pkgs.nodejs-16_x
    ];
}