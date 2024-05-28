function validatePage()
{
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phno = document.getElementById("phno").value;
    let message = document.getElementById("message").value;
    
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