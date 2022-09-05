import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged } from 'firebase/auth'
import auth, {signInGoogle, signOutGoogle} from '../auth'

const Login: React.FC = () => {
    const [isLogin, setLogin] = useState<boolean>();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
            return;
        }
        setLogin(false);
    });

    return (
        <div>
            {isLogin ?
            <div>
                <h1>환영합니다!</h1>
                <img src={auth.currentUser?.photoURL as string}></img>
                <p>{auth.currentUser?.displayName}</p>
                <p>{auth.currentUser?.email}</p>
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