import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../auth";
import request from "../util/RequestAPI";
import { API_POST_DATA } from "../util/ApiUtil";

const bgImgSrc = "https://images.pexels.com/photos/1384908/pexels-photo-1384908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const testImgSrc = "https://img.khan.co.kr/news/2022/01/11/2022011101001309200110521.jpg";

const PostView : React.FC = () => {
    const params = new URLSearchParams(window.location.search);
    const [postData, setPostData] = useState<API_POST_DATA>();
    const [isLoaded, setLoaded] = useState<boolean>();
    const [leafCnt, setLeafCnt] = useState(0);

    onAuthStateChanged(auth, user => {
        if (isLoaded) return;
        if (user) {
            user.getIdToken().then(token => {
                request.post('/board/getPost', {
                    USER_UID: user.uid,
                    USER_TOKEN: token,
                    POST_ID: params.get('id'),
                    POST_IS_NOTICE: false,
                })
                .then(res => {
                    console.log(res);
                    if (res.data.RESULT_CODE == 200) {
                        setPostData(res.data.RESULT_DATA);
                        setLeafCnt(res.data.RESULT_DATA.POST_RECOMMEND);
                        setLoaded(true);
                        return;
                    }
                    setLoaded(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoaded(false);
                });
            });
            return;
        }
        setLoaded(false);
    });

    const leafIncrese = () =>{
        setLeafCnt(leafCnt + 1);
    };

    return(
        <PostWrapper>
            <PostingBgImgStyle src={bgImgSrc}/>
            {postData ?
                <PostViewStyle>
                    <TitleStyle>
                        {postData.POST_TITLE}
                    </TitleStyle>

                    <WriterAndDateStyle>
                        <p>{postData.POST_DATE} {postData.POST_AUTHOR}</p>
                    </WriterAndDateStyle>
                    <LikeStyle onClick={leafIncrese}>
                        <FontAwesomeIcon icon={faLeaf} color="#14C38E" size="2x" />
                        <p>{leafCnt}</p>
                    </LikeStyle>

                    <PostContentsStyle>
                        <PostImageStyle src={postData.POST_IMAGE} />

                        <PostTextContentStyle>
                            {postData.POST_CONTENT.replace(/\\n/g, "\n")}
                        </PostTextContentStyle>

                    </PostContentsStyle>

                </PostViewStyle>
            : isLoaded === undefined ?
                <h1>불러오는 중...</h1>
            :
                <h1>게시글을 불러올 수 없습니다!</h1>
            }
        </PostWrapper>
    );
};

const PostingBgImgStyle = styled.img`
    width: 2400px;
    height: 1600px;
    position: absolute;
    z-index: -100;
    filter: blur(3px);
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;
const PostViewStyle = styled.div`
    width: 70%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1%;
    background-color: rgba( 255, 255, 255, 0.6 );
`;


const TitleStyle = styled.h1`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Regular';
    font-size: 30pt;
    
`;

const WriterAndDateStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family: 'Pretendard-Thin';
    font-size: 15pt;
    display: flex;
    flex-direction: row-reverse;
    margin-left: 15px;

    
`;

const PostContentsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const PostTextContentStyle = styled.div`
    width: 70%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 15pt;
    white-space: pre;
`;

const PostImageStyle = styled.img`
    width: 70%;
    height: 70%;
    
`;

const LikeStyle = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-top: 0px;
    border: 0;
    outline: 0;
    background-color: transparent;

    p{
        font-size: 15pt;
        margin-left: 10px;
    }

`;



export default PostView;
