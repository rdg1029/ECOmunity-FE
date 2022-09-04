import React from "react";
import styled from "styled-components";


const TitleLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 400px;
    
`;/**Flex Container of Title Component */

const TitleMainStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    color: white;

    h1{
        font-family:'Pretendard-Bold';
        font-size: 100px;
    };

    h2{
        font-family:'Pretendard-Thin';
        font-size: 20px;
    };

    
`;

const TitleSubStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Thin';
    font-size:20px;
    color: white;
    margin: 0;
`
const Title : React.FC = () => {
    return(
        <>
        <TitleLayoutStyle>
            <TitleMainStyle>
                <h1>ECOmunity</h1>
                <h2>우리의 행동으로 만드는 푸른 발자취.</h2>
            </TitleMainStyle>
        </TitleLayoutStyle>
        </>
    );
}

export default Title;
