import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCPB5vX4ieo6FRQLytajDW21pkZ5GBf-gQ",
  authDomain: "booksanta-df176.firebaseapp.com",
  projectId: "booksanta-df176",
  storageBucket: "booksanta-df176.appspot.com",
  messagingSenderId: "491204445514",
  appId: "1:491204445514:web:bc8a2efe0ff6722d7a2db3"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
