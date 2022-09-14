import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import auth from "../auth"
import styled from "styled-components";

interface Props {
    id: string | null;
}

const PostViewLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostView: React.FC<Props> = (props) => {
    const [isLoaded, setLoaded] = useState<boolean | null>(false);
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
                setLoaded(true);
            }).catch(err => {
                console.log(err);
                setLoaded(null);
            });
        }); 
    });
    return (
        <PostViewLayout>
            {
                isLoaded ?
                <h1>내용 불러옴</h1>
                :
                isLoaded === false ?
                <h1>불러오는 중...</h1>
                :
                <h1>게시글을 불러올 수 없습니다!</h1>
            }
        </PostViewLayout>
    )
}
export default PostView;