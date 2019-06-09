import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCmSGQEuQ5_FLbH_5xmUUigz1MISPmO-L8",
    authDomain: "my-react-project-32388.firebaseapp.com",
    databaseURL: "https://my-react-project-32388.firebaseio.com",
    projectId: "my-react-project-32388",
    storageBucket: "my-react-project-32388.appspot.com",
    messagingSenderId: "76599983743",
    appId: "1:76599983743:web:4d191705a2ec899c"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;