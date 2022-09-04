import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import auth from '../auth'
import user from '../data/User';

const Login: React.FC = () => {
    const [isSigned, setSigned] = useState<boolean>(user.isSigned);

    function signInGoogle() {
        signInWithPopup(auth, new GoogleAuthProvider()).then(userCredential => {
            user.setLogin(userCredential.user);
            setSigned(user.isSigned);
        });
    }

    function signOutGoogle() {
        if (!window.confirm('로그아웃 하시겠습니까?')) return;
        signOut(auth).then(() => {
            user.setLogout();
            setSigned(user.isSigned);
        });
    }

    return (
        <div>
            {isSigned ?
            <div>
                <h1>환영합니다!</h1>
                <img src={user.photoURL as string}></img>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
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