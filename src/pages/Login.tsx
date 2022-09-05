import React from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth'
import auth, {signInGoogle, signOutGoogle} from '../auth'

const Login: React.FC = () => {
    const user = auth.currentUser?.providerData[0];

    return (
        <div>
            {auth.currentUser ?
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