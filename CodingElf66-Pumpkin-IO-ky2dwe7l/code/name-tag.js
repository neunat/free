export function nameTag(name, self) {
    let offset = vec2(0, -20);

    let tag = add([
        text(name, {
            size: 8
        }),
        scale(1),
        origin("center"),
        pos(self.pos.add(offset))
    ]);

    self.tag = tag;

    return {
        destroy() {
            destroy(tag);
        }
    };
}