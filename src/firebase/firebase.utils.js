import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChEGUMxVeMQl-J3QAePYFrU839JqjA3hM",
  authDomain: "shop-db-7c7d9.firebaseapp.com",
  databaseURL: "https://shop-db-7c7d9.firebaseio.com",
  projectId: "shop-db-7c7d9",
  storageBucket: "",
  messagingSenderId: "734335437789",
  appId: "1:734335437789:web:edcc48a7bdda7c3a"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
