<?php
// incluir o arquivo de conexão
include("conexao.php");

// definir o cabeçalho da resposta como JSON
header('Content-Type: application/json');

// receber o ID do item a ser buscado
$id = $_GET['id']; // supondo que você está recebendo o ID via GET

// preparar a consulta SQL para buscar o item pelo ID
$query = "SELECT * FROM links WHERE idLink = $id";

// executar a consulta SQL e armazenar o resultado
$resultado = mysqli_query($conn, $query);

// verificar se a consulta SQL foi executada com sucesso
if (!$resultado) {
    die('Consulta inválida: ' . mysqli_error());
}

// verificar se o item foi encontrado no banco de dados
if (mysqli_num_rows($resultado) == 0) {
    die('Item não encontrado');
}

// extrair os dados do item da linha de resultado e armazená-los em variáveis
$dados = mysqli_fetch_assoc($resultado);
$idLink = $dados['idLink'];
$urlLink = $dados['urlLink'];
$descriptionLink = $dados['descriptionLink'];

// transformar os dados em um objeto JSON
echo json_encode($dados);

// fechar a conexão com o banco de dados
mysqli_close($conn);
?>
