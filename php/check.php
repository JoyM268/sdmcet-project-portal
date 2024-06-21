<?php
    $title = $_GET["title"];

    $database = "ProjectPortal";
    $url = "localhost";
    $usrname = "root";
    $password = "";
    
    $conn = new mysqli($url, $usrname, $password, $database);
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM ProjectList WHERE Title='$title'";
    $res = $conn->query($sql);
    if($res->num_rows > 0){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>