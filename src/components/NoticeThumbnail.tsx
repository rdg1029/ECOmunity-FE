import React from "react";
import styled from "styled-components";
import NoticeImg from "./NoticeImg";
import NoticeTxt from "./NoticeTxt";


const NoticeThumbnail : React.FC = (props) => {
    return(
        <NoticeThumbnailStyle>
                <NoticeImg/>
                <NoticeTxt/>
        </NoticeThumbnailStyle>
    );
};

const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 50px;
    margin-top: 50px;
    margin-left: 100px;
    z-index: 3;
    box-shadow: 3px 3px 8px 1px #000;    
`;





export default NoticeThumbnail;