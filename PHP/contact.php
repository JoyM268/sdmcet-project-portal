<?php
$firstName = $_POST["fname"];
$lastName = $_POST["lname"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .success-message {
            text-align: center;
            background-color: #4caf50;
            color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success-message">SUCCESS</div>
        <p>Your details have been received:</p>
        <ul>
            <li><strong>First Name:</strong> <?php echo $firstName; ?></li>
            <li><strong>Last Name:</strong> <?php echo $lastName; ?></li>
        </ul>
    </div>
</body>
</html>