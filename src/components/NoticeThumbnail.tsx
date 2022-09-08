import React from "react";
import styled from "styled-components";

const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 3;
    
    
`;

const NoticeImgStyle = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: red;
    margin-left: 100px;
`

const NoticeTxtStyle = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: blue;
    margin-left: 100px;
`
const NoticeImg : React.FC = () => {
    return(
        <>
            img
        </>
    );

}

const NoticeTxt : React.FC = () => {
    return(
        <>
            txt
        </>
    );
}


const NoticeThumbnail : React.FC = () => {
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
}

export default NoticeThumbnail;