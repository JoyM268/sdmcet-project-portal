<?php
    $usr = $_POST["usr"];
    $pass = $_POST["pass"];
    $servername = "localhost";
    $usrname = "root";
    $password = "";
    $database = "ProjectPortal";

    $conn = new mysqli($servername, $usrname, $password, $database);

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT Password FROM ProjectAdmin WHERE User='$usr'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        if($row = $result->fetch_assoc()){
            if($pass == $row["Password"]){
                session_start();
                $_SESSION['user'] = $usr;
                header('Location: admin.php');        
            }else{
                header('Location: ../loginfailed.html');
            }
        }
    }else{
        header('Location: ../loginfailed.html');
    }
    $conn->close();
?>