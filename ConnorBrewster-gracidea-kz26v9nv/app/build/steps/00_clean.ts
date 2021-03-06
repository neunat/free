//Imports
import { clean, log } from "app/build/util.ts";

/** Clean environment */
export default async function () {
  log.step("cleaning environment");

  //Remove previous directories
  for (const path of ["app/public", "app/build/cache"]) {
    await clean({ path });
  }

  log.success();
}
