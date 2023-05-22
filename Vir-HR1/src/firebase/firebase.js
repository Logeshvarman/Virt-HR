import firebase from "firebase/app";
import "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyA3pOj1Ex5Y95upo3WYO-LtlO9O3-H-usc",
//   authDomain: "skillset-verified.firebaseapp.com",
//   projectId: "skillset-verified",
//   storageBucket: "skillset-verified.appspot.com",
//   messagingSenderId: "75144383574",
//   appId: "1:75144383574:web:75af1487584a97169b7ff7",
//   measurementId: "G-REQXD214NH",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMvBuEg3iSs43VgcXnuGvQKTUdD_ZZ3GU",
  authDomain: "virt-hr.firebaseapp.com",
  databaseURL: "https://virt-hr-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "virt-hr",
  storageBucket: "virt-hr.appspot.com",
  messagingSenderId: "1082405188604",
  appId: "1:1082405188604:web:047080638b0bcd8608f879"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
