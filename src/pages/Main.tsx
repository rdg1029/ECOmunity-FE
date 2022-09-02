import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import MyPoint from "../components/MyPoint";
import styled from "styled-components";

const GlobalMainStyle = styled.div`
    width: 100%;
    height: 700px;
    background-color: #70cf70;
`;

const MainLayoutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    background-color: #70cf70;
    
`;



const MainLayoutPointStyle = styled.div`
    width: 50%;
    height: 700px;
    background-color: red;
`;

const Main: React.FC = () => {
    return (
        <>  <GlobalMainStyle>
                <Nav/>
                <h1>Main page</h1>
                <MainLayoutContainer>
                        <Title/>
                    <MainLayoutPointStyle>
                        <MyPoint/>
                    </MainLayoutPointStyle>
                </MainLayoutContainer>
            </GlobalMainStyle>
        </>
    );
}

export default Main;