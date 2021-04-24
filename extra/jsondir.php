<?php
// From: https://stackoverflow.com/questions/20448339/apache-directory-listing-as-json

// grab the files
$files = scandir(dirname(__FILE__, 2));

// remove "." and ".." (and anything else you might not want)
$output = [];
foreach ($files as $file)
  if (!in_array($file, [".", ".."]))
      $output[] = $file;

      // out we go
      header("Content-type: application/json");
      echo json_encode($output);
?>
