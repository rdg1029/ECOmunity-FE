import React from "react";
import styled from "styled-components";
import NoticeImg from "./NoticeImg";
import NoticeTxt from "./NoticeTxt";


const NoticeThumbnail : React.FC = (props) => {
    return(
        <PostLinkStyle href="/"> 
        {/**글마다 링크를 걸어야겠습니다. */}
            <NoticeThumbnailStyle>
                    <NoticeImg/>
                    <NoticeTxt/>
            </NoticeThumbnailStyle>
        </PostLinkStyle>
    );
};

const PostLinkStyle = styled.a`
    text-decoration: none; color: white;
    :visited{
        text-decoration: none
    };
`
const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 50px;
    margin-top: 50px;
    margin-left: 85px;
    box-shadow: 3px 3px 8px 1px #000;   

`;




export default NoticeThumbnail;