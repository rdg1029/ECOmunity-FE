import {initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth'
import request from '../util/RequestAPI';

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
            const user = userCredential.user;
            const metaData = user.metadata;
            if (metaData.creationTime !== metaData.lastSignInTime) {
                window.location.replace('/');
                return;
            }
            user.getIdToken().then(token => {
                request.post('/profile/addUserInfo', {
                    USER_UID: user.uid,
                    USER_TOKEN: token,
                    
                    USER_INFO: {
                      USER_EMAIL: user.email,
                      USER_NAME: user.displayName,
                      USER_PHONE: user.phoneNumber,
                      USER_POINT: 0,
                      USER_POSTS: []
                    }
                  }
                )
                .then(res => {
                    if(res.data.RESULT_CODE != 200) return;
                    window.location.replace('/');
                })
                .catch(err => {
                    window.alert(err);
                })
            });
        });
    });
}

export function signOutGoogle() {
    if (!window.confirm('로그아웃 하시겠습니까?')) return;
    signOut(auth).then(() => {
        window.location.replace('/');
    });
}