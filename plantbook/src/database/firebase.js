import firebase from 'firebase';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

//Retornar los servicios
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default {
    db,
    auth,
    storage,
}