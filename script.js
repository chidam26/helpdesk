var detailsArray = [];

const pattern = {
    aadhar: /^\d{12}$/,
    mobile: /^\d{10}$/,
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/
}

function register() {

    //values
    let newName = document.getElementById('name').value;
    let newAadhar = document.getElementById('aadhar').value;
    let newAddress = document.getElementById('address').value;
    let newMobile = document.getElementById('mobile').value;
    let newEmail = document.getElementById('email').value;
    let newUsername = document.getElementById('username').value;
    let newPassword = document.getElementById('passtxt').value;
    let newConfirmpass = document.getElementById('cpasstxt').value;
    
    //error display
    let errName = document.getElementById('alert1');
    let errAadhar = document.getElementById('alert2');
    let errAddress = document.getElementById('alert3');
    let errMobile = document.getElementById('alert4');
    let errEmail = document.getElementById('alert5');
    let errUsername = document.getElementById('alert6');
    let errPassword = document.getElementById('alert7');
    let errCpassword = document.getElementById('alert8');

/*REGEX VALIDATION*/
    //name
    if (newName == "") {
        errName.textContent = "Name cannot be empty. Kindly fill";
        newName.focus()
        return false;
    }
    else {
        errName.textContent = "";
    }

    //Aadhar
    if (pattern.aadhar.test(newAadhar)) {
        errAadhar.textContent = "";
    }
    else {
        errAadhar.textContent = 'Enter a valid Aadhar number';
        newAadhar.focus()
        return false;
    }

    //Address
    if(newAddress==""){
        errAddress.textContent="Address cannot be empty. Kindly fill ";
        newAddress.focus();
        return false;
    }
    else{
        errAddress.textContent="";
    }

    //Mobile
    if(newMobile==""){
        errMobile.textContent="Kindly fill the phone number";
        newMobile.focus();
        return false;
    }
    else if(pattern.mobile.test(newMobile)){
        errMobile.textContent="";
    }
    else{
        errMobile.textContent="Enter a valid 10 digit number";
        newMobile.focus();
        return false;
    }
    
    //Email
    if(newEmail==""){
        errEmail.textContent="Email cannot be empty. Kindly fill ";
        newEmail.focus();
        return false;
    }
    else if(pattern.email.test(newEmail)){
        errEmail.textContent="";
    }
    else{
        errEmail.textContent="Enter a vaild Email";
        newEmail.focus();
        return false;
    }

    //Username
    if(pattern.username.test(newUsername)){
        errUsername.textContent="";
    }
    else{
        errUsername.textContent="Atleast 8 to 15 Character Required";
        newUsername.focus();
        return false;
    }

    //Password
    if(newPassword==""){
        errPassword.textContent="Kindly fill the Password";
        newPassword.focus();
        return false;
    }
    else if(pattern.password.test(newPassword)){
        errPassword.textContent="";
    }
    else{
        errPassword.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number & any Symbols";
        newPassword.focus();
        return false;
    }

    //Confirm password
    if(newConfirmpass==""){
        errCpassword.textContent="Kindly confirm your password";
        newConfirmpass.focus();
        return false;
    }
    else if(newConfirmpass==newPassword){
        errCpassword.textContent="";

    }else{
        errCpassword.textContent="Password and confirm password must be same";
        newConfirmpass.focus();
        return false;
    }

/*DATA STORE IN LOCAL STORAGE*/
let userDetails = {
    name: newName,
    aadhar: newAadhar,
    address: newAddress,
    mobile: newMobile,
    emailid: newEmail,
    username: newUsername,
    password: newPassword
};

for(let i = 0; i< detailsArray.length; i++) {
    if (detailsArray[i].username === newUsername) {
        document.getElementById("alert6").innerText = "Username already exists!!";
        return;
    }
}
        detailsArray.push(userDetails);
        localStorage.userRecord = JSON.stringify(detailsArray);
        alert('Registered Successfully');
        window.location = 'http://127.0.0.1:5500/index.html';

document.getElementById('regForm').reset();
// window.location = "tickets.html";

}

function init() {
    if(localStorage.userRecord) {
        detailsArray = JSON.parse(localStorage.userRecord);
        /**for(let i = 0; i< detailsArray.length; i++){
            let fullName = detailsArray[i].fullname;
            let userName = detailsArray[i].username;
            let userEmail = detailsArray[i].useremail;
            let userPassword = detailsArray[i].userpassword;
        }**/
    }
}

//LOGIN PAGE

function login(){

    let loginUserName = document.getElementById('usrLogin').value;
    let loginPassword = document.getElementById('pwdLogin').value;

    for (let i = 0; i < detailsArray.length; i++) {

        if(detailsArray[i].username === loginUserName && detailsArray[i].password === loginPassword){

        window.location = "ticket.html";
        }
        else{
        document.getElementById("loginerr").innerHTML = "Invalid Username or Password";
        }
    }

}