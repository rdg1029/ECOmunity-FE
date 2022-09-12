import React from "react";
import styled from "styled-components";


const TitleLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 20px;
    margin-left: 80px;
    
`;/**Flex Container of Title Component */

const TitleMainStyle = styled.p`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    color: white;
    font-family: 'Pretendard-Bold';
    font-size:100px;
    margin: 0;
`;

const TitleSubStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Thin';
    font-size:30px;
    color: white;
    margin: 0;
`
const Title : React.FC = () => {
    return(
        <>
        <TitleLayoutStyle>
            <TitleMainStyle>
                ECOmunity
            </TitleMainStyle>
            <TitleSubStyle>
                우리들의 행동이 만드는 푸른 발자취.
            </TitleSubStyle>
        </TitleLayoutStyle>
        </>
    );
}

export default Title;
