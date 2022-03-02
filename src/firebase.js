import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
        apiKey: "AIzaSyB7VyG6i7klZxa2vybwAYQBCb2dND2ayls",
        authDomain: "crud-59dfa.firebaseapp.com",
        databaseURL: "https://crud-59dfa-default-rtdb.firebaseio.com",
        projectId: "crud-59dfa",
        storageBucket: "crud-59dfa.appspot.com",
        messagingSenderId: "1099445459586",
        appId: "1:1099445459586:web:c879119906930753e9b29b"
     
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();