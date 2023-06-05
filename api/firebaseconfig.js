import { initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4PVA9ilz5Ryp3MNG2KARcH0ChK8OWsJY",
  authDomain: "mynewproject-997bc.firebaseapp.com",
  projectId: "mynewproject-997bc",
  storageBucket: "mynewproject-997bc.appspot.com",
  messagingSenderId: "674415498985",
  appId: "1:674415498985:web:ced5d2df86e7def5910278",
  measurementId: "G-54VSKJ6QX9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;