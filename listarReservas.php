<?php
include 'conexion.php';

$sql = "SELECT r.id, c.nombre, v.marca, v.modelo, r.fecha_inicio, r.fecha_fin
        FROM reservas r
        JOIN clientes c ON r.cliente_id = c.id
        JOIN vehiculos v ON r.vehiculo_id = v.id";

$result = $conexion->query($sql);

$datos = [];

while ($fila = $result->fetch_assoc()) {
    $datos[] = $fila;
}

echo json_encode($datos);
?>