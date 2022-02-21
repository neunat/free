<?php 
  header('Access-Control-Allow-Origin: *');
  $c_rank = $_REQUEST['c_rank'];
  $w_rank = $_REQUEST['w_rank'];
  $i=$c_rank;
  $e_rank=$c_rank;
  if($c_rank < $w_rank && !empty($c_rank) && !empty($w_rank)){
      if($w_rank - $c_rank <= 1){
        $e_rank = $e_rank + 1;
        $e_rank = $e_rank * 1000;
      echo $e_rank;
      }
    else{
      while($i<$w_rank){
        $i++;
        $e_rank = $e_rank + $i;
      }
      $e_rank = $e_rank - $c_rank;
      $e_rank = $e_rank * 1000;
      echo $e_rank;
    }
  }
  else{
    echo "invalid";
  }
?>