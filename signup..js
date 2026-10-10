import { auth } from "./firebase.js";
import {createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithPopup, 
    GoogleAuthProvider} from  "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

    let notification = document.getElementById("notification")
function showNotification(message, type){
    notification.textContent = message;
    notification.style.display = "block";

    if(type === "success"){
        notification.style.backgroundColor = "#dcfce7";
        notification.style.color = "#166534";
    }else if(type === "error"){
        notification.style.backgroundColor = "#fee2e2";
        notification.style.color ="#991b1b";
    }
    setTimeout(function(){
        notification.style.display = "none"
    }, 4000)
}

let signUp = document.getElementById("signup-form");
let passwordMessage = document.getElementById("password-message");
let emailMessage = document.getElementById("email-message");
let nameMessage = document.getElementById("name-message");


signUp.addEventListener('submit',function(event){
    event.preventDefault();
    let inputName = document.getElementById("student-name").value;
    let inputEmail = document.getElementById("student-email").value;
    let inputPassword = document.getElementById("student-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

     if(inputName === ""){
   nameMessage.textContent = "please enter your name";
        return;
    }
    nameMessage.textContent = ""

    if(!inputEmail.includes("@") || !inputEmail.includes(".")){
        emailMessage.textContent = "please enter a valid email";
        return;
    }
    emailMessage.textContent = "";
    
    if(inputPassword !== confirmPassword){
        passwordMessage.textContent = "password do not match";
        return;
    }
    passwordMessage.textContent = "";

    createUserWithEmailAndPassword(auth, inputEmail,inputPassword)
    .then(function(userCredential){
        return sendEmailVerification(userCredential.user);
    })

    .then(function(){
        showNotification("account created successfully!please check your email to verify your account","success");
        
    })
    .catch(function(error){
        showNotification(error.message,"error")
    })

});
let googleSignup = document.getElementById("goole-signup");
let provider = new GoogleAuthProvider();

googleSignup.addEventListener('click',function(){
    signInWithPopup(auth,provider)
    .then(function(result){
        window.location.href = "dashboard.html"
    })
    .catch(function(error){
        showNotification(error.message,"error")
    })
});