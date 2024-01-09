
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const password_msg = document.getElementById('password_msg');
const create_acc_but = document.getElementById('create-acc-button');

// assign initial state for password and password message
// password.classList.add('error');
// password2.classList.add('error');
password_msg.textContent = '* passwords do not match';
password_msg.style.color = 'red';


function checkName(name){
    var regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}

function checkEmail(email){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function checkPhoneNumber(phoneNumber){
    var regex = /^\+?([0-9]{1,3})?[-. (]*([0-9]{1,5})[-. )]*([0-9]{1,5})[-. ]?([0-9]{1,6})$/;
    return regex.test(phoneNumber);
}

function checkPassword(pw1, pw2){
    return pw1 === pw2;
}

create_acc_but.addEventListener('click', () =>{
    let error = false;
    let msg = "please correct errors on those fields:";
    if(!checkName(first_name.value)){
        msg += " First Name";
        error = true;
    }

    if(!checkName(last_name.value)){
        msg += " Last Name";
        error = true;
    }

    if(!checkEmail(email.value)){
        msg += " Email";
        error = true;
    }

    if(!checkPhoneNumber(phone.value)){
        msg += " Phone Number";
        error = true;
    }

    if(!checkPassword(password.value, password2.value)){
        msg += " Password";
        error = true;
        password_msg.textContent = '* passwords do not match';
        password_msg.style.color = 'red';
    }else{
        password_msg.textContent = '';
    }
    error? alert(msg):alert('success');
})