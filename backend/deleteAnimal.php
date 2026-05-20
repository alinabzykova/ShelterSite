<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$file = "data/animals.json";

$animals = json_decode(file_get_contents($file), true);

$animals = array_filter($animals, function ($animal) use ($data) {
    return $animal["id"] != $data["id"];
});

$animals = array_values($animals);

file_put_contents(
    $file,
    json_encode($animals, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);

echo json_encode([
    "success" => true
]);