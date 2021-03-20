import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCSLkWF9IR6R6UQmn_CFZkWQJIsrbO07Eo",
  authDomain: "barter1-c3ff6.firebaseapp.com",
  projectId: "barter1-c3ff6",
  storageBucket: "barter1-c3ff6.appspot.com",
  messagingSenderId: "605610449230",
  appId: "1:605610449230:web:39e1d4b61402ebfd75e61f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()