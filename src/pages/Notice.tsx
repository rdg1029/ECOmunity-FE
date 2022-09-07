import React from "react";
import NoticeDeco from "../components/NoticeDeco";

const companyNum = 3;

const NoticeText: React.FC = () => {
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
            <NoticeText/>
        </div>
    );
}

export default Notice;