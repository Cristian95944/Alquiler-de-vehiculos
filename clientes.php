<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "No se recibieron datos válidos";
    exit;
}

$nombre = $data['nombre'];
$telefono = $data['telefono'];
$licencia = $data['licencia'];

$stmt = $conexion->prepare("INSERT INTO clientes (nombre, telefono, licencia) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $telefono, $licencia);

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "error";
}

$stmt->close();
?>