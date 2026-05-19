<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$data = json_decode(file_get_contents("php://input"), true);

$file = "data/users.json";

$users = json_decode(file_get_contents($file), true);

foreach ($users as $user) {

    if (
        $user["email"] === $data["email"] &&
        $user["password"] === $data["password"]
    ) {

        echo json_encode([
            "success" => true,
            "name" => $user["name"]
        ]);

        exit;
    }
}

echo json_encode([
    "success" => false,
    "message" => "Неверный email или пароль"
]);