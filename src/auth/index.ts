import {initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

export function signInGoogle() {
    setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithPopup(auth, new GoogleAuthProvider()).then(userCredential => {
            window.location.replace('/');
        });
    });
}

export function signOutGoogle() {
    if (!window.confirm('로그아웃 하시겠습니까?')) return;
    signOut(auth).then(() => {
        window.location.replace('/');
    });
}