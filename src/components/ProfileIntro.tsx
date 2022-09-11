import React, {useState} from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import auth from "../auth";



const IntroContainer = styled.div`
    display: flex;
`;

const IntroH1Style = styled.p`
    font-family: 'Pretendard-Black';
    font-size: 50px;
`;

const ToHomeLinkStyle = styled.p`
    font-family: 'Pretendard-Bold';
    font-size: 30px;
`


const ProfileIntro : React.FC = () => {
    const [isLogin, setLogin] = useState<boolean>();
    const uName = auth.currentUser?.displayName;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
            return;
        }
        setLogin(false);
    });

    return(
        <>
            <IntroH1Style>
                {uName}
            </IntroH1Style>
        </>
    );
}

export default ProfileIntro;