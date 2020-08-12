import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAcIqUEBfNhzMMpf9oOHQB4R0m516BZJ10",
  authDomain: "mern-dogs.firebaseapp.com",
  databaseURL: "https://mern-dogs.firebaseio.com",
  projectId: "mern-dogs",
  storageBucket: "mern-dogs.appspot.com",
  messagingSenderId: "1032361195807",
  appId: "1:1032361195807:web:11c7ca8492934ba525182a",
  measurementId: "G-KV5VS1THYB",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
