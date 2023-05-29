<?php
require_once 'connection.php';
require_once 'post.php';

$connection = new Connection();
$conn = $connection->getConnection();
$post = new Post($conn);
$json = $post->read();
echo $json;