function switchForm() {
    document.getElementById("loginForm").classList.toggle("active");
    document.getElementById("registerForm").classList.toggle("active");
}
 
// Demo Submit
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form Submitted (Backend not connected)");
    });
});

//-------------------------User Authentication-------------------//


// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
// import {
//     getAuth,
//     createUserWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyA8DIvSCEDnYWzBeic7Dx25bkUcfhBlx3A",
//     authDomain: "personal-ai-clone-ibrahim-sir.firebaseapp.com",
//     projectId: "personal-ai-clone-ibrahim-sir",
//     storageBucket: "personal-ai-clone-ibrahim-sir.firebasestorage.app",
//     messagingSenderId: "74129868246",
//     appId: "1:74129868246:web:1472d8571943b9876e9077"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);



// function signUp(){

// }
