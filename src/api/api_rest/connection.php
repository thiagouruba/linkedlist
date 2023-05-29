<?php

class Connection
{
    private $url = "localhost";
    private $user = "root";
    private $pass = "";
    private $db = "linkedlist";

    public function getConnection()
    {
        $conn = mysqli_connect($this->url, $this->user, $this->pass, $this->db);
        return $conn;
    }
}