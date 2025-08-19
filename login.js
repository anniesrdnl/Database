function validateForm(){
let user = document.getElementByID("username").value.trim();
let pass = document.getElementByID("password").value.trim();

if (user===""|| pass==="") {
alert ("Both fields are required.");
return false;

}
return true;

}