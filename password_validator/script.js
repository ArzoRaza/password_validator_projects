const form = document.querySelector("form"),
    emailSection = form.querySelector(".email_sec"),
    emailInput = emailSection.querySelector(".email"),
    passField = form.querySelector("create_password"),
    passInput = passField.querySelector("password"),
    cPassField = form.querySelector("confirm_password"),
    cPassInput = cPassField.querySelector("cPassword");

// Emaill validation
function checkEmail(){
    const emaiPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!mailInput.value.match(pattern)){
        return emailField.classList.add("invalid");  // adding invalid class do not mathed with email pattern 
    }
    emailField.classList.remove("invalid");
}


// Calling Function on form submit 
form.addEventListener("submit", (e) => {
    e.addEventListener(); // preventing form submitting 
});
