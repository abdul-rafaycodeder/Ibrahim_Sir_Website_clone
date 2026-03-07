// -------------------------------------------------Sign Up------------------------------------------//

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA8DIvSCEDnYWzBeic7Dx25bkUcfhBlx3A",
    authDomain: "personal-ai-clone-ibrahim-sir.firebaseapp.com",
    projectId: "personal-ai-clone-ibrahim-sir",
    storageBucket: "personal-ai-clone-ibrahim-sir.firebasestorage.app",
    messagingSenderId: "74129868246",
    appId: "1:74129868246:web:1472d8571943b9876e9077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpButton = document.getElementById('signUpBtn');

signUpButton.addEventListener('click', signUp);

function signUp() {
    // const SignUpName = document.getElementById('signUpFullName').value
    const SignUpemail = document.getElementById('signUpEmale').value
    const SignUpPassWord = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, SignUpemail, SignUpPassWord)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            if (user) {
                alert("Create Account Successfully")

                location.href = "../main/index.html"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode) {
                alert('Weak password')
            }
        });
}

// -------------------------------------------------Sign In------------------------------------------//

const SignInButton = document.getElementById('SignInbtn');

SignInButton.addEventListener('click', signIn)

function signIn() {
    const SignInemail = document.getElementById('SignInEmail').value
    const SignInpassword = document.getElementById('SignInPassword').value

    signInWithEmailAndPassword(auth, SignInemail, SignInpassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                alert("Sign In Successfully")

                location.href = "https://github.com/abdul-rafaycodeder/User_Full_Authentication_Firebase-/blob/main/script.js"
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode) {
                alert('wrong password')
            }
        });

}
