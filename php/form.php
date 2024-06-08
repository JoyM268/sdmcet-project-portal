<?php
    $title = $_POST["title"];
    $link = $_POST["link"];
    $email = $_POST["email"];
    $count = $_POST["count"];
    $names = $_POST["names"];
    $sem = $_POST["sem"];
    $description = $_POST["description"];

    $servername = "localhost";
    $usrname = "root";
    $password = "";
    $database = "ProjectPortal";

    $conn = new mysqli($servername, $usrname, $password, $database);

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "insert into ProjectList (Title, Link, Email, MemberCount, MemberNames, Semester, Description) values ('$title', '$link', '$email', $count, '$names', $sem, '$description')";
    if($conn->query($sql) === TRUE){
        header('Location: ../formsubmitted.html');
    }else{
        header('Location: ../formfailed.html');
    }

    $conn->close();
?>