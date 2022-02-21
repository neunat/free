import { Tile } from "./modules/tile.js";
// https://en.wikipedia.org/wiki/Wang_tile

class App {
  constructor(size) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.map = Array.from(new Array(size)).map(v=>
      Array.from(new Array(size)).fill(
        new Tile(10)
      )
    );
  };

  render() {
    const map_size = this.map.length;
    const tile_size = 
    for(var y=0;y<map_size;y++) {
      for(var x=0;x<map_size;x++) {
        this.map[x][y].render(
          this.ctx,
          x * 
        )
      }
    }
  };
};

window.addEventListener("load", ()=>{ new App(10); });