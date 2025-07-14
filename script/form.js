function isValidURL(url){
    try{
        new URL(url);
        return true;
    }catch(error){
        return false;   
    }
}

function formValidation(){
    let title = document.getElementById("title").value.trim();
    let link = document.getElementById("link").value.trim();
    let email = document.getElementById("email").value.trim();
    let memCount = document.getElementById("count").value.trim();
    let memNames = document.getElementById("names").value.trim();
    let sem = document.getElementById("sem").value.trim();
    let description = document.getElementById("description").value.trim();

    let titlePattern = /^[a-zA-Z0-9-\s]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let memCountPattern = /^(10|[1-9])$/;
    let memNamesPattern = /^[A-Za-z,\s]+$/;
    let semPattern = /^[1-8]$/;
    let descPattern = /[A-Za-z]/

    if(title == ""){
        alert("Please provide a title for the project.");
        return false;
    }else if(!title.match(titlePattern)){
        alert("The project title can only include letters, numbers, space and hyphens.");
        return false;
    }
    
    if(!isValidURL(link) && link != ""){
        alert("Please enter a valid URL.");
        return false;
    }
    
    if(email == ""){
        alert("Please enter your email address.");
        return false;
    }else if(!email.match(emailPattern)){
        alert("Please enter a valid email address.");
        return false;
    }
    
    if(memCount == ""){
        alert("Please provide the member count.");
        return false;
    }else if(!memCount.match(memCountPattern)){
        alert("The member count should be a number between 1 and 10.");
        return false;
    }
    
    if(memNames == ""){
        alert("Please provide the names of the members.");
        return false;
    }else if(!memNames.match(memNamesPattern)){
        alert("Member names should only contain letters and be separated by commas.");
        return false;    
    }
    
    if(sem == ""){
        alert("Please provide the semester.");
        return false;  
    }else if(!sem.match(semPattern)){
        alert("Semester should be a number between 1 and 8.");
        return false;
    }
    
    if(!description.match(descPattern)){
        alert("A Project description is required");
        return false;
    }

    return true;
}