<!--

///////////////////////////////////
// Pandemic Simulator            //
// Copyright © Vayun Mathur 2020 //
///////////////////////////////////

-->

<!DOCTYPE html>
<html>
  <head>
    <title>Pandemic Simulator | Setup | v1.1 (P: Release)</title>
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

<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
    
  </head>
  <body>
  <?php
  if (isset($_COOKIE["ps_coi"])) {
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
    $ps_badeval = $_COOKIE["ps_bade"];
    $ps_badcval = $_COOKIE["ps_badc"];
    $ps_badaval = $_COOKIE["ps_bada"];
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
    $ps_coival = 0.4;
    $ps_trvlval = 0.01;
    $ps_twnoval = 14;
    $ps_rmval = 20;
    $ps_ibcval = 5;
    $ps_iltval = 1;
    $ps_ppval = 500;
    $ps_parkval = 0.7;
    $ps_icuval = 20;
    $ps_quarval = 70;
    $ps_filval = 3;
    $ps_badcval = 0.05;
    $ps_badaval = 0.2;
    $ps_badeval = 0.8;
    $ps_badtval = 6;
    $ps_tesval = 10;
    $ps_pgpval = 0.7;
    $ps_morval = 0.1;
    $ps_teval = 3;
    $ps_helval = 2;
    $ps_felval = 6;
    $ps_chartval = "checked";
  }
  ?>
  <h1>Pandemic Simulator</h1>
  <h3>How to use Pandemic Simulator</h3>
  <a href="#table">Skip to Setup</a>
  <p><strong>Please note that Pandemic Simulator requires a lot of resources when your simulation reaches a Day 40 on a normal laptop.</strong></p>
  <p>You can avoid this by turning off the chart. You can do that below at Setup. This will speed up the simulation A LOT.</p>
  <p>In Pandemic Simulator, each person is categorized by the level of infection and the treatment they are recieving: </p>
	<p>Infection levels: </p>
  <ol>
    <li>Susceptible (Not infected)</li>
    <li>Exposed (Infected, but is not infectious and shows no symptoms)</li>
    <li>Infectious (Infected, but shows no symptoms)</li>
    <li>Visible (Infected, and shows symptoms)</li>
    <li>Critical (In danger of death if not hospitalised)</li>
    <li>Deceased (Died of the disease)</li>
    <li>Recovered (Immune from the disease)</li>
  </ol>
	<p>Treatment levels: </p>
  <ol>
    <li>Positive (Got tested positive)</li>
    <li>Isolated (Self-isolation)</li>
    <li>Quarantined (Government-enforced isolation)</li>
    <li>In ICU (Undergoing treatment for critical condition)</li>
  </ol>
	<p>You can use the sliders below to change the factors of the pandemic simulation.</p>
	<p>Color codes for the simulation</p>
		<p>Outlines: </p>
		<ul>
			<li>Green: Houses</li>
			<li>Red: Offices</li>
			<li>Blue: Schools</li>
			<li>Cyan: Parks/Malls</li>
			<li>Yellow: Hotels</li>
			<li>Grey: Hospital</li>
			<li>Black: Graveyard</li>
		</ul>
		<p>People: </p>
		<ul>
			<li>Cyan: Susceptible</li>
			<li>Yellow: Exposed</li>
      <li>Orange: Infectious</li>
			<li>Red: Visible</li>
			<li>Brown: Critical</li>
			<li>Grey: Recovered</li>
			<li>Black: Deceased</li>
		</ul>
  <h2>Simulation Parameters</h2>
  
  <form action="sim.php" method="POST">
			<h3>Community Information</h3>
      <h4>Note: The simulation will contain 4 communities, each community will have a certain amount of people, and based on that, there will be a calculated number of houses, offices, parks/malls, etc.</h4>
      <table class="table" id="table">
          <tr>
            <td class="textCell">
        <label for="pp">People per community: </label>
            </td>
            <td>
      <input type="range" min="100" max="1250" value="<?php echo $ps_ppval; ?>" class="slider" name="pp" step="1" id="pp">
            </td>
            <td class="numberCell">
        <label for="pp"><span class="pp2">200</span> people</label>
            </td>
          </tr>
          
          <tr>
            <td>
      <label for="trvl">Percentage of people doing inter-community travel: </label>
            </td>
            <td>
      <input type="range" min="0" max="1" value="<?php echo $ps_trvlval; ?>" class="slider" step="0.0001" id="trvl" name="trvl">
            </td>
            <td>
      <label for="trvl"><span class="trvl2">0.01</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="park">Percentage of people who go to the park/mall: </label>
            </td>
            <td>
      <input type="range" min="0" max="1" value="<?php echo $ps_parkval; ?>" class="slider" name="park" step="0.001" id="park">
            </td>
            <td class="numberCell">
        <label for="park"><span class="park2">70</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Percentage of people who follow lockdown orders:</label>
            </td>
            <td>
      <input type="range" min="0" max="1" value="<?php echo $ps_pgpval; ?>" class="slider" name="pgp" step="0.01" id="pgp">
            </td>
            <td class="numberCell">
        <label for="pgp"><span class="pgp2">70</span>%</label>
            </td>
          </tr>
					</table>
          <h3>Medical Capacity</h3>
					<table class="table">
          <tr>
            <td class="textCell">
        <label for="quar">Quarantine Space per community:</label>
            </td>
            <td>
      <input type="range" min="0" max="200" value="<?php echo $ps_quarval; ?>" class="slider" name="quar" step="1" id="quar">
            </td>
            <td class="numberCell">
        <label for="quar"><span class="quar2">10</span> people</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="icu">ICU Space per community: </label>
            </td>
            <td>
      <input type="range" min="0" max="200" value="<?php echo $ps_icuval; ?>" class="slider" name="icu" step="1" id="icu">
            </td>
            <td class="numberCell">
        <label for="icu"><span class="icu2">10</span> people</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Tests done per day:</label>
            </td>
            <td>
      <input type="range" min="0" max="100" value="<?php echo $ps_tesval; ?>" class="slider" name="tes" step="1" id="tes">
            </td>
            <td class="numberCell">
        <label for="tes"><span class="tes2">6</span> tests</label>
            </td>
          </tr>
					</table>
					<h3>Lockdown Thresholds</h3>
					<table  class="table">
           <tr>
            <td class="textCell">
        <label for="ilt">50% Lockdown threshold (cases per day):</label>
            </td>
            <td>
      <input type="range" min="2" max="540" value="<?php echo $ps_iltval; ?>" class="slider" name="ilt" step="1" id="ilt">
            </td>
            <td class="numberCell">
        <label for="ilt"><span class="ilt2">5</span> visible</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="fil">100% Lockdown threshold (cases per day): </label>
            </td>
            <td>
      <input type="range" min="1" max="540" value="<?php echo $ps_filval; ?>" class="slider" name="fil" step="1" id="fil">
            </td>
            <td class="numberCell">
        <label for="fil"><span class="fil2">5</span> visible</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="ibc">Border closure threshold (total visible cases): </label>
            </td>
            <td>
      <input type="range" min="1" max="1000" value="<?php echo $ps_ibcval; ?>" class="slider" name="ibc" step="1" id="ibc">
            </td>
            <td class="numberCell">
        <label for="ibc"><span class="ibc2"
        >120</span> visible worldwide</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="hel">Relaxation of lockdown threshold (cases per day): </label>
            </td>
            <td>
      <input type="range" min="1" max="1000" value="<?php echo $ps_helval; ?>" class="slider" name="hel" step="1" id="hel">
            </td>
            <td class="numberCell">
        <label for="hel"><span class="hel2"
        >120</span> visible</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label for="fel">Repealing of lockdown threshold (cases per day): </label>
            </td>
            <td>
      <input type="range" min="1" max="1000" value="<?php echo $ps_felval; ?>" class="slider" name="fel" step="1" id="fel">
            </td>
            <td class="numberCell">
        <label for="fel"><span class="fel2"
        >120</span> visible</label>
            </td>
          </tr>
					</table>
          
					<h3><a href="javascript:showDisease()"><span id="show">Show</span> disease settings</a></h3>
					<table class="table" id="disease">
          <tr>
            <td class="textCell">
        <label for="coi">Chance of infection: </label>
            </td>
            <td>
      <input type="range" min="0.01" max="1" value="<?php echo $ps_coival; ?>" class="slider" name="coi" step="0.01" id="coi">
            </td>
            <td class="numberCell">
        <label for="coi"><span class="coi2" >40</span>%</label>
            </td>
          </tr>
          <tr>
            <td>
      <label for="twno">Time exposed (Exposed): </label>
            </td>
            <td>
      <input type="range" min="0" max="50" value="<?php echo $ps_teval; ?>" class="slider" step="1" id="te" name="te">
            </td>
            <td>
      <label for="te"><span class="te2">14</span> days</label>
            </td>
          </tr>
          <tr>
            <td>
      <label for="twno">Time with no symptoms (Infectious): </label>
            </td>
            <td>
      <input type="range" min="0" max="50" value="<?php echo $ps_twnoval; ?>" class="slider" step="1" id="twno" name="twno">
            </td>
            <td>
      <label for="twno"><span class="twno2" >14</span> days</label>
            </td>
          </tr>
          <tr>
            <td>
      <label for="rm">Recovery time: </label>
            </td>
            <td>
      <input type="range" min="0" max="50" value="<?php echo $ps_rmval; ?>" class="slider" step="1" id="rm" name="rm">
            </td>
            <td>
      <label for="rm"><span class="rm2">14</span> days</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Chance of getting lethal case without ICU (Child):</label>
            </td>
            <td>
      <input type="range" min="0.01" max="1" value="<?php echo $ps_badcval; ?>" class="slider" name="badc" step="0.01" id="badc">
            </td>
            <td class="numberCell">
        <label for="badc"><span class="badc2">5</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Chance of getting lethal case without ICU (Adult):</label>
            </td>
            <td>
      <input type="range" min="0.01" max="1" value="<?php echo $ps_badaval; ?>" class="slider" name="bada" step="0.01" id="bada">
            </td>
            <td class="numberCell">
        <label for="bada"><span class="bada2">20</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Chance of getting lethal case without ICU (Elderly):</label>
            </td>
            <td>
      <input type="range" min="0.01" max="1" value="<?php echo $ps_badeval; ?>" class="slider" name="bade" step="0.01" id="bade">
            </td>
            <td class="numberCell">
        <label for="bade"><span class="bade2">80</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Mortality rate in ICU:</label>
            </td>
            <td>
      <input type="range" min="0.01" max="1" value="<?php echo $ps_morval; ?>" class="slider" name="mor" step="0.01" id="mor">
            </td>
            <td class="numberCell">
        <label for="mor"><span class="mor2">80</span>%</label>
            </td>
          </tr>
          <tr>
            <td class="textCell">
        <label>Time until death (In critical condition without ICU):</label>
            </td>
            <td>
      <input type="range" min="1" max="20" value="<?php echo $ps_badtval; ?>" class="slider" name="badt" step="1" id="badt">
            </td>
            <td class="numberCell">
        <label for="badt"><span class="badt2">6</span> days</label>
            </td>
          </tr>
          
         
         
      </table>
      <table>
        <tr>
            <td class="textCell">
         <label for="chart">Toggle the chart</label>
            </td>
            <td>
     <label class="switch">
            <input type="checkbox" name="chart" id="chart" value="on" <?php echo $ps_chartval; ?>>
            <span class="sliderc"></span>
          </label>
            </td>
          </tr>
      </table>
      <button onclick="resetd()" type="button">Reset to default</button>
      &nbsp;
    </div>
    

