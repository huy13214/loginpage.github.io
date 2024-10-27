let mail;
let password;
let remail;
let repassword;
let checkmail;
let checkpassword;
function showpassword(){
    let a = document.getElementById("pass");
        if(a.type == "password"){
            a.type = "text";
            document.getElementById("ps").innerHTML = 'Hide';
        }else{
            a.type = "password";
            document.getElementById("ps").innerHTML = 'Show';
        }
}
function showpasswordsu(){
    let a = document.getElementById("spass");
    let b = document.getElementById("respass");
        if(a.type == "password"){
            a.type = "text";
            b.type = "text";
            document.getElementById("ps2").innerHTML = 'Hide';
        }else{
            a.type = "password";
            b.type = "password";
            document.getElementById("ps2").innerHTML = 'Show';
        }
}
function signup(){
    mail = document.getElementById("semail").value;
    password = document.getElementById("spass").value;
    repassword = document.getElementById("respass").value;
        if(password != repassword){
            alert('Wrong repassword')
        }else{
            alert('Success')
        }
}
function checkforrepass(){
    let a = document.getElementById("spass").value;
    let b = document.getElementById("respass").value;
        if(b != a){
            document.getElementById("respass").style.border = "1.5px solid red";
        }else{
            document.getElementById("respass").style.border = "1.5px solid black";
        }
}
function tosignup(){
    document.getElementById("loginpanel").style.display = "none";
    document.getElementById("signuppanel").style.display = "block";
}
function tosignin(){
    document.getElementById("loginpanel").style.display = "block";
    document.getElementById("signuppanel").style.display = "none";
}
function login(){
    checkmail = document.getElementById("email").value;
    checkpassword = document.getElementById("pass").value;
    if ((checkmail == mail && checkpassword == password)){
            alert("login success");
        }else{
            alert("login failed");
        }
}