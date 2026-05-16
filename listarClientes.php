<?php
include 'conexion.php';

$result = $conexion->query("SELECT id, nombre, telefono, licencia FROM clientes");
$datos = [];

while ($fila = $result->fetch_assoc()) {
    $datos[] = $fila;
}

header('Content-Type: application/json');
echo json_encode($datos);
?>