<h3>Disease Presets</h3>
<h4>Note: The ICU Mortality rate can differ to what time you are trying to simulate. You can change it by clicking <a href="javascript:showDisease()">here</a> to show those settings.</h4>
<div class="gallery">
  <a href="javascript:covid19()">
    <img src="/images/SARS-CoV-2-COVID-19.jpg" alt="SARS-CoV-2 (COVID-19)" class="disease-presets">
  </a>
  <div class="desc">COVID-19, 2020 (SARS-CoV-2)</div>
</div>
<div class="gallery">
  <a href="javascript:blackdeath()">
    <img src="/images/yersina-pestis-black-plague.jpg" alt="Yersina Pestis (Black Death)" class="disease-presets">
  </a>
  <div class="desc">Black Death Outbreak, 1347 (Yersina Pestis)</div>
</div>
<div class="gallery">
  <a href="javascript:spanflu()">
    <img src="/images/H1N1-Influenza-Type-A-Spanish-Flu.jpg" alt="H1N1 Influenza Type A (Spanish Flu Outbreak)" class="disease-presets">
  </a>
  <div class="desc">1918 Spanish Flu Outbreak, 1918 (H1N1 Influenza A Virus)</div>
</div>

    <input type="submit" value="Start simulating!">
    </form>
    <script>
    
    </script>
    <link rel="stylesheet" type="text/css" href="//wpcc.io/lib/1.0.2/cookieconsent.min.css"/><script src="//wpcc.io/lib/1.0.2/cookieconsent.min.js"></script><script>window.addEventListener("load", function(){window.wpcc.init({"border":"thin","corners":"small","colors":{"popup":{"background":"#f6f6f6","text":"#000000","border":"#555555"},"button":{"background":"#555555","text":"#ffffff"}},"position":"bottom","content":{"href":"/cp.html","message":"This site uses cookies to make your experience better"}})});</script>
    <script src="script2.js"></script>
		<footer>
		<p>Created with help from Anvay Mathur<br/>Copyright © 2020 Vayun Mathur<br /><a href="cp.html">Cookie Policy</a></p>
		</footer>
  </body>
</html>