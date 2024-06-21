function showDelete(){
    var op1 = document.getElementById("op-update");
    var op2 = document.getElementById("op-delete");
    var arrow1 = document.getElementById("arrowupdate");
    var arrow2 = document.getElementById("arrowdelete");
    var log = document.getElementById("log-container");
    if(op2.classList.contains("hide-op-delete")){
        op2.classList.remove("hide-op-delete");
        op2.classList.add("show-op-delete");
        op1.classList.remove("show-op-update");
        op1.classList.add("hide-op-update");
        arrow1.classList.remove("rotate");
        arrow2.classList.add("rotate");
        log.style.display = "none";
    }else{
        op2.classList.remove("show-op-delete");
        op2.classList.add("hide-op-delete");
        arrow2.classList.remove("rotate");
        log.style.display = "block";
    }
}

function showUpdate(){
    var op1 = document.getElementById("op-update");
    var op2 = document.getElementById("op-delete");
    var log = document.getElementById("log-container");
    var arrow1 = document.getElementById("arrowupdate");
    var arrow2 = document.getElementById("arrowdelete");
    if(op1.classList.contains("hide-op-update")){
        op2.classList.remove("show-op-delete");
        op2.classList.add("hide-op-delete");
        op1.classList.remove("hide-op-update");
        op1.classList.add("show-op-update");
        arrow2.classList.remove("rotate");
        arrow1.classList.add("rotate");
        log.style.display = "none";
    }else{
        op1.classList.remove("show-op-update");
        op1.classList.add("hide-op-update");
        arrow1.classList.remove("rotate");
        log.style.display = "block";
    }
}

function deleteProject(){
    var title = document.getElementById("protitle").value.trim();
    var titlePattern = /^[a-zA-Z0-9-\s]+$/;
    if(title == ""){
        alert("Please provide the project title.");
        return;
    }
    
    if(!title.match(titlePattern)){
        alert("The project title can only include letters, numbers, spaces, and hyphens.");
        return;
    }

    var xhrCheck = new XMLHttpRequest();
    xhrCheck.onreadystatechange = function(){
        if(xhrCheck.readyState == 4 && xhrCheck.status == 200){
            if(xhrCheck.responseText == "true"){
                if(!confirm("Are you sure you want to delete the project details of '" + title + "'?")){
                    return;
                }
                var xhrDelete = new XMLHttpRequest();
                xhrDelete.onreadystatechange = function(){
                    if(xhrDelete.status == 200 && xhrDelete.readyState == 4){
                        if(xhrDelete.responseText == "true"){
                            alert("The project details of '" + title + "' were successfully deleted.");
                        }else{
                            alert("Failed to delete the project details of '" + title + "'. Please try again later.");
                        }
                    }
                }
                xhrDelete.open("GET", "delete.php?title=" + title, true);
                xhrDelete.send();
            }else{
                alert("The project '" + title + "' does not exist. Please check the entered title.");
            }
        }
    }
    xhrCheck.open("GET", "check.php?title=" + title, true);
    xhrCheck.send();
}

function isValidURL(url){
    try{
        new URL(url);
        return true;
    }catch(error){
        return false;   
    }
}


function updateProject() {
    var title = document.getElementById("title").value.trim();
    var link = document.getElementById("link").value.trim();
    var email = document.getElementById("email").value.trim();
    var memCount = document.getElementById("count").value.trim();
    var memNames = document.getElementById("names").value.trim();
    var sem = document.getElementById("sem").value.trim();
    var description = document.getElementById("description").value.trim();

    var titlePattern = /^[a-zA-Z0-9-\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var memCountPattern = /^(10|[1-9])$/;
    var memNamesPattern = /^[A-Za-z,\s]+$/;
    var semPattern = /^[1-8]$/;
    var descPattern = /[A-Za-z]/;

    if (title == "") {
        alert("Please provide the project title.");
        return;
    }

    if (!title.match(titlePattern)) {
        alert("The project title can only include letters, numbers, spaces, and hyphens.");
        return;
    }

    if (!isValidURL(link) && link != "") {
        alert("Please enter a valid URL.");
        return;
    }

    if (!email.match(emailPattern) && email != "") {
        alert("Please enter a valid email address.");
        return;
    }

    if (!memCount.match(memCountPattern) && memCount != "") {
        alert("The member count should be a number between 1 and 10.");
        return;
    }

    if (!memNames.match(memNamesPattern) && memNames != "") {
        alert("Member names should only contain letters and be separated by commas.");
        return;
    }

    if (!sem.match(semPattern) && sem != "") {
        alert("Semester should be a number between 1 and 8.");
        return;
    }

    var xhrCheck = new XMLHttpRequest();
    xhrCheck.onreadystatechange = function () {
        if (xhrCheck.readyState == 4 && xhrCheck.status == 200) {
            if (xhrCheck.responseText == "true") {
                if (!confirm("Are you sure you want to update the project details of '" + title + "'?")) {
                    return;
                }

                var str = "";
                if (link != "") {
                    str += "link=" + link;
                }
                if (email != "") {
                    str += (str == "" ? "" : "&") + "email=" + email;
                }
                if (memCount != "") {
                    str += (str == "" ? "" : "&") + "memCount=" + memCount;
                }
                if (memNames != "") {
                    str += (str == "" ? "" : "&") + "names=" + memNames;
                }
                if (sem != "") {
                    str += (str == "" ? "" : "&") + "sem=" + sem;
                }
                if (description != "") {
                    str += (str == "" ? "" : "&") + "desc=" + description;
                }

                var xhrUpdate = new XMLHttpRequest();
                xhrUpdate.onreadystatechange = function () {
                    if (xhrUpdate.readyState == 4 && xhrUpdate.status == 200) {
                        if (xhrUpdate.responseText == "true") {
                            alert("The project details of '" + title + "' were successfully updated.");
                        } else {
                            alert("Failed to update the project details of '" + title + "'. Please try again later.");
                        }
                    }
                };
                xhrUpdate.open("GET", "update.php?title=" + title + "&" + str, true);
                xhrUpdate.send();
            } else {
                alert("The project '" + title + "' does not exist. Please check the entered title.");
            }
        }
    };
    xhrCheck.open("GET", "check.php?title=" + title, true);
    xhrCheck.send();
}