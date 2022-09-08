import React from "react";
import styled from "styled-components";

const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 3;
    
    
`;

const NoticeImgStyle = styled.div`
    display: flex;
    flex-direction: column;
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
            <NoticeTxt/>
        </NoticeThumbnailStyle>
    );
}

export default NoticeThumbnail;