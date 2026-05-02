<?php
include 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

$marca = $data['marca'];
$modelo = $data['modelo'];
$anio = $data['anio'];
$categoria = $data['categoria'];

$sql = "INSERT INTO vehiculos (marca, modelo, anio, categoria, estado)
        VALUES ('$marca','$modelo','$anio','$categoria','DISPONIBLE')";

echo $conexion->query($sql) ? "ok" : "error";
?>