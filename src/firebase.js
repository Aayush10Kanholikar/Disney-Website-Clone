
    import firebase from 'firebase/compat/app'
    import 'firebase/compat/auth'
    import 'firebase/compat/database'
    import 'firebase/compat/storage'
    import 'firebase/compat/firestore'






const firebaseConfig = {
    apiKey: "AIzaSyAWfGr8yic6xLEgShQ5nTbbl5h2JTk7QGU",
    authDomain: "disneyplus-c-d65ff.firebaseapp.com",
    projectId: "disneyplus-c-d65ff",
    storageBucket: "disneyplus-c-d65ff.appspot.com",
    messagingSenderId: "789037922175",
    appId: "1:789037922175:web:8772922db8266754420c4a",
    measurementId: "G-M3F3J4NMB9"
  };
  

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export  {auth, provider, storage};
  export default db;

