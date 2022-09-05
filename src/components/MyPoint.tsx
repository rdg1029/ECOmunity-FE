import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import auth from "../auth";

const MyPointLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color : white;
    height: 400px;

    
`;

const MyPointTextLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
        font-family: 'Pretendard-Thin';
        font-size: 30px;
    }

    h1{
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
        font-family: 'Pretendard-Bold';
        font-size: 80px;
    }
`;

const MyPoint : React.FC = () => {
    const [isLogin, setLogin] = useState<boolean>();
    const user = auth.currentUser?.providerData[0];
    const usrName = user?.displayName;
    const usrPoint = 706;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
            return;
        }
        setLogin(false);
    });
    return(
        <>
            <MyPointLayoutStyle>
                <MyPointTextLayoutStyle>
                    {isLogin ?
                    <>
                        <p>{usrName} 님의 Ecomunity 포인트</p>
                            <h1> {usrPoint} 점 </h1>
                        <p>{'>'} Ecomunity 포인트 사용처 보기</p>
                    </>
                    :
                    <p>로그인부터 하시죠? ^^</p>
                    }
                </MyPointTextLayoutStyle>
            </MyPointLayoutStyle>
        </>
    );
}

export default MyPoint;