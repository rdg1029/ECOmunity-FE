import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const NavBase = () => {
    return(
            <NavContainer>
                <Nav/>
                <Outlet/>
            </NavContainer>
                
    )
}

const NavContainer = styled.div`
    width: 100%;
    z-index: 300;
`;


export default NavBase;
