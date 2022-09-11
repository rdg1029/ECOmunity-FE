import React from "react";
import auth from "../auth";

const uName = auth.currentUser?.displayName;

const ProfileIntro : React.FC = () => {
    return(
        <>
            <h1>{uName}</h1>
            <h2>We are~ We are~</h2>
        </>
    );
}

export default ProfileIntro;