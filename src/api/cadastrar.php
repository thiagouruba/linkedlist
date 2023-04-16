<?php

header("Content-Type: application/json; charset=UTF-8");

include("conexao.php");

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

http_response_code(200);
echo json_encode($dados);

if($dados) {

    $query_link = "INSERT INTO links (urlLink, descriptionLink) VALUES (?, ?)";
    $cad_link = $conn->prepare($query_link);

    $cad_link->bind_param("ss", $dados['link']['urlLink'], $dados['link']['descriptionLink']);

    $cad_link->execute();

}

?>
