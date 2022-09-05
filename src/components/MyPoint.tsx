import React from "react";
import styled from "styled-components";

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

const usrName = "정승민";
const usrPoint = 706;


const MyPoint : React.FC = () => {
    return(
        <>
            <MyPointLayoutStyle>
                <MyPointTextLayoutStyle>
                    <p>{usrName} 님의 Ecomunity 포인트</p>
                           <h1> {usrPoint} 점 </h1>
                    <p>{'>'} Ecomunity 포인트 사용처 보기</p>
                </MyPointTextLayoutStyle>
            </MyPointLayoutStyle>
        </>
    );
}

export default MyPoint;