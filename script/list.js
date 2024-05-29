var title = [];
var description = [];
var member = [];
var semester = [];
var link = [];
var email = [];

function storeInArray(obj, arr){
    for(let i = 0; i < obj.length; i++){
        arr.push(obj[i].innerHTML);
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