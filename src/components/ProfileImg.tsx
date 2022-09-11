import React from "react";
import styled from "styled-components";
import auth from "../auth";

const ProfileImgWholeStyle = styled.div`
    width:300px;
    height:300px;
    border-radius:300px;
    text-align:center;
    margin:0 auto;
    margin-top: 100px;
    font-size:12px;
    vertical-align:middle;
    line-height:300px;
    z-index: 3;

    img{
        width: 100%;
        height: 100%;
        border-radius: 70%;
        border: 5px solid green;
    }

    
`;

const ProfileImg : React.FC = () => {
    return(
        <ProfileImgWholeStyle>
            <img src={auth.currentUser?.photoURL as string}/>
        </ProfileImgWholeStyle>
        
    );
}

export default ProfileImg;


                