import React from "react";
import styled from "styled-components";

const ProfileBgImgWholeStyle = styled.img`
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    z-index: -100;
`

const ProfileBgImg : React.FC = () => {
    return(
        <ProfileBgImgWholeStyle src="https://cdn.pixabay.com/photo/2018/07/07/16/39/landscape-3522447_960_720.jpg"/>
    );
}

export default ProfileBgImg;