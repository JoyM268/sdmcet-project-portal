function isValidURL(url){
    try{
        new URL(url);
        return true;
    }catch(error){
        return false;   
    }
}

function formValidation(){
    let title = document.getElementById("title").value;
    let link = document.getElementById("link").value;
    let email = document.getElementById("email").value;
    let memCount = document.getElementById("count").value;
    let memNames = document.getElementById("names").value;
    let sem = document.getElementById("sem").value;
    let description = document.getElementById("description").value;

    let titlePattern = /^[a-zA-Z0-9]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let memCountPattern = /^(10|[1-9])$/;
    let memNamesPattern = /^[A-Za-z,\s]+$/;
    let semPattern = /^[1-8]$/;
    let descPattern = /[A-Za-z]/

    
    if(!title.match(titlePattern)){
        alert("The title should only contain letters and numbers.");
        return false;
    }else if(!isValidURL(link)){
        alert("Enter a valid URL");
        return false;
    }else if(!email.match(emailPattern)){
        alert("Enter a valid Email");
        return false;
    }else if(!memCount.match(memCountPattern)){
        alert("The memeber count should be between 1 - 10");
        return false;
    }else if(!memNames.match(memNamesPattern)){
        alert("Member names can only contain letters, seperated by comma.");
        return false;
    }else if(!sem.match(semPattern)){
        alert("Semester should be between 1 to 8");
        return false;
    }else if(!description.match(descPattern)){
        alert("Project description is required");
        return false;
    }
    return true;
}