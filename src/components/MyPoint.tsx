import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
import React, { useState } from "react";
import styled from "styled-components";
import auth from "../auth";



const MyPointLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color : white;
    height: 280px;
    margin-left: 300px;

    
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
                            <h1> 0 점 </h1>
                        <p>{'>'} Ecomunity 포인트 사용처 보기</p>
                    </>
                    :
                    <p>안녕하세요 이커뮤니티입니다.<br/> 로그인을 해주세요.</p>
                    }
                </MyPointTextLayoutStyle>
            </MyPointLayoutStyle>
        </>
    );
}

export default MyPoint;