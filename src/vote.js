import{initializeApp} from "firebase/app";
import{getDatabase, ref, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import{bookCard} from "./bookcard";

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//Instancias de los objetos
const container = document.getElementById("bookContainer");

function getBook(){
    console.log("me wa matá wiiiiiii");
   
    const db = getDatabase();
    const dbRef = ref(db, 'books');

    //Leer (algo parecido a un observer)
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        bookCards(data);
        console.log(data);
        
    });
}

function bookCards(data){
    if(data){
        container.innerHTML = "";
        Object.keys(data).forEach((k, index) => {
            //Crea objeto de la clase bookCard
            const card = new bookCard(data[k]);

            container.appendChild(card.render());
        });
    }
}

getBook();