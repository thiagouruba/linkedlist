<?php 

//incluir conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM links";

//Executar - as informações estarão disponíveis na variável $executar.
$executar = mysqli_query($conn, $sql);

//Vetor - onde será armazendo os as colunas de cada dado.
$links = [];

//Índice - para saber em qual posição estaremos armazendo cada item
$indice = 0;

//Laço - percorrerá cada linha da tabela.
while($linha = mysqli_fetch_assoc($executar)){
    $links[$indice]['idLink'] = $linha['idLink'];
    $links[$indice]['urlLink'] = $linha['urlLink'];
    $links[$indice]['descriptionLink'] = $linha['descriptionLink'];
    $indice++;
}

//JSON - encapsulando no json
json_encode(["links" => $links]);
echo json_encode(["links" => $links]);

?>