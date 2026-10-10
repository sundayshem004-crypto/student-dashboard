import { auth } from "./firebase.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
let dashboardContent = document.getElementById("dashboard-content");

onAuthStateChanged(auth,function(user){
    if(user){
        if(user.emailVerified){
        console.log("email is verified")
        dashboardContent.hidden = false
    }else{
        window.location.href = "index.html"
    }
    }else{
         window.location.href = "index.html"
    }
})   
