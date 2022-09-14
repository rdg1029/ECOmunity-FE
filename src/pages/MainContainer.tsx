import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import MyPoint from "../components/MyPoint";

const MainContainer : React.FC = () =>{
    return(
        <MainLayoutContainer>
            <BackgroundImgStyle src="https://img.freepik.com/free-photo/beautiful-tree-in-the-middle-of-a-field-covered-with-grass-with-the-tree-line-in-the-background_181624-29267.jpg?w=2000&t=st=1662966110~exp=1662966710~hmac=6a8862695102a5f4d119da4a27870bf21c4975118d2a87d3f6c38ec77e64cd5e"/>
            <Title/>
            <MainLayoutPointStyle>
                <MyPoint/>
            </MainLayoutPointStyle>
        </MainLayoutContainer>
    );
}
/**전역 배경 색상 스타일 */

const BackgroundImgStyle = styled.img`
    width: 100%;
    height: 150%;
    position: fixed;
    z-index: -100;
    background-color: rgba(0,0,128,0.1);
`;

const MainLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
`;
/**메인 레이아웃 컨테이너*/

const MainLayoutPointStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 700px;
`;
/**포인트 표출 컴포넌트 스타일 */

export default MainContainer;