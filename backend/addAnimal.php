<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$data = json_decode(file_get_contents("php://input"), true);

$file = "data/animals.json";

$animals = json_decode(file_get_contents($file), true);

$newAnimal = [
    "id" => time(),
    "name" => $data["name"],
    "age" => $data["age"],
    "size" => $data["size"],
    "description" => $data["description"],
    "image" => $data["image"]
];

$animals[] = $newAnimal;

file_put_contents(
    $file,
    json_encode($animals, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);

echo json_encode([
    "message" => "Животное добавлено"
]);