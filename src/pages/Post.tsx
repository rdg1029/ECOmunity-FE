import React, { useState } from "react";
import auth from "../auth";
import PostView from "../components/PostView";
import PostWrite from "../components/PostWrite";

const Post: React.FC = () => {
    const [isWriteMode, setWriteMode] = useState<boolean>(false);
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('id')) return <PostView id={searchParams.get('id')} />

    return (
        <div>
            <h1>Post page</h1>
            <button onClick={() => auth.currentUser ? setWriteMode(true) : window.alert('로그인이 필요한 서비스입니다.')}>작성</button>
            <PostWrite show={isWriteMode}/>
        </div>
    );
}

export default Post;