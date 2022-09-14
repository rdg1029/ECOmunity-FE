import React from "react";
import styled from "styled-components";
import NoticeThumbnail from "./NoticeThumbnail";
import NoticeTitle from "./NoticeTitle";



const NoticeLayout : React.FC = () => {
    return(
        <NoticeGlobalStyle>
        <NoticeTitle/> {/**타이틀 컴포 */}
            <NoticeThumbnailStyle>
                <NoticeThumbnail/>{/**썸넬 6개 넣어야 함. */}
                <NoticeThumbnail/>
                <NoticeThumbnail/>
            </NoticeThumbnailStyle>

            <NoticeThumbnailStyle>
                <NoticeThumbnail/>{/**썸넬 6개 넣어야 함. */}
                <NoticeThumbnail/>
                <NoticeThumbnail/>
            </NoticeThumbnailStyle>
    </NoticeGlobalStyle>
    );
}

const NoticeGlobalStyle = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    flex-flow: column;
    margin-top: 20px;
;
    
`;
/**공지사항 컴포넌트 전체에 대한 스타일 */



const NoticeThumbnailStyle = styled.div`
    display: flex;
    
`

export default NoticeLayout;