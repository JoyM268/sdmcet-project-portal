function validatePage()
{
    let firstName = document.getElementById("fname").value.trim();
    let lastName = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phno = document.getElementById("phno").value.trim();
    let message = document.getElementById("message").value.trim();
    
    let namePattern = /^[a-zA-Z]+$/;
    let emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let messagePattern = /[a-zA-Z]/;

    if(firstName == ""){
        alert("Please enter the first name.");
        return false;
    }else if(!firstName.match(namePattern)){
        alert("The first name should only include alphabets.");
        return false;
    }

    if(!lastName.match(namePattern) && lastName != ""){
        alert("The last name should only include alphabets.");
        return false;
    }

    if(email == ""){
        alert("Please enter your email address.");
        return false;
    }else if(!email.match(emailPattern)){
        alert("Please enter a valid email address.");
        return false;
    }

    if(phno == ""){
        alert("Please enter your phone number.");
        return false;
    }else if(!phno.match(phonePattern)){
        alert("Please enter a valid phone number of 10 digits.");
        return false;
    }
    
    if(!message.match(messagePattern)){
        alert("Please enter your message.");
        return false;
    }

    return true;
}