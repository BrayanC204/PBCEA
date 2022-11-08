import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0HBmBQWy9wmHUCNEg5_g7BKOHswJgCZA",
  authDomain: "plantbook-c156b.firebaseapp.com",
  projectId: "plantbook-c156b",
  storageBucket: "plantbook-c156b.appspot.com",
  messagingSenderId: "841980811640",
  appId: "1:841980811640:web:6af87c38824819357dd08d",
  measurementId: "G-J3CC3ZBJE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Retornar los servicios
const db = app.firestore();
const auth = app.auth();

export default {
    db,
    auth
}