import React from "react";
import styled from "styled-components";

import ProfileBgImg from "../components/ProfileBgImg";
import ProfileBg from "../components/ProfileBg";
import Nav from "../components/Nav";

const NavStyle = styled.div`
    z-index: 10;
`

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
    box-shadow: 5px -1px 10px 3px #206A5D;
`;


const Profile: React.FC = () => {
    return (
        <>
            <NavStyle>
            <Nav/>
            </NavStyle>
            <ProfileWholeContainer>
                <ProfileBgImg/> 
                <ProfileBg/>
                <ProfileBgRect/>
            </ProfileWholeContainer>
        </>
    );
}

export default Profile;