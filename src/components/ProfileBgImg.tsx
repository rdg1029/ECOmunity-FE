import React from "react";
import styled from "styled-components";

const ProfileBgImgWholeStyle = styled.div`
    width: 100%;
    height: 500px;
    color: green;
    z-index: 0
`

const ProfileBgImg : React.FC = () => {
    return(
        <>
            <h1>아 코딩하기 싫다</h1>
        </>
    );
}

export default ProfileBgImg;