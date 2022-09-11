import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";
import ProfileBgImg from "../components/ProfileBgImg";
import ProfileIntro from "../components/ProfileIntro";
import ProfilePoint from "../components/ProfilePoint";
import ProfileBg from "../components/ProfileBg";

const ProfileWholeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const ProfileBgRect = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 250px;
    background-color: white;
    position: absolute;
    z-index: -1;
    border-radius: 3%;
    box-shadow: 5px -1px 10px 3px grey;
`;

const Profile: React.FC = () => {
    return (
        <ProfileWholeContainer>
            <ProfileBgImg/> 
            <ProfileBg/>
            <ProfileBgRect/>
        </ProfileWholeContainer>
    );
}

export default Profile;