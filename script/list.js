var title = [];
var description = [];
var member = [];
var semester = [];
var link = [];
var email = [];

function storeInArray(obj, arr){
    for(let i = 0; i < obj.length; i++){
        arr.push(obj[i].innerText);
    }
}

function storeData(){
    let titles = document.getElementsByClassName("title");
    let descriptions = document.getElementsByClassName("description");
    let members = document.getElementsByClassName("members");
    let semesters = document.getElementsByClassName("semester");
    let links = document.getElementsByClassName("link");
    let emails = document.getElementsByClassName("email");
    storeInArray(titles, title);
    storeInArray(descriptions, description);
    storeInArray(members, member);
    storeInArray(semesters, semester);
    storeInArray(links, link);
    storeInArray(emails, email);
}

function searchProject(){
    let searchPrompt = document.getElementById("project-title").value;
    let table = document.getElementById("table");
    let str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    if(searchPrompt == ""){
        for(let i = 1; i < title.length; i++){
            str += '<tr><td class="title">' + title[i] + '</td><td class="description">' + description[i] + '</td><td class="members">' + member[i] + '</td><td class="semester">' + semester[i] + '</td><td class="link"><a href="' + link[i] + '">' + link[i] + '</a></td><td class="email">' + email[i] + '</td></tr>';
        }
    }else{
        let found = false;    
        let exp = new RegExp("^"+searchPrompt.toLowerCase());
        for(let i = 1; i < title.length; i++){
            if(title[i].trim().toLowerCase().match(exp)){
                str += '<tr><td class="title">' + title[i] + '</td><td class="description">' + description[i] + '</td><td class="members">' + member[i] + '</td><td class="semester">' + semester[i] + '</td><td class="link"><a href="' + link[i] + '">' + link[i] + '</a></td><td class="email">' + email[i] + '</td></tr>';
                found = true;
            }
        }
        if(found === false){
            str += '<tr><td class="not-found" colspan="6">Project not Found.</td></tr>'
        }
    }
    table.innerHTML = str;
}

function showFilters(){
    let sorting = document.getElementById("sorting");
    let filterImg = document.getElementById("filter-img");
    let semesterSection = document.getElementById("semester-list");
    let memCount = document.getElementById("member-count");
    let filterSection = document.getElementById("filter-section");  
    if(!filterImg.classList.contains("rotate")){
        filterImg.classList.add("rotate"); 
        filterSection.style.display = "block";

    }else{
        filterImg.classList.remove("rotate");
        filterSection.style.display = "none";
        semesterSection.style.display = "none";
        memCount.style.display = "none";
        sorting.style.display = "none";
    }
}

function showSemester(){
    let semesterSection = document.getElementById("semester-list");
    let filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    semesterSection.style.display = "block";
}

function searchSem(obj){
    let sem = obj.innerText;
    let table = document.getElementById("table");
    let found = false;
    showFilters();
    let str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    for(let i = 1; i < semester.length; i++){
        if(semester[i] === sem){
            str += '<tr><td class="title">' + title[i] + '</td><td class="description">' + description[i] + '</td><td class="members">' + member[i] + '</td><td class="semester">' + semester[i] + '</td><td class="link"><a href="' + link[i] + '">' + link[i] + '</a></td><td class="email">' + email[i] + '</td></tr>';
            found = true
        }
    }
    if(found === false){
        str += '<tr><td class="not-found" colspan="6">Project not Found.</td></tr>';
    }
    table.innerHTML = str;
}

function setNone(){
    searchProject();
    showFilters();
}

function showMemCount(){
    let memCount = document.getElementById("member-count");
    let filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    memCount.style.display = "block";
}

function searchMem(obj){
    let memCount = obj.innerText;
    let table = document.getElementById("table");
    let found = false;
    showFilters();
    let str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    for(let i = 1; i < semester.length; i++){
        let nameCount = member[i].split(", ").length;
        if(nameCount == memCount){
            str += '<tr><td class="title">' + title[i] + '</td><td class="description">' + description[i] + '</td><td class="members">' + member[i] + '</td><td class="semester">' + semester[i] + '</td><td class="link"><a href="' + link[i] + '">' + link[i] + '</a></td><td class="email">' + email[i] + '</td></tr>';
            found = true;
        }
    }
    if(found === false){
        str += '<tr><td class="not-found" colspan="6">Project not Found.</td></tr>';
    }
    table.innerHTML = str;
}

function showSortingOptions(){
    let sorting = document.getElementById("sorting");
    let filterSection = document.getElementById("filter-section");  
    filterSection.style.display = "none";
    sorting.style.display = "block";
}

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function sortAscending(){
    let titleClone = title.slice(1);
    let descClone = description.slice(1);
    let memClone = member.slice(1);
    let semClone = semester.slice(1);
    let linkClone = link.slice(1);
    let emailClone = email.slice(1);
    for(let i = 0; i < titleClone.length - 1; i++){
        for(let j = 0; j < titleClone.length - i - 1; j++){
            if(titleClone[j].toLowerCase().localeCompare(titleClone[j + 1].toLowerCase()) > 0){
                swap(titleClone, j, j + 1);
                swap(descClone, j, j + 1);
                swap(memClone, j, j + 1);
                swap(semClone, j, j + 1);
                swap(linkClone, j, j + 1);
                swap(emailClone, j, j + 1);
            }
        }
    }
    showFilters();
    let str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    for(let i = 0; i < titleClone.length; i++){
        str += '<tr><td class="title">' + titleClone[i] + '</td><td class="description">' + descClone[i] + '</td><td class="members">' + semClone[i] + '</td><td class="semester">' + semClone[i] + '</td><td class="link"><a href="' + linkClone[i] + '">' + linkClone[i] + '</a></td><td class="email">' + emailClone[i] + '</td></tr>';
    }
    let table = document.getElementById("table");
    table.innerHTML = str;
}

function sortDescending(){
    let titleClone = title.slice(1);
    let descClone = description.slice(1);
    let memClone = member.slice(1);
    let semClone = semester.slice(1);
    let linkClone = link.slice(1);
    let emailClone = email.slice(1);
    for(let i = 0; i < titleClone.length - 1; i++){
        for(let j = 0; j < titleClone.length - i - 1; j++){
            if(titleClone[j].toLowerCase().localeCompare(titleClone[j + 1].toLowerCase()) < 0){
                swap(titleClone, j, j + 1);
                swap(descClone, j, j + 1);
                swap(memClone, j, j + 1);
                swap(semClone, j, j + 1);
                swap(linkClone, j, j + 1);
                swap(emailClone, j, j + 1);
            }
        }
    }
    showFilters();
    let str = '<tr><th class="title">Title</th><th class="description">Description</th><th class="members">Members</th><th class="semester">Semester</th><th class="link">Link</th><th class="email">E-mail</th></tr>';
    for(let i = 0; i < titleClone.length; i++){
        str += '<tr><td class="title">' + titleClone[i] + '</td><td class="description">' + descClone[i] + '</td><td class="members">' + semClone[i] + '</td><td class="semester">' + semClone[i] + '</td><td class="link"><a href="' + linkClone[i] + '">' + linkClone[i] + '</a></td><td class="email">' + emailClone[i] + '</td></tr>';
    }
    let table = document.getElementById("table");
    table.innerHTML = str;
}