import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 1920px;
    height: 40px;
    background-color: grey;
`;

const NavMenuStyle = styled.p`
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    color: white;
    a { text-decoration: none; color: black; }
    a:visited { text-decoration: none; }
`;

const Nav: React.FC = () => {
    return(
        <>
            <NavStyle>
                <h1>
                    NAV
                </h1>
                <NavMenuStyle>
                    <p><Link to='/profile'>프로필</Link></p>
                </NavMenuStyle>
                <NavMenuStyle>
                    <p><Link to='/login'>로그인</Link></p>
                </NavMenuStyle>
                <NavMenuStyle>
                    <p><Link to='/notice'>공지</Link></p>
                </NavMenuStyle>
                <NavMenuStyle>
                    <p><Link to='/post'>게시판</Link></p>
                </NavMenuStyle>
            </NavStyle>
        
        </>
    );

}

export default Nav;
