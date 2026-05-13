<?php

header("Content-Type: application/json");

$data = file_get_contents("animals.json");

echo $data;

?>