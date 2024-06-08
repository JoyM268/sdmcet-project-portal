function showFilters(){
    var sorting = document.getElementById("sorting");
    var filterImg = document.getElementById("filter-img");
    var semesterSection = document.getElementById("semester-list");
    var memCount = document.getElementById("member-count");
    var searchBox = document.getElementById("project-title");
    var filterSection = document.getElementById("filter-section");  
    if(!filterImg.classList.contains("rotate")){
        filterImg.classList.add("rotate"); 
        filterSection.style.display = "block";
        searchBox.value = "";

    }else{
        filterImg.classList.remove("rotate");
        filterSection.style.display = "none";
        semesterSection.style.display = "none";
        memCount.style.display = "none";
        sorting.style.display = "none";
        searchBox.value = "";
    }
}

function showSemester(){
    var semesterSection = document.getElementById("semester-list");
    var filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    semesterSection.style.display = "block";
}

function setNone(){
    loadList();
    showFilters();
}

function showMemCount(){
    var memCount = document.getElementById("member-count");
    var filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    memCount.style.display = "block";
}

function showSortingOptions(){
    var sorting = document.getElementById("sorting");
    var filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    sorting.style.display = "block";
}

function loadList(){
    var table = document.getElementById("table");
    var xhr = new XMLHttpRequest();
    table.innerHTML = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            table.innerHTML += xhr.responseText;
        }
    }
    xhr.open("GET", "php/list.php", true);
    xhr.send();
}

function searchProject(project){
    var filterSection = document.getElementById("filter-section"); 
    var filterImg = document.getElementById("filter-img");
    var sorting = document.getElementById("sorting");
    var semesterSection = document.getElementById("semester-list");
    var memCount = document.getElementById("member-count");  
    if(filterImg.classList.contains("rotate")){
        filterImg.classList.remove("rotate");
        filterSection.style.display = "none";
        semesterSection.style.display = "none";
        memCount.style.display = "none";
        sorting.style.display = "none";
    }
    var table = document.getElementById("table");
    var str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    if(project.trim() == ""){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                str += xhr.responseText;
                table.innerHTML = str;
            }
        }
        xhr.open("GET", "php/list.php", true);
        xhr.send();
    }else{
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                str += xhr.responseText;
                table.innerHTML = str;
            }
        }
        xhr.open("GET", "php/search.php?title=" + project.trim().toLowerCase(), true);
        xhr.send();
    }    
}

function sortAscending(){
    showFilters();
    var table = document.getElementById("table");
    var str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            str += xhr.responseText;
            table.innerHTML = str;
        }
    }
    xhr.open("GET", "php/sort.php?asc=true", true);
    xhr.send();
}

function sortDescending(){
    showFilters();
    var table = document.getElementById("table");
    var str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            str += xhr.responseText;
            table.innerHTML = str;
        }
    }
    xhr.open("GET", "php/sort.php?asc=false", true);
    xhr.send();
}

function searchSem(sem){
    showFilters();
    var table = document.getElementById("table");
    var xhr = new XMLHttpRequest();
    var str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            str += xhr.responseText;
            table.innerHTML = str;
        }
    }
    xhr.open("GET", "php/semester.php?sem=" + sem, true);
    xhr.send();
}

function searchMem(memCount){
    showFilters();
    var table = document.getElementById("table");
    var xhr = new XMLHttpRequest();
    var str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            str += xhr.responseText;
            table.innerHTML = str;
        }
    }
    xhr.open("GET", "php/members.php?memCount=" + memCount, true);
    xhr.send();
}