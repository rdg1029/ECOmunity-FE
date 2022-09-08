import React, { useState } from "react";
import auth from "../auth";
import PostWrite from "../components/PostWrite";

const Post: React.FC = () => {
    const [isWriteMode, setWriteMode] = useState<boolean>(false);

    return (
        <div>
            <h1>Post page</h1>
            <button onClick={() => auth.currentUser ? setWriteMode(true) : window.alert('로그인이 필요한 서비스입니다.')}>작성</button>
            <PostWrite show={isWriteMode} onClose={() => setWriteMode(false)}/>
        </div>
    );
}

export default Post;