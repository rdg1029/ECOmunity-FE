import React from "react";
import styled from "styled-components";

const ProfileImgWholeStyle = styled.div`
    background-color:#86efef;
    width:300px;
    height:300px;
    border-radius:300px;
    text-align:center;
    margin:0 auto;
    margin-top: 100px;
    font-size:12px;
    vertical-align:middle;
    line-height:300px;

    
`;

const ProfileImg : React.FC = () => {
    return(
        <ProfileImgWholeStyle>
            <h1>Profile Image</h1>
        </ProfileImgWholeStyle>
    );
}

export default ProfileImg;