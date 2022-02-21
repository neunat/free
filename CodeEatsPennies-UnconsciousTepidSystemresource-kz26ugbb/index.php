<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
<?php

$safe_path = escapeshellarg($_FILES['scanthis.pdf']['tmp_name']);
$command = 'clamscan ' . $safe_path;
$out = '';
$int = -1;
exec($command, $out, $int);

if ($int == 0) {
  echo ("oh");
  // all good, code goes here uploads file as normal IE move to
  


} else {

  echo ($safe_path);
  //whatever you need to do if a virus is found.
}

?>  </body>
</html>