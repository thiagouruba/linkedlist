<?php

include("conexao.php");

$id = $_GET['id'];

$sql = "DELETE FROM links WHERE idLink = $id";
$stmt = $conn->prepare($sql);
$stmt->execute();

if($stmt->affected_rows) {
    $response = [
        "error" => false,
        "mensage" => "Excluído com sucesso!",
    ];
} else {
    $response = [
        "error" => true,
        "mensage" => "Exclusão negada!",
    ];
}

echo json_encode($response);

?>