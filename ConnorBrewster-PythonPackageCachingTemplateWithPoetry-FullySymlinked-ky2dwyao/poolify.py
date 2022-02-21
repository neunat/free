#!/usr/bin/env python3

import hashlib
import os
import os.path
import stat

def _main() -> None:
  for root, dirs, files in os.walk('venv/lib/python3.8/site-packages'):
    dirs[:] = [d for d in dirs if d != '__pycache__' and '.dist-info' not in d]
    for filename in files:
      filename = os.path.join(root, filename)
      st = os.stat(filename)
      if not stat.S_ISREG(st.st_mode):
        continue
      with open(filename, 'rb') as f:
        sha256sum = hashlib.sha256(f.read()).hexdigest()
      target = os.path.join('/home/runner/.cache/pip/pool', sha256sum[:2], sha256sum[2:4], sha256sum[4:6], sha256sum[6:])
      if not os.path.isfile(target):
        continue
      os.unlink(filename)
      os.symlink(target, filename)

if __name__ == '__main__':
  _main()