function loginValidation(){
    let usr = document.getElementById("usr").value.trim();
    let pass = document.getElementById("pass").value.trim();

    let usrPattern = /^[a-zA-Z0-9]+$/;

    if(usr == ""){
        alert("Please enter a username.");
        return false;
    }else if(!usr.match(usrPattern)){
        alert("Username can only contain letters and numbers.");
        return false;
    }

    if(pass == ""){
        alert("Please enter a password.");
        return false;
    }

    return true;
}