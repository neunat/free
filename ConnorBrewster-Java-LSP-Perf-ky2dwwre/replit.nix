{ pkgs }: {
    deps = [
        pkgs.graalvm17-ce
        # pkgs.jdk  # Uncomment this if graalvm is giving you trouble.
        pkgs.replitPackages.jdt-language-server
        pkgs.maven
    ];
}