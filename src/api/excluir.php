<?php 

//Inclluir a conexão
include("conexao.php");

$id = $_GET['id'];

$idLink = 1; // Substitua o valor pelo id do item que deseja excluir

// Prepara a consulta SQL para exclusão do item
$sql = "DELETE FROM links WHERE idLink = $id";
$stmt = $conn->prepare($sql);

// Executa a consulta SQL
$stmt->execute();

// Exibe uma mensagem de sucesso caso a exclusão tenha sido realizada com êxito

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