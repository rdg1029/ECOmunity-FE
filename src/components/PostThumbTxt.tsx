import React from "react";
import styled from "styled-components";

const PostThumbTxt : React.FC = () => {
    return(
        <PostTxtGlobalStyle>
            <CategoryStyle>
                <p>NEW</p>
            </CategoryStyle>
            
            <PostTxtTitleStyle>
                <p>햇1반 먹고난 용기 그냥 버리고 계신가요?</p>
            </PostTxtTitleStyle>
            
            <PostPreviewStyle>
                <p>
                    대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 대한민국은 민주공화국이다. 
                    모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌
                </p>
            </PostPreviewStyle>

            <WriterDateStyle>
                <p>김 현 우</p>
                <p>22.09.15</p>
            </WriterDateStyle>
            
        </PostTxtGlobalStyle>
    );
};

const PostPreviewStyle = styled.div`
    width: 90%;
    height: 70%;
    margin-left: 23px;
    
`;

const WriterDateStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Bold';
    font-weight: bold;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0 0 0 340px;
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


const PostTxtGlobalStyle = styled.div`
    width: 450px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #000;
    background-color: #fff;
`;

const PostTxtTitleStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Bold';
    font-weight: bold;

    p{
        margin-left: 30px;
        font-size: 15pt;
    }  
`;

export default PostThumbTxt;