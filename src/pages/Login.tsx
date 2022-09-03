import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import auth from '../auth'

const Login: React.FC = () => {
    function signInGoogle() {
        signInWithPopup(auth, new GoogleAuthProvider()).then(result => {
            console.log(`로그인 성공: ${result.user.email}`);
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