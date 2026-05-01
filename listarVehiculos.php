<?php
include 'conexion.php';

$result = $conexion->query("SELECT * FROM vehiculos");

$datos = [];

while ($fila = $result->fetch_assoc()) {
    $datos[] = $fila;
}

echo json_encode($datos);
?>