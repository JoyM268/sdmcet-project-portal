<?php
    $fName = $_POST["fname"];
    $lName = $_POST["lname"];
    $email = $_POST["email"];
    $phno = $_POST["phno"];
    $message = $_POST["message"];

    $database = "ProjectPortal";
    $url = "localhost";
    $usrname = "root";
    $password = "";
    
    $conn = new mysqli($url, $usrname, $password, $database);
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO ContactData (First_Name, Last_Name, Email, Phone_No, Message) VALUES ('$fName', '$lName', '$email', $phno, '$message')";
    if($conn->query($sql) == TRUE){
        echo "The message was submitted successfully";
    }else{
        echo "The message submission failed";
    }

    $conn->close();
?>