import React, { useState } from "react";
import PostWrite from "../components/PostWrite";

const Post: React.FC = () => {
    const [isWriteMode, setWriteMode] = useState<boolean>(false);

    return (
        <div>
            <h1>Post page</h1>
            <button onClick={() => setWriteMode(true)}>작성</button>
            <PostWrite show={isWriteMode} onClose={() => setWriteMode(false)} onSubmit={() => console.log('submit')}/>
        </div>
    );
}

export default Post;