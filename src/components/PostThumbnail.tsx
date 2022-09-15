import React from "react";
import styled from "styled-components";
import PostThumbImg from "./PostThumbImg";
import PostThumbTxt from "./PostThumbTxt";
import { Link } from "react-router-dom";


const PostThumbnail : React.FC = () => {
    return(
        <PostLinkStyle>
        <Link to="/postview"> 
        {/**글마다 링크를 걸어야겠습니다. -> PostView.tsx */}
            <PostThumbnailStyle>
                    <PostThumbImg/>
                    <PostThumbTxt/>
            </PostThumbnailStyle>
        </Link>
        </PostLinkStyle>
    );
};

const PostLinkStyle = styled.div`
    a{
        text-decoration: none; color: white;
    }
    :visited{
        text-decoration: none
    };
`
const PostThumbnailStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 50px;
    margin-top: 50px;
    margin-left: 85px;
    box-shadow: 3px 3px 8px 1px #000;   

`;




export default PostThumbnail;