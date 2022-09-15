import React from "react";
import styled from "styled-components";

interface Props {
    author: string;
    date: string;
    title: string;
}

const NoticeTxt : React.FC<Props> = (props) => {
    return(
        <NoticeTxtGlobalStyle>
            <CategoryStyle>
                <p>신규</p>
            </CategoryStyle>
            
            <NoticeTxtTitleStyle>
                <p>{props.title}</p>
            </NoticeTxtTitleStyle>

            <WriterDateStyle>
                <p>{props.author}</p>
                <p>{props.date}</p>
            </WriterDateStyle>
            
        </NoticeTxtGlobalStyle>
    );
};

const NoticePreviewStyle = styled.div`
    width: 90%;
    height: 70%;
    margin-left: 23px;
    
`;

const WriterDateStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Bold';
    font-weight: bold;
    font-size: 20px;
    margin: 0 10px 0 auto;
    padding-bottom: 10px;

    p{
        margin: 0;
    }
`;

const CategoryStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Bold';
    font-weight: bold;
    font-size: 15pt;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #14C38E;
    margin-left: 26px;
    margin-top: 20px;
`


const NoticeTxtGlobalStyle = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #000;
    background-color: #fff;
`;

const NoticeTxtTitleStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Bold';
    font-weight: bold;

    p{
        margin-left: 30px;
        font-size: 15pt;
    }  
`;

export default NoticeTxt;