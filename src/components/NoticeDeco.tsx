import React from "react";
import styled from "styled-components";

const NoticeDecoRect = styled.div`
    width: 500px;
    height: 500px;
    background-color: green; 
    transform: rotate(35deg);
    z-index: 0;
`;
/**공지사항 페이지 뒤의 삐딱한 사각형 컴포넌트에 대한 스타일드 컴포넌트 */

const NoticeDeco: React.FC = () =>{
    return(
        <>
            <NoticeDecoRect/>
        </>
    );
}
/**공지사항 페이지 뒤의 삐딱한 사각형 컴포넌트 */

export default NoticeDeco;