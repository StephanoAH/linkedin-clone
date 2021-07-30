import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDiXfIPg2jKtMYfWibUT4scG9xKHOWB82k',
  authDomain: 'linkedin-clone-c72b9.firebaseapp.com',
  projectId: 'linkedin-clone-c72b9',
  storageBucket: 'linkedin-clone-c72b9.appspot.com',
  messagingSenderId: '895722987536',
  appId: '1:895722987536:web:1c75985fc4aa6569112a95',
  measurementId: 'G-JL296Z0PN9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
