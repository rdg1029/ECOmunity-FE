import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import auth from "../auth"
import styled from "styled-components";

interface Props {
    id: string | null;
}

interface API_POST_DATA {
    POST_AUTHOR: string,
    POST_DATE: string,
    POST_CONTENT: string,
    POST_IMAGE: string,
    POST_TITLE: string
}

const PostViewLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

function getPost(data: any) {
    return (
        <div>
            <h1>{data.POST_TITLE}</h1>
            <p>{data.POST_AUTHOR}</p>
            <p>{data.POST_DATE}</p>
            <img src={data.POST_IMAGE}/>
            <p>{data.POST_CONTENT}</p>
        </div>
    )
}

const PostView: React.FC<Props> = (props) => {
    const [isLoaded, setLoaded] = useState<boolean | null>(false);
    const [postData, setPostData] = useState<any>();
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
                setPostData(res);
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
                getPost(postData)
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