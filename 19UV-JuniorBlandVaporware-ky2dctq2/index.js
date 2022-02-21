const crypto = require("crypto");

for(const name of ["Notch", "jeb_", "simon"]) {
  let hash = crypto.createHash("sha1");
  hash.update(name);
  console.log(name, custom_digest(hash));
}

function custom_digest(hash) {
  function incrementBE (buffer) {
    for (var i = buffer.length - 1; i >= 0; i--) {
        if (buffer[i]++ !== 255) break;
    }
  }

  let buffer = hash.digest();
  const negative = buffer[0] & 0x80;
  if(negative) {
    buffer = buffer.map(v=>~v);
    incrementBE(buffer);
    return "-" + buffer.toString("hex");
  } else {
    return buffer.toString("hex");
  }
}