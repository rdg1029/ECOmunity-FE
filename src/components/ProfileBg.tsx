import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileIntro from "./ProfileIntro";
import ProfilePoint from "./ProfilePoint";
import styled from "styled-components";

const ProfileContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;

`;

const ProfileBg:React.FC = () => {
    return(
        <ProfileContentsContainer>
            <ProfileImg/>
            <ProfileIntro/>
            <ProfilePoint/>
        </ProfileContentsContainer>
    );
}

export default ProfileBg;