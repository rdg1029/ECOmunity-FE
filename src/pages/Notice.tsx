import React from "react";
import styled from "styled-components";
import NoticeLayout from "../components/NoticeLayout";

const Notice: React.FC = () => {
    return (
        <>
            <NoticeBgImgStyle src="https://cdn.pixabay.com/photo/2016/06/27/17/54/leaf-1482948_960_720.jpg"/>
            <NoticeLayout/>
        </>
    );
};


const NoticeBgImgStyle = styled.img`
    width: 2400px;
    height: 1600px;
    border-radius: 120px;
    margin-top: -500px;
    margin-left: -200px;
    position: fixed;
    z-index: -100;
    filter: blur(3px);
    transform: rotate(-40deg);
    
`;

export default Notice;