import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC1FkOxKzqOOwZzbbo_XMkslhc_GKO91EI",
    authDomain: "login-6a809.firebaseapp.com",
    projectId: "login-6a809",
    storageBucket: "login-6a809.appspot.com",
    messagingSenderId: "532790061678",
    appId: "1:532790061678:web:26e0663c019df7adee947f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()