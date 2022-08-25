import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
    return (
        <div>
            <h1>Main page</h1>
            <p><Link to='/profile'>프로필</Link></p>
            <p><Link to='/login'>로그인</Link></p>
            <p><Link to='/notice'>공지</Link></p>
            <p><Link to='/post'>게시판</Link></p>
        </div>
    );
}

export default Main;