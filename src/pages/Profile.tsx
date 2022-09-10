import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";
import ProfileBgImg from "../components/ProfileBgImg";

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
            <h1>대충 프로필 들어가는 부분입니다.</h1>
            <ProfileBgImg/>
            <ProfileImg/>


        </ProfileWholeContainer>
    );
}

export default Profile;