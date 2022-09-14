import React from "react";
import styled from "styled-components";
import ProfileBgImg from "../components/ProfileBgImg";
import ProfileBg from "../components/ProfileBg";




const Profile: React.FC = () => {
    return (
        <ProfileWholeContainer>
            <ProfileBgImg />
            <ProfileBg />
            <ProfileBgRect />
        </ProfileWholeContainer>
    );
}

const ProfileWholeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
`;

const ProfileBgRect = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 300px;
    background-color: white;
    border-radius: 3%;
    box-shadow: 5px -1px 10px 3px #206A5D;
`;

export default Profile;