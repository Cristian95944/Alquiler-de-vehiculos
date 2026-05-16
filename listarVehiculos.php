<?php
include 'conexion.php';

$result = $conexion->query("SELECT id, marca, modelo, anio, categoria, estado FROM vehiculos");
$datos = [];

while ($fila = $result->fetch_assoc()) {
    $datos[] = $fila;
}

header('Content-Type: application/json');
echo json_encode($datos);
?>