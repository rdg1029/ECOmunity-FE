import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import auth, {signInGoogle, signOutGoogle} from '../auth'
import styled from 'styled-components';

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
        <LoginMainStyle>
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
            
        </LoginMainStyle>
    );
}

const LoginMainStyle = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    margin-top: 200px;
`;

export default Login;