import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC5SU0fV7hYWKXdjtTGUbysQ0NuMtHVP3Q",
    authDomain: "social-media-platform-fadd8.firebaseapp.com",
    projectId: "social-media-platform-fadd8",
    storageBucket: "social-media-platform-fadd8.appspot.com",
    messagingSenderId: "357756757653",
    appId: "1:357756757653:web:603a18ac74e3f62b24dd9c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }