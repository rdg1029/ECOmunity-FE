import React from "react";
import styled from "styled-components";

const NoticeDecoRect = styled.div`
    width: 500px;
    height: 500px;
    background-color: green; 
`;

const NoticeDeco: React.FC = () =>{
    return(
        <>
            <NoticeDecoRect/>
        </>
    );
}

export default NoticeDeco;