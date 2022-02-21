import { COLORS } from "./colors.js";

class Tile {
  constructor(side_dimension) {
    this.side_dimension = side_dimension;
    this.texture = new Uint32Array(side_dimension ** 2);
    this.texture = this.texture.fill(0);
  };

  render(ctx, px, py, screen_size) {
    screen_size /= this.side_dimension;

    for(var y=0;y<this.side_dimension;y++) {
      const y_add = y * this.side_dimension;
      for(var x=0;x<this.side_dimension;x++) {
        const color = COLORS[this.texture[y_add + x]];

        ctx.fillStyle = color;
        ctx.fillRect(
          px + (screen_size * x),
          py + (screen_size * y),
          screen_size,
          screen_size
        );
      }
    }
  };
};

export { Tile };