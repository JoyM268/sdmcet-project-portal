validatePage = ()=>{
    let firstName = document.querySelector("#fname").value;
    let lastName = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let phno = document.querySelector("#phno").value;
    let message = document.querySelector("#message").value;
    
    let namePattern = /^[a-zA-Z]+$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^[0-9]+$/;
    let messagePattern = /[a-zA-Z0-9]/;

    if(!firstName.match(namePattern)){
        alert("Follow the correct format for name");
        return false;
    }
    if(!lastName.match(namePattern)){
        alert("Follow the correct format for lastname");
        return false;
    }
    if(!email.match(emailPattern)){
        alert("Follow the correct format for email");
        return false;
    }
    if(!phno.match(phonePattern)){
        alert("Follow the correct format for phone no");
        return false;
    }
    if(!message.match(messagePattern)){
        alert("Message can't be empty");
        return false;
    }
    return true;
}