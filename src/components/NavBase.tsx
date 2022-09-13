import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const NavBase = () => {
    return(
        <>
                <NavContainer>
                    <Nav/>
                    <Outlet/>
                </NavContainer>
                
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    position: fixed;
    z-index: 200;
`;


export default NavBase;
