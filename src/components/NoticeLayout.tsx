import React from "react";
import styled from "styled-components";
import NoticeThumbnail from "./NoticeThumbnail";

const testImgSrc = "http://newsteacher.chosun.com/site/data/img_dir/2019/08/29/2019082900396_0.jpg";

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
    justify-content: center;
    margin-top: 20px;
;
    
`;
/**공지사항 컴포넌트 전체에 대한 스타일 */

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

const NoticeThumbnailStyle = styled.div`
    display: flex;
    flex-flow: row, nowrap;
    align-items: center;
    justify-content: center;
    
`

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
/**공지사항 타이틀 컴포넌트 */

export default NoticeLayout;