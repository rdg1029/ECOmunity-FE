import React from "react";
import styled from "styled-components";

const postCount = 0;

const PostTitle: React.FC = () => {
    
    return(
        <>
        <NoticeTitleStyle>
            <NoticePStyle>ECOmunity</NoticePStyle>
            <NoticeSubPStyle>{postCount} 개의 푸른 발자취를 확인해보세요.</NoticeSubPStyle>
        </NoticeTitleStyle>
        </>
    );
};

const NoticeTitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Pretendard-Thin';
    margin-left: 90px;


`;
/**공지사항 컴포넌트 제목에 대한 스타일 */

const NoticePStyle = styled.p`
    font-family: 'Pretendard-Thin';
    font-size:50px;
    margin: 0;
`;

const NoticeSubPStyle = styled.p`
    font-family: 'Pretendard-Thin';
    font-size:30px;
    margin: 0;
`

export default PostTitle;