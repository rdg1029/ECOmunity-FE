import React from "react";
import NoticeDeco from "../components/NoticeDeco";
import NoticeThumbnail from "../components/NoticeThumbnail";

const companyNum = 3;

const NoticeTitle: React.FC = () => {
    return(
        <>
        <h1>환경 보호 캠페인</h1>
        <h1>{companyNum} 개의 기업이 함께하고 있어요. </h1>
        </>
    );
}

const Notice: React.FC = () => {
    return (
        <div>
            <NoticeDeco/>
            <h1>Notice page</h1>
            
                
            <NoticeTitle/>
            <NoticeThumbnail/>
        </div>
    );
}

export default Notice;