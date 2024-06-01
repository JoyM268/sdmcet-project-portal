<!-- Project Lists -->
<?php
    $url = "localhost";
    $usrname = "root";
    $pass = "";
    $database = "ProjectPortal";

    $conn = new mysqli($url, $usrname, $pass, $database);

    if($conn->connect_error){
        die("Connection Failed: " . $conn->connect_error);
    }

    $sql = "SELECT Title, Link, Email, MemberNames, Semester, Description FROM ProjectList";

    $result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects List</title>
    <link rel="stylesheet" href="styles/list.css">
    <link rel="icon" href="assets/Icon/icon.jpg">
    <script src="script/header.js" defer></script>
    <script src="script/list.js" defer></script>
</head>
<body onload="storeData()">
    <header class="header">
        <a href="index.html" class="left-section">
            <img id="logo" src="assets/Header/logo.png">
            <span class="name">Project Portal</span>
        </a>
        <div class="right-section">
            <nav class="navigation">
                <a href="index.html">Home</a>
                <a href="contact.html">Contact</a>
                <a href="about.html">About Us</a>
            </nav>
            <a class="menu" id="menu-click" onclick="openSlideMenu()">
                <img class="menu-icon" src="assets/Header/menu-icon.png">
            </a>
            <a class="menu" id="close-click" onclick="closeSlideMenu()">
                <img class="close-icon" src="assets/Header/close-icon.png">
            </a>
        </div>
    </header>
    <div class="menu-list" id="menu-drop">
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="form.html">Submit Project</a>
        <a href="list.php" id="active-menu">Project List</a>
        <a href="about.html">About Us</a>
    </div>
    <main class="main">
        <div class="top-section">
            <div id="back-container" onclick="backButton()">
                <img src="assets/Submit-Form/back-icon.png">
                <span>Back</span>
            </div>
        </div>
        <div class="bottom-section">
            <div id="page-title">
                <span>Project Lists</span>
            </div>
            <div class="search">
                <input type="text" class="search-bar" onkeyup="searchProject()" id="project-title" placeholder="Enter the project title">
                <div class="filter">
                    <button class="filter-icon" onclick="showFilters()"><img id="filter-img" src="assets/Project List/filter-icon.png"></button>
                    <div class="filter-section" id="filter-section">
                        <div class="filter-option none" onclick="setNone()">None</div>
                        <div class="filter-option sem" onclick="showSemester()">Semester</div>
                        <div class="filter-option count" onclick="showMemCount()">Member Count</div>
                        <div class="filter-option sort" onclick="showSortingOptions()">Sort</div>
                    </div>
                    <div class="semester-list" id="semester-list">
                        <div class="filter-option sem-number" onclick="searchSem(this)">1</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">2</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">3</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">4</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">5</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">6</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">7</div>
                        <div class="filter-option sem-number" onclick="searchSem(this)">8</div>
                    </div>
                    <div class="member-count" id="member-count">
                        <div class="filter-option member-number" onclick="searchMem(this)">1</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">2</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">3</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">4</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">5</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">6</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">7</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">8</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">9</div>
                        <div class="filter-option member-number" onclick="searchMem(this)">10</div>
                    </div>
                    <div class="sorting" id="sorting">
                        <div class="filter-option sort-option" onclick="sortAscending()">A to Z</div>
                        <div class="filter-option sort-option" onclick="sortDescending()">Z to A</div>
                    </div>
                </div>
            </div>
            <div class="table-container">
                <table id="table">
                    <tr>
                        <th class="title">Title</th>
                        <th class="description">Description</th>
                        <th class="members">Members</th>
                        <th class="semester">Semester</th>
                        <th class="link">Link</th>
                        <th class="email">E-mail</th>
                    </tr>
                    
                    <?php
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
                </table>
            </div>
        </div>
        <br>
        <br>
    </main>
</body>
</html>
</html>