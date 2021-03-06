//Imports
import { App } from "app/client/app.ts";
import { Renderable } from "app/client/rendering/renderable.ts";
import { Region } from "app/client/maps/region.ts";
import { Camera } from "app/client/maps/camera.ts";
import type { Graphics } from "app/client/rendering/render.ts";
import { Render } from "app/client/rendering/render.ts";

/**
 * World.
 */
export class World extends Renderable {
  /** Loaded regions */
  readonly regions = new Map<string, Region>();

  /** Camera */
  readonly camera: Camera;

  /** Constructor */
  constructor() {
    super({ id: "gracidea" });
    this.camera = new Camera({ world: this });
    this.init();
  }

  /** Initialize renderable */
  protected async init() {
    const { regions } = await fetch("/data/maps.json").then((res) => res.json());
    for (const { id = "", ...bounds } of regions) {
      this.regions.set(id, new Region({ world: this, id, bounds }));
    }
    this.#sea.sprite = this.sprite.addChild(Render.TilingSprite());
    if (App.config.patch) {
      Render.patch(this.#sea.sprite, "=");
      this.#sea.sprite.alpha = 0.1;
    }
    return super.init({ parent: App.rendering.stage });
  }

  /** Sea texture */
  readonly #sea = {
    sprite: null as ReturnType<typeof Render.TilingSprite> | null,
    frame: 0,
    dt: 0,
    resize: true,
  };

  /** Update renderable */
  async update({ t, dt }: { t: number; dt: number; debug?: boolean }) {
    //Sea update
    if (this.#sea.sprite) {
      this.#sea.sprite.visible = App.config.textures.sea;
      if (this.#sea.sprite.visible) {
        const { frames, speed } = Render.tileset.animated[2374];
        this.#sea.dt += speed * dt;
        if (this.#sea.dt > 2) {
          this.#sea.frame = (this.#sea.frame + 1) % frames.length;
          this.#sea.sprite.texture = Render.Texture(frames[this.#sea.frame]);
          this.#sea.dt = 0;
        }
        if (this.#sea.resize) {
          this.#sea.sprite.width = Math.round(2 + App.rendering.screen.width / 16) * 16;
          this.#sea.sprite.height = Math.round(2 + App.rendering.screen.height / 16) * 16;
          this.#sea.resize = false;
        }
        this.#sea.sprite.position.set(-Math.floor(1 + this.sprite.position.x / 16) * 16, -Math.floor(1 + this.sprite.position.y / 16) * 16);
      }
    }
    return super.update({ t, dt, debug: true });
  }

  /** Debug graphics properties */
  protected static debug = { text: "" } as Partial<Graphics>;
}
