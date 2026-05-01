<?php
$conexion = new mysqli("localhost", "root", "", "alquiler_vehiculos");

if ($conexion->connect_error) {
    die("Error de conexión");
}
?>