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

    if ($user["email"] === $data["email"]) {

        echo json_encode([
            "success" => false,
            "message" => "Пользователь уже существует"
        ]);

        exit;
    }
}

$newUser = [
    "id" => time(),
    "name" => $data["name"],
    "email" => $data["email"],
    "password" => $data["password"]
];

$users[] = $newUser;

file_put_contents(
    $file,
    json_encode($users, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);

echo json_encode([
    "success" => true,
    "message" => "Регистрация успешна"
]);