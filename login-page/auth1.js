// -------------------------------------------------Sign Up------------------------------------------//

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    // GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const provider = new GoogleAuthProvider();


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

    if (SignUpPassWord.length < 6) {
        alert("Weak Password (minimum 6 characters required)")
        return
    }

    createUserWithEmailAndPassword(auth, SignUpemail, SignUpPassWord)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // console.log(user)
            if (user) {
                alert("Create Account Successfully")
                // location.href = "../main/index.html"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/email-already-in-use") {
                alert("Email already registered")
            }
            else if (errorCode === "auth/invalid-email") {
                alert("Invalid Email Address")
            }
            else if (errorCode === "auth/weak-password") {
                alert("Weak Password")
            }
            else {
                alert(error.message)
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
                location.href = "../main/index.html"
                return
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/email-already-in-use") {
                alert("Email already registered")
            }
            if (errorCode === "auth/invalid-email") {
                alert("Invalid Email")
            }
            else if (errorCode) {
                alert('wrong password and gmail')
            }
        });
}

// if (errorCode === "auth/wrong-password") {
//     alert("Wrong Password")
// }
// else if (errorCode === "auth/user-not-found") {
//     alert("User Not Found")
// }
// else if (errorCode === "auth/invalid-email") {
//     alert("Invalid Email")
// }
// else {
//     alert(error.message)
// }

// -------------------------------------------------Contine with google------------------------------------------//


const googleBtn = document.getElementById('google');

googleBtn.addEventListener('click', contineWithGoogle)

function contineWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}
