<?php
    session_start();
    if(!isset($_SESSION['user'])){
        header('Location: ../illegal.html');
    }else{
        $user = $_SESSION['user'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="../styles/admin.css">
    <link rel="stylesheet" href="../styles/header.css">    
    <link rel="stylesheet" href="../styles/fonts.css">
    <link rel="stylesheet" href="../styles/general.css">
    <link rel="icon" href="../assets/Icon/icon.jpg">
    <script src="../script/header.js" defer></script>
    <script src="../script/admin.js" defer></script>
</head>
<body>
    <header class="header">
        <a href="../index.html" class="left-section">
            <img id="logo" src="../assets/Header/logo.png">
            <span class="name">Project Portal</span>
        </a>
        <div class="right-section">
            <nav class="navigation">
                <a href="../index.html">Home</a>
                <a href="../contact.html">Contact</a>
                <a href="logout.php">Logout</a>
            </nav>
            <a class="menu" id="menu-click" onclick="openSlideMenu()">
                <img class="menu-icon" src="../assets/Header/menu-icon.png">
            </a>
            <a class="menu" id="close-click" onclick="closeSlideMenu()">
                <img class="close-icon" src="../assets/Header/close-icon.png">
            </a>    
        </div>
    </header>   
    <div class="menu-list hide" id="menu-drop">
        <a href="../index.html">Home</a>
        <a href="../contact.html">Contact</a>
        <a href="../form.html">Submit Project</a>
        <a href="../list.html">Project List</a>
        <a href="logout.php">Logout</a>
        <a href="../about.html">About Us</a>
    </div>
    <main class="main">
        <div class="left-main">
            <div>
                <?php echo "<span class='welcome'>Welcome, $user</span>" ?>
            </div>
            <a href="logout.php" class="logout">Logout</a>
            <div>
                <div>
                    <div class="operation-list">
                        <div class="operation" onclick="showDelete()">
                            <div>Delete Project</div>
                            <div><img src="../assets/Admin/arrow.svg" class="arrow" id="arrowdelete"></div>
                        </div>
                        <div class="perform-delete hide-op-delete" id="op-delete">
                            <div class="input-container">
                                <label class="required" for="title">Project Title</label>
                                <input id="protitle" class="input-box" type="text" name="protitle" placeholder="Project Title">
                            </div>
                            <input type="button" class="button" value="Delete Project" onclick="deleteProject()">
                        </div>
                        
                        <div class="operation" onclick="showUpdate()">
                            <div>Update Project</div>
                            <div><img src="../assets/Admin/arrow.svg" class="arrow" id="arrowupdate"></div>
                        </div>
                        <form class="perform-update hide-op-update" id="op-update">
                            <div class="input-container">
                                <label class="required" for="title">Project Title</label>
                                <input id="title" class="input-box" type="text" name="title" placeholder="Project Title">
                            </div>
                            <div class="input-container">
                                <label for="link">Project Link</label>
                                <input class="input-box" id="link" type="text" name="link" placeholder="Project Link">
                            </div>
                            <div class="input-container check">
                                <label for="email">Contact Email</label>
                                <input class="input-box" id="email" type="text" name="email" placeholder="E-mail" autocomplete="off">
                            </div>
                            <div class="input-container">
                                <label for="count">Member Count</label>
                                <input  class="input-box" id="count" type="text" name="count" placeholder="Member Count" >
                            </div>
                            <div class="input-container">
                                <label for="names">Member Names</label>
                                <textarea class="input-area names-area" id="names" type="text" name="names" placeholder="Member Names"></textarea>
                            </div>
                            <div class="input-container check">
                                <label for="sem">Semester</label>
                                <input class="input-box" type="text" id="sem" name="sem" placeholder="Semester">
                            </div>
                            <div class="input-container">
                                <label for="description">Project Description</label>
                                <textarea class="input-area" id="description" name="description" placeholder="Description"></textarea>
                            </div>
                            <div class="button-container">
                                <input class="button" type="button" value="Update" onclick="updateProject()">
                                <input class="button" type="reset" value="Clear">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="log-container" id="log-container">
                <div class="container-title">Recent Updates</div>
            </div>
        </div>
        <div class="right-main">
            <div class="feedback-container">
                <div class="container-title">Recent Feedbacks</div>
            </div>
        </div>
    </main>
    <br>
    <br>
</body>
</html>