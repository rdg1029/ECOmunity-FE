import React from "react";
import styled from "styled-components";

const ProfileImgWholeStyle = styled.div`
    background-color:#86efef;
    width:150px;
    height:150px;
    border-radius:75px;
    text-align:center;
    margin:0 auto;
    font-size:12px;
    vertical-align:middle;
    line-height:150px;
    
`;

const ProfileImg : React.FC = () => {
    return(
        <ProfileImgWholeStyle>
            <h1>Profile Image</h1>
        </ProfileImgWholeStyle>
    );
}

export default ProfileImg;