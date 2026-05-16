<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "No se recibieron datos válidos";
    exit;
}

$vehiculo_id = (int)$data['vehiculo_id'];
$cliente_id = (int)$data['cliente_id'];
$fecha_inicio = $data['fecha_inicio'];
$fecha_fin = $data['fecha_fin'];

$stmtCheck = $conexion->prepare("SELECT estado FROM vehiculos WHERE id = ?");
$stmtCheck->bind_param("i", $vehiculo_id);
$stmtCheck->execute();
$result = $stmtCheck->get_result();
$fila = $result->fetch_assoc();
$stmtCheck->close();

if (!$fila) {
    echo "El vehículo solicitado no existe";
    exit;
}

if ($fila['estado'] !== 'DISPONIBLE') {
    echo "El vehículo no se encuentra disponible";
    exit;
}

$stmtIns = $conexion->prepare("INSERT INTO reservas (vehiculo_id, cliente_id, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)");
$stmtIns->bind_param("iiss", $vehiculo_id, $cliente_id, $fecha_inicio, $fecha_fin);
$stmtIns->execute();
$stmtIns->close();

$stmtUpd = $conexion->prepare("UPDATE vehiculos SET estado = 'ALQUILADO' WHERE id = ?");
$stmtUpd->bind_param("i", $vehiculo_id);
$stmtUpd->execute();
$stmtUpd->close();

echo "ok";
?>