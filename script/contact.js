function validatePage()
{
    let firstName = document.querySelector("#fname").value;
    let lastName = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let phno = document.querySelector("#phno").value;
    let message = document.querySelector("#message").value;
    
    let namePattern = /^[a-zA-Z]+$/;
    let emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]+$/;
    let messagePattern = /[a-zA-Z]/;

    if(!firstName.match(namePattern)){
        alert("The first name should only contain alphabets.");
        return false;
    }

    if(!lastName.match(namePattern)){
        alert("The last name should only contain alphabets.");
        return false;
    }

    if(!email.match(emailPattern)){
        alert("Enter a valid Email");
        return false;
    }

    if(!phno.match(phonePattern)){
        alert("Enter a valid phone number");
        return false;
    }
    
    if(!message.match(messagePattern)){
        alert("Message is required");
        return false;
    }
    return true;
}