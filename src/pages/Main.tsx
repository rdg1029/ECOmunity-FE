import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import MyPoint from "../components/MyPoint";
import styled from "styled-components";
import Notice from "./Notice";

const GlobalMainStyle = styled.div`
    background-color: #70cf70;
`;
/**전역 배경 색상 스타일 */

const MainLayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 700px;
    background-color: #70cf70;
    
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

const Main: React.FC = () => {
    return (
        <>  
            <GlobalMainStyle>
                <MainLayoutContainer>
                        <Title/>
                    <MainLayoutPointStyle>
                        <MyPoint/>
                    </MainLayoutPointStyle>
                </MainLayoutContainer>
                <Notice/>
            </GlobalMainStyle>
        </>
    );
}

export default Main;