import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//Para lo del login
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
const auth = getAuth();

//Donde funciona el inicio de sesion
function login(e, event){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        
        //abrir una nueva ventana
        window.location.href = "vote.html";
    })
    .catch((error) => {
        alert("Revisa tus datos");
        console.log(error.message);
    });
}


//Instancias de los objetos
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");


//Clicks
loginBtn.addEventListener('click', login);



