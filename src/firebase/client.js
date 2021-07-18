import firebase from 'firebase/app';
import '@firebase/firestore';
//import firebase/storage para utilizar storage con las imagenes

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyDlvSewSVsViIis0ZF6n2ckR3B-vTdeuqc",
    authDomain: "tienda-beauty.firebaseapp.com",
    projectId: "tienda-beauty",
    storageBucket: "tienda-beauty.appspot.com",
    messagingSenderId: "156129544423",
    appId: "1:156129544423:web:5876928c24676af8f43a42"
});

export const getFirebase = () => {
  return firebaseConfig
}

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
}

//Para poder hacer auth o storage
//export  function getFirebase() {
  //return app;
//}

// para utilizar storage
//export const getStorage = () => {return firebase.storage(firebaseConfig)}
