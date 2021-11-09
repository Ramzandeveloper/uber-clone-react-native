import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAysCPUiVJex-1tAYy3Z-BR7873aewrf7M",
  authDomain: "uber-eats-clone-906cc.firebaseapp.com",
  projectId: "uber-eats-clone-906cc",
  storageBucket: "uber-eats-clone-906cc.appspot.com",
  messagingSenderId: "171364479145",
  appId: "1:171364479145:web:25755065cb01a4ce1379b8",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
