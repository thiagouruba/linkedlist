<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <h1>Teste</h1>
    
    <?php
        include_once 'post.php';
        include_once 'connection.php';
        $connection = new Connection();
        $conn = $connection->getConnection();
        $post = new Post($conn);
        print_r($post->read());
    ?>
    
</body>
</html>