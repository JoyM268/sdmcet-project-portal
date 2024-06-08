<?php
    $url = "localhost";
    $usrname = "root";
    $pass = "";
    $database = "ProjectPortal";

    $title = $_GET['title'];

    $conn = new mysqli($url, $usrname, $pass, $database);

    if($conn->connect_error){
        die("Connection Failed: " . $conn->connect_error);
    }

    $sql = "SELECT Title, Link, Email, MemberNames, Semester, Description FROM ProjectList WHERE Title LIKE '$title%'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo "<tr>";
            echo "<td class='title'>".$row["Title"]."</td>";
            echo "<td class='description'>".$row["Description"]."</td>";
            echo "<td class='members'>".$row["MemberNames"]."</td>";
            echo "<td class='semester'>".$row["Semester"]."</td>";
            echo "<td class='link'><a href=".$row["Link"].">".$row["Link"]."</a></td>";
            echo "<td class='email'>".$row["Email"]."</td>";
            echo "</tr>";
        }
    }else{
        echo "<tr><td class='not-found' colspan='6'>Project not Found.</td></tr>";
    }

    $conn -> close();
?>