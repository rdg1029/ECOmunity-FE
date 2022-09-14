import React from "react";
import styled from "styled-components";

const NoticeTitle: React.FC = () => {
    const companyNum = 3;
    return(
        <>
        <NoticeTitleStyle>
            <NoticePStyle>오늘의 환경 보호 캠페인</NoticePStyle>
            {companyNum} 개의 기업이 함께하고 있어요.
        </NoticeTitleStyle>
        </>
    );
};

const NoticeTitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;
    font-family: 'Pretendard-Thin';
    margin-left: 150px;

`;
/**공지사항 컴포넌트 제목에 대한 스타일 */

const NoticePStyle = styled.p`
    font-family: 'Pretendard-Thin';
    font-size:50px;
    margin: 0;
`

export default NoticeTitle;