<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$json = file_get_contents("data/animals.json");

echo $json;