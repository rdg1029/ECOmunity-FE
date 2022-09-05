import React, { useState, useContext } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth'
import auth from '../auth'

const Login: React.FC = () => {
    const [isSigned, setSigned] = useState<boolean>(auth.currentUser ? true : false);
    const user = auth.currentUser?.providerData[0];
    console.log(auth);

    function signInGoogle() {
        setPersistence(auth, browserSessionPersistence).then(() => {
            signInWithPopup(auth, new GoogleAuthProvider()).then(userCredential => {
                setSigned(true);
            });
        });
    }

    function signOutGoogle() {
        if (!window.confirm('로그아웃 하시겠습니까?')) return;
        signOut(auth).then(() => {
            setSigned(false);
        });
    }

    return (
        <div>
            {isSigned ?
            <div>
                <h1>환영합니다!</h1>
                <img src={user?.photoURL as string}></img>
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
                <button onClick={signOutGoogle}>로그아웃</button>
            </div>
            :
            <div>
                <h1>Login page</h1>
                <button onClick={signInGoogle}>로그인</button>
            </div>
            }
            
        </div>
    );
}

export default Login;