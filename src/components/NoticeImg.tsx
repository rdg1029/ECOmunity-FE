import React from "react";
import styled from "styled-components";

const testImgSrc = "http://newsteacher.chosun.com/site/data/img_dir/2019/08/29/2019082900396_0.jpg";

const NoticeImg : React.FC<{src: string}> = (props) => {
    return(
        <NoticeImgGlobalStyle>
            <img src={props.src}/>
        </NoticeImgGlobalStyle>
    );

}

const NoticeImgGlobalStyle = styled.div`
    width: 450px;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
    }
`

export default NoticeImg;