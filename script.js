'use strict'

let forRegistration = document.getElementById('form__reg');
let password1 = document.getElementById('pass1').value;
let password2 = document.getElementById('pass2').value;
let agree = document.getElementById('agree').checked;
let age = false;


forRegistration.addEventListener('submit', function(event){
    event.preventDefault();

    let form = event.target

    let errors = {};

    let usernameField = document.getElementById('username').value;

    if ( usernameField.length < 5 ) {
        errors.username = 'Username field is invalid ';
    }

    if ( usernameField == "") {
        errors.username = "Username Can Not Be empty";
    }

    if ( password1 == "" ){
        errors.mypassword = " password field is invalid ";
    }
    if (password1 !=  password2){
        errors.mypassword2 = "Password do not match"; 
    }

    if ( !agree ){
        errors.agree = " You Must Agree Our Terms And Conditions";
    }
    
    form.querySelectorAll('age').forEach(item => {
        if (item.checked){
            age = true;
        }
    })

    if (!age){
        errors.age = " Please Select Your Age ";
    }

    console.log(errors);

});

// let errors = {

//     username = 'Username field is invalid';
//     pass1 = " password field is invalid "
//     mypassword2 = "Password do not match"; 
//     agree = " You Must Agree Our Terms And Conditions";
//     errors.age = " Please Select Your Age ";
// }
