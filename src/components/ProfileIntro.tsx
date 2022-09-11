import React from "react";
import auth from "../auth";
import { useSelector } from 'react-redux';

const uName = auth.currentUser?.displayName;



const ProfileIntro : React.FC = () => {
    return(
        <>
            <h1>{uName}</h1>
        </>
    );
}

export default ProfileIntro;