import { auth } from "./firebase.js";
import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

let notification = document.getElementById("notification")
function showNotification(message, type){
    notification.textContent = message;
    notification.style.display = "block";

    if(type === "success"){
        notification.style.backgroundColor = "#dcfce7";
        notification.style.color = "#166534";
    }else if(type === "error"){
        notification.style.backgroundColor = "#166534";
        notification.style.color ="#991b1b";
    }
    setTimeout(function(){
        notification.style.display = "none"
    }, 4000)
}
let loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit',function(event){
    event.preventDefault();

    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    .then(function(userCredential){
        if(userCredential.user.emailVerified){
          window.location.href = "dashboard.html"
        }else{
            showNotification("verify your email before continuing.")
        }

    })
    .catch(function(error){
        console.log(error.code)
        showNotification("Incorrect password or email","error")
        
    })

})