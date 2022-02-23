import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwINnWU2JzlBLcXXU4LJmJdMn9K1ENG8g",
  authDomain: "signin-e116c.firebaseapp.com",
  projectId: "signin-e116c",
  storageBucket: "signin-e116c.appspot.com",
  messagingSenderId: "402804154528",
  appId: "1:402804154528:web:2ce9d84b36332cad61a9c5",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
