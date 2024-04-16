import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGtGFBjOhdmaIlnz4XfUyjvQHtG1mTHfM",
    authDomain: "todolist-77532.firebaseapp.com",
    projectId: "todolist-77532",
    storageBucket: "todolist-77532.appspot.com",
    messagingSenderId: "775158905474",
    appId: "1:775158905474:web:a95c1ace7ea5c0da72529b",
    measurementId: "G-RX46MGNBH0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };