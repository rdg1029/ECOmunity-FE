import React from "react";
import styled from "styled-components";
import NoticeImg from "./NoticeImg";
import NoticeTxt from "./NoticeTxt";







const NoticeThumbnail : React.FC = (props) => {
    return(
        <NoticeThumbnailStyle>
            <NoticeImgStyle>
                <NoticeImg/>
            </NoticeImgStyle>
            <NoticeTxtStyle>
                <NoticeTxt/>
            </NoticeTxtStyle>
            
        </NoticeThumbnailStyle>
    );
};

const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 50px;
    margin-top: 50px;
    z-index: 3;
    
    
`;

const NoticeImgStyle = styled.div`
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: red;
    margin-left: 100px;
`;

const NoticeTxtStyle = styled.div`
    width: 450px;
    height: 50px;
    display: flex;
    flex-direction: column;
    background-color: blue;
    margin-left: 100px;
`;

export default NoticeThumbnail;