import React, { useState } from "react";
import styled from "styled-components";
import auth from "../auth";
import PostWrite from "../components/PostWrite";
import PostListLayout from "../components/PostListLayout";

const Post: React.FC = () => {
    const [isWriteMode, setWriteMode] = useState<boolean>(false);

    return (
        <PostGlobalStyle>
            <h1>나의 발자취 공유하기</h1>
            <button onClick={() => auth.currentUser ? setWriteMode(true) : window.alert('로그인이 필요한 서비스입니다.')}>작성</button>
            <PostWrite show={isWriteMode}/>

            <PostListLayout/>
        </PostGlobalStyle>
    );
}

const PostGlobalStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button{
        background: #00AE68;
        position: relative;
        display: block;
        width: 120px;
        padding: 0;
        margin: 10px 20px 10px 0;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        color: #FFF;
        border-radius: 5px;
        transition: all 0.2s;
        justify-content: center;
        align-items: center;
        float: left;
        font-size: 20px;
    }
    button:hover{
        background: #21825B;
    }
`

export default Post;