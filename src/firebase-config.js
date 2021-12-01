const firebaseConfig = {
  apiKey: "AIzaSyDtclHrU64xWArBasFayhHoHe9QoblzZFs",
  authDomain: "eco-parcial2.firebaseapp.com",
  databaseURL: "https://eco-parcial2-default-rtdb.firebaseio.com",
  projectId: "eco-parcial2",
  storageBucket: "eco-parcial2.appspot.com",
  messagingSenderId: "567513446559",
  appId: "1:567513446559:web:736c80b10d6f2d4bc64aaa"
};

export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }