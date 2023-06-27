import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBJllRiOu19IiSE1Ldu90tt0hu843QIe9k",
  authDomain: "e-ride-e26b7.firebaseapp.com",
  projectId: "e-ride-e26b7",
  storageBucket: "e-ride-e26b7.appspot.com",
  messagingSenderId: "826821306044",
  appId: "1:826821306044:web:d43dae3b3af208794152b9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
