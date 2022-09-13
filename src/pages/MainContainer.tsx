import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import MyPoint from "../components/MyPoint";

const MainContainer : React.FC = () =>{
    return(
        <GlobalMainStyle>
            <MainLayoutContainer>
                <BackgroundImgStyle>
                    <img src="https://img.freepik.com/free-photo/beautiful-tree-in-the-middle-of-a-field-covered-with-grass-with-the-tree-line-in-the-background_181624-29267.jpg?w=2000&t=st=1662966110~exp=1662966710~hmac=6a8862695102a5f4d119da4a27870bf21c4975118d2a87d3f6c38ec77e64cd5e"/>
                </BackgroundImgStyle>
                <Title/>
                <MainLayoutPointStyle>
                    <MyPoint/>
                </MainLayoutPointStyle>
            </MainLayoutContainer>
        </GlobalMainStyle>
        
    );
}

const GlobalMainStyle = styled.div`
    height: 100%;
    width: 100%;
`;
/**전역 배경 색상 스타일 */

const BackgroundImgStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    
`;

const MainLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 50;
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