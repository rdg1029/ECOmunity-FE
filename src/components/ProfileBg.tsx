import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileIntro from "./ProfileIntro";
import ProfilePoint from "./ProfilePoint";
import styled from "styled-components";



const ProfileBg:React.FC = () => {
    return(
        <ProfileContentsContainer>
            <ProfileImg/>
            <ProfileIntro/>
            <ProfilePoint/>
        </ProfileContentsContainer>
    );
}

const ProfileContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;

`;

export default ProfileBg;