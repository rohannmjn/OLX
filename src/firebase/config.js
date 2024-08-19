import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyACXkoeSdiKqCPe1MYOpDkcRh9ZCWSbr0A",
    authDomain: "olxclone-a3098.firebaseapp.com",
    projectId: "olxclone-a3098",
    storageBucket: "olxclone-a3098.appspot.com",
    messagingSenderId: "547453139760",
    appId: "1:547453139760:web:319d85ab722a6a447f26f5",
    measurementId: "G-XZVDYDNP4J"
  };
 export default firebase.initializeApp(firebaseConfig)