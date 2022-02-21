const sqlite3 = require('sqlite3');

class Database {
  constructor(filename) {
    this.db = new sqlite3.Database(filename || 'db.sqlite3');
  }

  close() {
    this.db.close();
  }

  run(cmd, callback = (()=>{})) {
    if(cmd.split(' ')[0].toLowerCase().trim() == 'select') {
      this.db.all(cmd, (err, rows) => callback(rows));
    } else {
      this.db.run(cmd, (err) => callback());
    }
  }

  runScripts(cmds, callback = (()=>{})) {
    let i = 0;
    let self = this;
    function next() {
      self.run(cmds[i], (res) => {
        i++;
        if(i < cmds.length) {
          next();
        } else {
          callback(res);
        }
      });
    }
    next();
  }

  runAsync(cmd) {
    return new Promise((resolve, reject) => {
      this.run(cmd, resolve);
    });
  }

  runScriptsAsync(cmds) {
    return new Promise((resolve, reject) => {
      this.runScripts(cmds, resolve);
    });
  }
}
module.exports = Database;