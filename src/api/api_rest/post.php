<?php

class Post
{
    //connection used in constructor
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read()
    {
        $query = 'SELECT * FROM links';
        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        $result = $stmt->get_result();
        $items = $result->fetch_all(MYSQLI_ASSOC);

        $links = array('links' => $items);
        $json = json_encode($links);

        return $json;
    }
}