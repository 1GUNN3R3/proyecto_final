<?php
include("conexion.php");

$tabla = $_GET["tabla"];

$tablas_permitidas = [
    "clientes", "departamentos", "doctores", "facturas",
    "habitaciones", "medicamentos", "pacientes", "producto",
    "secretaria", "tratamientos"
];

if (!in_array($tabla, $tablas_permitidas)) {
    echo json_encode(["error" => "Tabla no permitida"]);
    exit;
}

$sql = "SELECT * FROM $tabla";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>
