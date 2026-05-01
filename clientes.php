<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data['nombre'];
$telefono = $data['telefono'];
$licencia = $data['licencia'];

$sql = "INSERT INTO clientes (nombre, telefono, licencia)
        VALUES ('$nombre','$telefono','$licencia')";

if ($conexion->query($sql)) {
    echo "ok";
} else {
    echo "error";
}
?>