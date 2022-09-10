import React from "react";
import styled from "styled-components";


const NoticeDecoRect: React.FC = () => {
    return(
        <div>

        </div>
    );
}

const NoticeDecoRectStyle = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    background-color: green; 
    transform: rotate(35deg);
`;
/**공지사항 페이지 뒤의 삐딱한 사각형 컴포넌트에 대한 스타일드 컴포넌트 */

const NoticeDecoRectStyleForFlex = styled.div`
    justify-content: end;;
    
`;

const NoticeDeco: React.FC = () =>{
    return(
        <NoticeDecoRectStyle>
            <NoticeDecoRectStyleForFlex>
                <NoticeDecoRect/>
            </NoticeDecoRectStyleForFlex>
        </NoticeDecoRectStyle>
    );
}
/**공지사항 페이지 뒤의 삐딱한 사각형 컴포넌트 */

export default NoticeDeco;