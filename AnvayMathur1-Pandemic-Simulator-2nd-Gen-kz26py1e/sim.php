<!--

//////////////////////////////////
// Pandemic Simulator           //
// Copyright © Vayun Mathur 2020//
//////////////////////////////////

-->

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Pandemic Simulator | v1.1 (P: Release)</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
      
<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/0e91263b4e.js" crossorigin="anonymous"></script>
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">


	</script>
   <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <?php
  $ps_coival = null;
  $ps_trvlval = null;
  $ps_twnoval = null;
  $ps_rmval = null;
  $ps_ibcval = null;
  $ps_iltval = null;
  $ps_ppval = null;
  $ps_parkval = null;
  $ps_icuval = null;
  $ps_quarval = null;
  $ps_filval = null;
  $ps_badcval = null;
  $ps_badaval = null;
  $ps_badeval = null;
  $ps_badtval = null;
  $ps_tesval = null;
  $ps_motval = null;
  $ps_teval = null;
  $ps_helval = null;
  $ps_felval = null;
  $ps_chartval = null;
  if (isset($_COOKIE["ps_coi"]) && !isset($_POST["coi"])) {
    $ps_coival = $_COOKIE["ps_coi"];
    $ps_trvlval = $_COOKIE["ps_trvl"];
    $ps_twnoval = $_COOKIE["ps_twno"];
    $ps_rmval = $_COOKIE["ps_rm"];
    $ps_ibcval = $_COOKIE["ps_ibc"];
    $ps_iltval = $_COOKIE["ps_ilt"];
    $ps_ppval = $_COOKIE["ps_pp"];
    $ps_parkval = $_COOKIE["ps_park"];
    $ps_icuval = $_COOKIE["ps_icu"];
    $ps_quarval = $_COOKIE["ps_quar"];
    $ps_filval = $_COOKIE["ps_fil"];
    $ps_badcval = $_COOKIE["ps_badc"];
    $ps_badaval = $_COOKIE["ps_bada"];
    $ps_badeval = $_COOKIE["ps_bade"];
    $ps_badtval = $_COOKIE["ps_badt"];
    $ps_tesval = $_COOKIE["ps_tes"];
    $ps_pgpval = $_COOKIE["ps_pgp"];
    $ps_morval = $_COOKIE["ps_mor"];
    $ps_teval = $_COOKIE["ps_te"];
    $ps_helval = $_COOKIE["ps_hel"];
    $ps_felval = $_COOKIE["ps_fel"];
    $ps_chartval = $_COOKIE["ps_chart"];
  }
  else {
    $ps_coival = $_POST["coi"];
    $ps_trvlval = $_POST["trvl"];
    $ps_twnoval = $_POST["twno"];
    $ps_rmval = $_POST["rm"];
    $ps_ibcval = $_POST["ibc"];
    $ps_iltval = $_POST["ilt"];
    $ps_ppval = $_POST["pp"];
    $ps_parkval = $_POST["park"];
    $ps_icuval = $_POST["icu"];
    $ps_quarval = $_POST["quar"];
    $ps_filval = $_POST["fil"];
    $ps_badcval = $_POST["badc"];
    $ps_badaval = $_POST["bada"];
    $ps_badeval = $_POST["bade"];
    $ps_badtval = $_POST["badt"];
    $ps_tesval = $_POST["tes"];
    $ps_pgpval = $_POST["pgp"];
    $ps_morval = $_POST["mor"];
    $ps_teval = $_POST["te"];
    $ps_helval = $_POST["hel"];
    $ps_felval = $_POST["fel"];

    if ($_POST["chart"] == "on") {
      $ps_chartval = "checked";
    }
    else {
      $ps_chartval = "";
    }
    
    setcookie("ps_coi", $ps_coival, time() + (86400 * 365), "/");
    setcookie("ps_trvl", $ps_trvlval, time() + (86400 * 365), "/");
    setcookie("ps_twno", $ps_twnoval, time() + (86400 * 365), "/");
    setcookie("ps_rm", $ps_rmval, time() + (86400 * 365), "/");
    setcookie("ps_ibc", $ps_ibcval, time() + (86400 * 365), "/");
    setcookie("ps_ilt", $ps_iltval, time() + (86400 * 365), "/");
    setcookie("ps_pp", $ps_ppval, time() + (86400 * 365), "/");
    setcookie("ps_park", $ps_parkval, time() + (86400 * 365), "/");
    setcookie("ps_icu", $ps_icuval, time() + (86400 * 365), "/");
    setcookie("ps_quar", $ps_quarval, time() + (86400 * 365), "/");
    setcookie("ps_fil", $ps_filval, time() + (86400 * 365), "/");
    setcookie("ps_badc", $ps_badcval, time() + (86400 * 365), "/");
    setcookie("ps_bada", $ps_badaval, time() + (86400 * 365), "/");
    setcookie("ps_bade", $ps_badeval, time() + (86400 * 365), "/");
    setcookie("ps_badt", $ps_badtval, time() + (86400 * 365), "/");
    setcookie("ps_tes", $ps_tesval, time() + (86400 * 365), "/");
    setcookie("ps_pgp", $ps_pgpval, time() + (86400 * 365), "/");
    setcookie("ps_mor", $ps_morval, time() + (86400 * 365), "/");
    setcookie("ps_te", $ps_teval, time() + (86400 * 365), "/");
    setcookie("ps_hel", $ps_helval, time() + (86400 * 365), "/");
    setcookie("ps_fel", $ps_felval, time() + (86400 * 365), "/");
    setcookie("ps_chart", $ps_chartval, time() + (86400 * 365), "/");
  }
  ?>

