<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

$vehiculo_id = $data['vehiculo_id'];
$cliente_id = $data['cliente_id'];
$fecha_inicio = $data['fecha_inicio'];
$fecha_fin = $data['fecha_fin'];

$check = $conexion->query("SELECT estado FROM vehiculos WHERE id=$vehiculo_id");
$fila = $check->fetch_assoc();

if ($fila['estado'] != 'DISPONIBLE') {
    echo "no disponible";
    exit;
}

$sql = "INSERT INTO reservas (vehiculo_id, cliente_id, fecha_inicio, fecha_fin)
        VALUES ($vehiculo_id, $cliente_id, '$fecha_inicio', '$fecha_fin')";

$conexion->query($sql);

$conexion->query("UPDATE vehiculos SET estado='ALQUILADO' WHERE id=$vehiculo_id");

echo "ok";
?>