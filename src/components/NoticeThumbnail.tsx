import React from "react";
import styled from "styled-components";

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

const NoticeThumbnailStyle = styled.div`
    display: flex;
    
`;
const NoticeThumbnail : React.FC = () => {
    return(
        <>
        <NoticeThumbnailStyle>
            <NoticeImg/>
            <NoticeTxt/>
        </NoticeThumbnailStyle>
        </>
    );
}

export default NoticeThumbnail;