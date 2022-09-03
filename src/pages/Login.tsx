import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import auth from '../auth'

const Login: React.FC = () => {
    function signInGoogle() {
        signInWithPopup(auth, new GoogleAuthProvider()).then(result => {
            console.log(result);
        });
    }

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={signInGoogle}>로그인</button>
        </div>
    );
}

export default Login;