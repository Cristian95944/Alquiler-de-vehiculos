<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "No se recibieron datos válidos";
    exit;
}

$marca = $data['marca'];
$modelo = $data['modelo'];
$anio = (int)$data['anio'];
$categoria = $data['categoria'];
$estado = 'DISPONIBLE';

$stmt = $conexion->prepare("INSERT INTO vehiculos (marca, modelo, anio, categoria, estado) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssiss", $marca, $modelo, $anio, $categoria, $estado);

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "error";
}

$stmt->close();
?>