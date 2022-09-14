import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../auth";


const Nav: React.FC = () => {
    const [isLogin, setLogin] = useState<boolean>();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
            return;
        }
        setLogin(false);
    });
    return(
            <GlobalNavStyle>
                    <NavMenuStyle>
                        <NavMenuStyle>
                            <p><Link to='/'>홈</Link></p>
                            <p><Link to='/notice'>공지</Link></p>
                            <p><Link to='/post'>게시판</Link></p>
                            <p><Link to='/login'>
                                {isLogin ?
                                    <>로그아웃</>
                                    :
                                    <>로그인</>
                                }
                                </Link></p>
                            <p><Link to='/profile'>프로필</Link></p>
                            
                        </NavMenuStyle>
                    </NavMenuStyle>
            </GlobalNavStyle>
    );

}


const GlobalNavStyle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    background-color: rgba( 0, 0, 0, 0.6 );
    z-index: 150;
    width: 100%;
`;

const NavMenuStyle = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    z-index: 102;
    
    
    p{
        font-family: 'Pretendard-Bold';
        font-size: 20px;
        margin-left : 100px;
        margin-right: 100px;

        a { text-decoration: none; color: white; }
        a:visited { text-decoration: none; }
    }
    
`;

export default Nav;