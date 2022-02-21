curl -L https://nixos.org/nix/install | sh
. /home/runner/.nix-profile/etc/profile.d/nix.sh
nix-env -iA nixpkgs.jdk17_headless
