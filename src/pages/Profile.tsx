import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";
import ProfileBgImg from "../components/ProfileBgImg";
import ProfileIntro from "../components/ProfileIntro";
import ProfilePoint from "../components/ProfilePoint";

const ProfileWholeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const Profile: React.FC = () => {
    return (
        <ProfileWholeContainer>
            <ProfileBgImg/> 
            <ProfileImg/>
            <ProfileIntro/>
            <ProfilePoint/>
        </ProfileWholeContainer>
    );
}

export default Profile;