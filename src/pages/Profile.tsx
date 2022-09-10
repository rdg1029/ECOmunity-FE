import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";

const ProfileWholeContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color:pink;
    display: flex;
    flex-direction: column;
`;

const Profile: React.FC = () => {
    return (
        <ProfileWholeContainer>
            <h1>대충 프로필 들어가는 부분입니다.</h1>
            <ProfileImg/>

        </ProfileWholeContainer>
    );
}

export default Profile;