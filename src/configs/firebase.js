// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDSyzby9mkIf1NIF409j4cWeWY8GhRoe3M",
    authDomain: "spotify-45141.firebaseapp.com",
    projectId: "spotify-45141",
    storageBucket: "spotify-45141.appspot.com",
    messagingSenderId: "397383980932",
    appId: "1:397383980932:web:cca578cbcfc84491cdafd1",
    measurementId: "G-7TP76MLXFW"
};
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth()
const projectFireStore = firebase.firestore()
export { projectAuth, projectFireStore }