<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$file = "data/animals.json";

$json = file_get_contents($file);

echo $json;