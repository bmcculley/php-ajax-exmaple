<?php

include('ajax-example.php');

if(isset($_POST['action']) && !empty($_POST['action'])) {
  $action = $_POST['action'];
  switch($action) {
    case 'test': 
      test();
      break;
    case 'example': 
      example();
      break;
    default: 
      oops();
      break;
  }
}

?>
