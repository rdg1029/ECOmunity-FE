import React, {useState} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import auth from "../auth";
import styled from "styled-components";

const ProfilePoint:React.FC = () => {
    const [point, setPoint] = useState(0);
    const [isLogin, setLogin] = useState<boolean>();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
            return;
        }
        setLogin(false);
    });

    return(
        <div>
            {isLogin?
            <div>
                <ProfileUserNameStyle>{auth.currentUser?.displayName} 님의 Ecomunity 포인트</ProfileUserNameStyle>
                <ProfileUserPointStyle>{point} 점</ProfileUserPointStyle>
            </div>
            :
            <h1>로그인부터 하세욤</h1>
            }
        </div>
    );
}

const ProfileUserNameStyle = styled.p`
    font-family: 'Pretendard-Bold';
    font-size : 60px;
`;

const ProfileUserPointStyle = styled.h1`
    font-family: 'Pretendard-Bold';
    font-size : 80px;
    
`;

export default ProfilePoint;
