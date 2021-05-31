import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg7x1d0M6myvrzOBSqmGJE9FbgaECBh3M",
  authDomain: "clone-d4004.firebaseapp.com",
  projectId: "clone-d4004",
  storageBucket: "clone-d4004.appspot.com",
  messagingSenderId: "299341696732",
  appId: "1:299341696732:web:5360d1db9b9adeaad7ae19",
  measurementId: "G-BE40YJ7W8B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;
