import React, {useState} from "react";
import styled from "styled-components";
import auth from "../auth";
import PostTitle from "./PostTitle";
import PostThumbnail from "./PostThumbnail";
import PostWrite from "./PostWrite";

const PostListLayout : React.FC = () => {

    const [isWriteMode, setWriteMode] = useState<boolean>(false);
    return(
        <PostLayoutGlobalStyle>
            <TitleAndButtonStyle>
                <PostTitle/> {/**타이틀 컴포 */}
                <button onClick={() => auth.currentUser ? setWriteMode(true) : window.alert('로그인이 필요한 서비스입니다.')}>내 발자취 남기기</button>
            </TitleAndButtonStyle>
            <PostWrite show={isWriteMode}/>
                <PostThumbnailStyle>
                    <PostThumbnail/>{/**썸넬 6개 넣어야 함. */}
                    <PostThumbnail/>
                    <PostThumbnail/>
                </PostThumbnailStyle>

                <PostThumbnailStyle>
                    <PostThumbnail/>{/**썸넬 6개 넣어야 함. */}
                    <PostThumbnail/>
                    <PostThumbnail/>
                </PostThumbnailStyle>
        </PostLayoutGlobalStyle>
    );
}

const PostLayoutGlobalStyle = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column;
    margin-top: 40px;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TitleAndButtonStyle = styled.div`
    display: flex;
    flex-direction: row;

    button{
        background: #00AE68;
        position: relative;
        display: block;
        width: 200px;
        height: 50px;
        padding: 0;
        margin: 30px 20px 10px 900px;
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
        border: 2px solid #21825B
    }
    button:hover{
        background: #21825B;
    }
`


const PostThumbnailStyle = styled.div`
    display: flex;
    
`

export default PostListLayout;