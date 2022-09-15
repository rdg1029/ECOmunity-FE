import React from "react";
import styled from "styled-components";
import PostTitle from "./PostTitle";
import PostThumbnail from "./PostThumbnail";



const PostListLayout : React.FC = () => {
    return(
        <PostLayoutGlobalStyle>
            <PostTitle/> {/**타이틀 컴포 */}
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
;
    
`;
/**공지사항 컴포넌트 전체에 대한 스타일 */



const PostThumbnailStyle = styled.div`
    display: flex;
    
`

export default PostListLayout;