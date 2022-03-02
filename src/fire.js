import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyn81VzQzttf1wohtMjALVMuFnIf1G7yg",
  authDomain: "login-fdc0d.firebaseapp.com",
  databaseURL: "https://login-fdc0d-default-rtdb.firebaseio.com",
  projectId: "login-fdc0d",
  storageBucket: "login-fdc0d.appspot.com",
  messagingSenderId: "1007237857815",
  appId: "1:1007237857815:web:52e251e77996f65fbe9252"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;