</head>

<body>
  <h1>Pandemic Simulator</h1>
	<script type="text/javascript" src="/canvasjs.min.js">
  
	</script>
  <div class="container-fluid">
  <div class="fixed-top pr-3" style="text-align:right">
  <span class="fa-stack s1 fa-lg" onclick="playing = true">
  <i class="fa fa-circle c1 fa-stack-2x"></i>
  <i class="fas fa-play fa-stack-1x"></i>
</span>
<span class="fa-stack s2 fa-lg" onclick="playing = false">
  <i class="fa fa-circle c2 fa-stack-2x"></i>
  <i class="fas fa-pause fa-stack-1x"></i>
</span>
  </div>
  <div class="row">
  <div class="col-xl-6 text-center">
	<div id="canvas-container">
		<canvas id="canvas" style="border:1px solid #000000" height="600" width="600">
	</div>
  <button class="button border-right" onclick="window.location.href = '/index.php'">Reset</button><button class="button border-left" onclick="window.location.href = '/sim.php'">Restart</button>
  </div>
  <div class="col-xl-6">
  <div class="row m-0 p-0">
  <div class="col-sm-8" style="text-align:center">
	<h5>Infection Statuses (Colour of person)</h5>
  <h5>Susceptible (Blue): <span id="s"></span></h5>
  <h5>Exposed (Yellow): <span id="n"></span></h5>
  <h5>Infectious (Orange): <span id="in"></span></h5>
  <h5>Visible (Red): <span id="i"></span></h5>
  <h5>Critical Condition (Brown): <span id="c"></span></h5>
  <h5>Recovered (Grey): <span id="r"></span></h5>
  <h5>Deceased (Black): <span id="de"></span></h5>
  <h5>Day <span id="d"></span>, Hour <span id="h"></span></h5>
  </div>
  <div class="col-sm-4 text-center">
  <div class="row h-100">
  <div class="container my-auto" style="list-style-position:inside">
  <p>Building Colors:</p>
  <p>Green: Houses<br />
			Red: Offices<br />
			Blue: Schools<br />
			Cyan: Parks<br />
			Yellow: Hotels<br />
			Grey: Hospital<br />
			Black: Graveyard</p>
  
    </div>
    </div>
  </div>
 <div class="row row-cols-2">
  <div class="col">Community 1: <span id="com1a"></span><span id="com1">Business as usual</span></div>
  <div class="col">Community 2: <span id="com2a"></span><span id="com2">Business as usual</span> </div>
  <div class="col">Community 3: <span id="com3a"></span><span id="com3">Business as usual</span> </div>
  <div class="col">Community 4: <span id="com4a"></span><span id="com4">Business as usual</span></div>
</div>
  <!--<p>Community 1: <span id="com1">Business as usual</span> 
     Community 2: <span id="com2">Business as usual</span> 
     Community 3: <span id="com3">Business as usual</span> 
     Community 4: <span id="com4">Business as usual</span>
  </p>-->
  <div id="chartContainer" style="height: 300px; width: 100%;"></div>
  
  </div>
  </div>
  </div>
  <br />
  <h1 id="loadingtext" class="text-center"></h1>
  <footer>
		<p>Created with help from Anvay Mathur<br />Copyright © 2020 Vayun Mathur<br /><a href="cp.html">Cookie Policy</a></p>
		</footer>
  </div>
  <script>
  var infectChance = <?php echo $ps_coival ?>;
	var visibleTime = <?php echo $ps_twnoval ?>;
	var travelChance = <?php echo $ps_trvlval ?>;
	var recoveryTime = <?php echo $ps_rmval ?>;
  var borderClosure = <?php echo $ps_ibcval ?>;
  var limInterClosure = <?php echo $ps_iltval ?>;
  var peoplePerCommunity = <?php echo $ps_ppval ?>;
  var parkVisitChance = <?php echo $ps_parkval ?>;
  var icuSpace = <?php echo $ps_icuval ?>;
  var quarintineSpace = <?php echo $ps_quarval ?>;
  var lockdownClosure = <?php echo $ps_filval ?>;
  var testsPerDay = <?php echo $ps_tesval ?>;
  var badChanceChild = <?php echo $ps_badcval ?>;
  var badChanceAdult = <?php echo $ps_badaval ?>;
  var badChanceElder = <?php echo $ps_badeval ?>;
  var deathTimeBad = <?php echo $ps_badtval ?>;
  var goodPersonChance = <?php echo $ps_pgpval ?>;
  var mortalityInICU = <?php echo $ps_morval ?>;
  var exposedTime = <?php echo $ps_teval ?>;
  var casesPerDayBeforeLockdownRelaxation = <?php echo $ps_helval ?>;
  var casesPerDayBeforeLockdownRepeal = <?php echo $ps_felval ?>;
  var chartEnabled = "<?php echo $ps_chartval ?>";
  </script>
  <script src="script.js"></script>
	
		
  
  <link rel="stylesheet" type="text/css" href="//wpcc.io/lib/1.0.2/cookieconsent.min.css"/><script src="//wpcc.io/lib/1.0.2/cookieconsent.min.js"></script><script>window.addEventListener("load", function(){window.wpcc.init({"border":"thin","corners":"small","colors":{"popup":{"background":"#f6f6f6","text":"#000000","border":"#555555"},"button":{"background":"#555555","text":"#ffffff"}},"position":"bottom","content":{"href":"/cp.html","message":"This site uses cookies to make your experience better"}})});</script>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>

</html>