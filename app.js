let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

button1.addEventListener("click", function(){
    genPassword();
})

button2.addEventListener("click", function(){
    copyPassword();
})

//Review Crypto 
let password=document.getElementById("password");

function genPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) { 
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("Password").value = password;
}

function copyPassword() {
    let copyText = document.getElementById("Password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value); 
}