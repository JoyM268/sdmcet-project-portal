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

    $sql = "DELETE FROM ProjectList WHERE Title='$title'";
    if($conn->query($sql) === TRUE){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>