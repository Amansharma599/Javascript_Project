const title = document.querySelector('#title');
const nameField = document.querySelector('#nameField');
const signupBtn = document.querySelector('#signupBtn');
const signinBtn = document.querySelector('#signinBtn');


signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";

}

signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";

}

