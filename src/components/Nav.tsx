import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GlobalNavStyle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`;

const NavMenuStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    
    
    p{
        font-family: 'Pretendard-Bold';
        font-size: 20px;
        margin-left : 100px;
        margin-right: 100px;
        a { text-decoration: none; color: white; }
        a:visited { text-decoration: none; }
    }
    
`;

const Nav: React.FC = () => {
    return(
        <> 
            <GlobalNavStyle>
                <NavMenuStyle>
                    <NavMenuStyle>
                        <p><Link to='/profile'>프로필</Link></p>
                        <p><Link to='/login'>로그인</Link></p>
                        <p><Link to='/notice'>공지</Link></p>
                        <p><Link to='/post'>게시판</Link></p>
                    </NavMenuStyle>
                </NavMenuStyle>
            </GlobalNavStyle>
        
        </>
    );

}

export default Nav;
