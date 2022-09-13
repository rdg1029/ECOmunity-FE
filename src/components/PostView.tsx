import React from "react";

interface Props {
    id: string | null;
}

const PostView: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Post ID : {props.id}</h1>
        </div>
    )
}
export default PostView;