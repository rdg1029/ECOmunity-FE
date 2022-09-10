import React from "react";

const uName = "정승민";
const point = 706;

const ProfilePoint:React.FC = () => {
    return(
        <>
            <h1>{uName} 님의 Ecomunity 포인트</h1>
            <h1>{point} 점</h1>
        </>
    );
}

export default ProfilePoint;
