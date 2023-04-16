<?php 

header("Content-Type: application/json; charset=UTF-8");

//Inclluir a conexão
include("conexao.php");

//Obter dados
$response_json = file_get_contents("php://input");

//Extrair dados do json
$dados = json_decode($response_json, true);

if($dados) {
    $query_link = "UPDATE links SET urlLink=?, descriptionLink=? WHERE idLink=?";
    $edit_link = $conn->prepare($query_link);
    $edit_link->bind_param("sss", $dados['urlLink'], $dados['descriptionLink'], $dados['idLink']);

    $edit_link->execute();

    if($edit_link->affected_rows) {
        $response = [
            "error" => false,
            "mensage" => "Editado com sucesso!",
            "dados" => $dados
        ];
    } else {
        $response = [
            "error" => true,
            "mensage" => "Edição negado!",
        ];
    }
} else {
    $response = [
        "error" => true,
        "mensage" => "Acesso negado!",
    ];
}

http_response_code(200);
echo json_encode($response);

?>
