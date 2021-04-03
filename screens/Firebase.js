import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXWAdlnahRBqRfGzyld3s4cXLnd3cwEyY",
  authDomain: "grow-with-quiz.firebaseapp.com",
  projectId: "grow-with-quiz",
  storageBucket: "grow-with-quiz.appspot.com",
  messagingSenderId: "1079572031869",
  appId: "1:1079572031869:web:5735da861ad1aeff138414",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
