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

    $updates = [];
    if(isset($_GET['link'])){
        array_push($updates, "Link='" . $_GET['link'] . "'");
    }
    if(isset($_GET['email'])){
        array_push($updates, "Email='" . $_GET['email'] . "'");
    }
    if(isset($_GET['memCount'])){
        array_push($updates, "MemberCount=" . $_GET['memCount']);
    }
    if(isset($_GET['names'])){
        array_push($updates, "MemberNames='" . $_GET['names'] . "'");
    }
    if(isset($_GET['sem'])){
        array_push($updates, "Semester=" . $_GET['sem']);
    }
    if(isset($_GET['desc'])){
        array_push($updates, "Description='" . $_GET['desc'] . "'");
    }

    $sql = "UPDATE ProjectList SET " . implode(", ", $updates) . " WHERE Title='$title'";

    if($conn->query($sql) === TRUE){
        echo "true";
    }else{
        echo "false";
    }
    $conn->close();
?>
