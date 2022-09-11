import React from "react";
import styled from "styled-components";

const ProfileBgImgWholeStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;

    img{
        width: 100%;
        height: 70%;
        z-index: -20;
    }
`

const ProfileBgImg : React.FC = () => {
    return(
        <ProfileBgImgWholeStyle>
            <img src="https://cdn.pixabay.com/photo/2018/07/07/16/39/landscape-3522447_960_720.jpg"/>
        </ProfileBgImgWholeStyle>
    );
}

export default ProfileBgImg;