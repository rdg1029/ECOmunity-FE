import React, { useState } from "react";
import styled from "styled-components";
import PostListLayout from "../components/PostListLayout";

const Post: React.FC = () => {

    return (
        <PostGlobalStyle>
            <PostBgImgStyle src="https://cdn.pixabay.com/photo/2016/06/27/17/54/leaf-1482948_960_720.jpg"/>
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
`;

const PostBgImgStyle = styled.img`
    width: 2400px;
    height: 1600px;
    border-radius: 120px;
    margin-top: -500px;
    margin-left: 1000px;
    position: fixed;
    z-index: -100;
    filter: blur(3px);
    transform: rotate(-40deg);
`;


export default Post;