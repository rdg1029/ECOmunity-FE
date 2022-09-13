import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import auth from "../auth"

interface Props {
    id: string | null;
}

const PostView: React.FC<Props> = (props) => {
    const [isLoaded, setLoaded] = useState<boolean>(false);
    onAuthStateChanged(auth, user => {
        if (!user) return;
        user.getIdToken().then(idToken => {
            axios.post('https://eco-api.defcon.or.kr/board/getPost', {
                USER_UID: user.uid,
                USER_TOKEN: idToken,
                POST_ID: props.id,
                POST_IS_NOTICE: false,
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }); 
    });
    return (
        <div>
            <h1>Post ID : {props.id}</h1>
        </div>
    )
}
export default PostView;