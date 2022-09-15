import React, {useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";


const bgImgSrc = "https://images.pexels.com/photos/1384908/pexels-photo-1384908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const testImgSrc = "https://img.khan.co.kr/news/2022/01/11/2022011101001309200110521.jpg";

const PostView : React.FC = () => {
    const [leafCnt, setLeafCnt] = useState(0);

    const leafIncrese = () =>{
        setLeafCnt(leafCnt + 1);
    };

    return(
        <PostWrapper>
            <PostingBgImgStyle src={bgImgSrc}/>
        <PostViewStyle>
            <TitleStyle>
                여기는 우리의 인증이 들어갈 곳이지요
            </TitleStyle>

            <WriterAndDateStyle>
                <p>2022.09.15 김현우</p>
            </WriterAndDateStyle>
            <LikeStyle onClick={leafIncrese}>
                    <FontAwesomeIcon icon={faLeaf} color="#14C38E" size="2x"/>
                    <p>{leafCnt}</p>
            </LikeStyle>

            <PostContentsStyle>
                <PostImageStyle src={testImgSrc}/>

                <PostTextContentStyle>
                    모든 국민은 보건에 관하여 국가의 보호를 받는다. 
                    저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.
                    공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.
                    감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다. 모든 국민은 신체의 자유를 가진다.
                    누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. 
                    비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.
                    제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 
                    대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 
                    대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.
                    국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 
                    제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다. 
                    통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.
                     국채를 모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다. 제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다.
                </PostTextContentStyle>

            </PostContentsStyle>

        </PostViewStyle>
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
